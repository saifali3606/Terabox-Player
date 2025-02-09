const fs = require("fs");
const path = require("path");

const domain = "https://terabox-player.netlify.app"; // Change this to your website URL

const pages = [
  "/",
  "/video",
  "/contact"
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `
  <url>
    <loc>${domain}${page}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === "/" ? "1.0" : "0.8"}</priority>
  </url>
`
  )
  .join("")}
</urlset>`;

fs.writeFileSync(path.join(__dirname, "public", "sitemap.xml"), sitemap);
console.log("✅ Sitemap generated!");
