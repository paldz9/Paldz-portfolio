import fs from "fs";
import path from "path";

export type GalleryCategory = {
  name: string;
  images: string[];
};

const IMAGE_RE = /\.(jpe?g|png|webp|gif|avif)$/i;

function collectImages(dir: string, urlPrefix: string): string[] {
  const items = fs.readdirSync(dir, { withFileTypes: true });
  const images: string[] = [];
  for (const item of items) {
    const itemUrl = `${urlPrefix}/${encodeURIComponent(item.name)}`;
    if (item.isDirectory()) {
      images.push(...collectImages(path.join(dir, item.name), itemUrl));
    } else if (IMAGE_RE.test(item.name)) {
      images.push(itemUrl);
    }
  }
  return images;
}

export function getGalleryCategories(galleryFolder: string): GalleryCategory[] {
  const base = path.join(process.cwd(), "public", "assets", galleryFolder);
  if (!fs.existsSync(base)) return [];

  const baseUrl = `/assets/${encodeURIComponent(galleryFolder)}`;
  const items = fs.readdirSync(base, { withFileTypes: true });

  return items
    .filter((item) => item.isDirectory())
    .map((item) => {
      const catDir = path.join(base, item.name);
      const catUrl = `${baseUrl}/${encodeURIComponent(item.name)}`;
      return {
        name: item.name,
        images: collectImages(catDir, catUrl),
      };
    })
    .filter((cat) => cat.images.length > 0);
}
