import { cache } from "react";

const CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME ?? "deuwal5fr";
const API_KEY = process.env.CLOUDINARY_API_KEY ?? "";
const API_SECRET = process.env.CLOUDINARY_API_SECRET ?? "";

export type GalleryCategory = {
  name: string;
  images: string[];
};

function authHeader() {
  const creds = Buffer.from(`${API_KEY}:${API_SECRET}`).toString("base64");
  return { Authorization: `Basic ${creds}` };
}

async function getSubfolders(folderPath: string): Promise<string[]> {
  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/folders/${encodeURIComponent(folderPath)}`,
    { headers: authHeader(), next: { revalidate: 3600 } }
  );
  if (!res.ok) return [];
  const data = await res.json();
  return (data.folders ?? []).map((f: { name: string }) => f.name);
}

async function getImages(prefix: string): Promise<string[]> {
  const urls: string[] = [];
  let nextCursor: string | undefined;

  do {
    const params = new URLSearchParams({
      prefix: `${prefix}/`,
      type: "upload",
      max_results: "500",
      resource_type: "image",
    });
    if (nextCursor) params.set("next_cursor", nextCursor);

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/resources/image?${params}`,
      { headers: authHeader(), next: { revalidate: 3600 } }
    );
    if (!res.ok) break;

    const data = await res.json();
    for (const r of data.resources ?? []) {
      urls.push(r.secure_url as string);
    }
    nextCursor = data.next_cursor;
  } while (nextCursor);

  return urls;
}

export const getGalleryCategories = cache(async function (
  galleryFolder: string
): Promise<GalleryCategory[]> {
  if (!API_KEY || !API_SECRET) return [];

  const subfolders = await getSubfolders(galleryFolder);
  if (!subfolders.length) return [];

  const categories = await Promise.all(
    subfolders.map(async (sub) => ({
      name: sub,
      images: await getImages(`${galleryFolder}/${sub}`),
    }))
  );

  return categories.filter((c) => c.images.length > 0);
});
