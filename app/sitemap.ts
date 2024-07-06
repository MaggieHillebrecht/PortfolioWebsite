// app/sitemap.ts

import { generateSitemapData } from './utils'; // Adjust the import path as per your actual project structure

const generateSitemapXml = async () => {
  const data = await generateSitemapData();

  const xml = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${data.map(entry => `
        <url>
          <loc>${entry.url}</loc>
          <lastmod>${entry.lastModified}</lastmod>
        </url>
      `).join('')}
    </urlset>
  `;

  return xml;
};

export default generateSitemapXml;
