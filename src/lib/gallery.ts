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
  return { Authorization: `Basic ${creds}`, "Content-Type": "application/json" };
}

async function getSubfolders(folderPath: string): Promise<string[]> {
  const encoded = folderPath.split("/").map(encodeURIComponent).join("/");
  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/folders/${encoded}`,
    { headers: authHeader(), next: { revalidate: 3600 } }
  );
  if (!res.ok) return [];
  const data = await res.json();
  return (data.folders ?? []).map((f: { name: string }) => f.name);
}

async function searchByFolder(assetFolder: string): Promise<string[]> {
  const urls: string[] = [];
  let nextCursor: string | undefined;

  do {
    const body: Record<string, unknown> = {
      expression: `asset_folder="${assetFolder}"`,
      max_results: 500,
    };
    if (nextCursor) body.next_cursor = nextCursor;

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/resources/search`,
      { method: "POST", headers: authHeader(), body: JSON.stringify(body), next: { revalidate: 3600 } }
    );
    if (!res.ok) break;

    const data = await res.json();
    for (const r of data.resources ?? []) urls.push(r.secure_url as string);
    nextCursor = data.next_cursor;
  } while (nextCursor);

  return urls;
}

// Recursively collects all images under a folder path (handles nested subfolders)
async function collectImages(folderPath: string): Promise<string[]> {
  const [images, subs] = await Promise.all([
    searchByFolder(folderPath),
    getSubfolders(folderPath),
  ]);
  const nested = await Promise.all(subs.map((s) => collectImages(`${folderPath}/${s}`)));
  return [...images, ...nested.flat()];
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
      images: await collectImages(`${galleryFolder}/${sub}`),
    }))
  );

  return categories.filter((c) => c.images.length > 0);
});
