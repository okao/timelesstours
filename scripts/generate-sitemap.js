// Generate sitemap.xml at build time
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseUrl = 'https://thetimelesstours.com';
const currentDate = new Date().toISOString().split('T')[0];

// Import tours data
const toursModule = await import('../src/mocks/tours.ts');
const { tours, exclusivePackage } = toursModule;

const routes = [
  { url: baseUrl, changefreq: 'daily', priority: '1.0' },
  { url: `${baseUrl}/tours`, changefreq: 'weekly', priority: '0.9' },
  { url: `${baseUrl}/about`, changefreq: 'monthly', priority: '0.8' },
  { url: `${baseUrl}/faq`, changefreq: 'monthly', priority: '0.7' },
  { url: `${baseUrl}/contact`, changefreq: 'monthly', priority: '0.8' },
];

// Add exclusive package
routes.push({
  url: `${baseUrl}/tour/${exclusivePackage.id}`,
  changefreq: 'weekly',
  priority: '0.9'
});

// Add all tours
tours.forEach(tour => {
  routes.push({
    url: `${baseUrl}/tour/${tour.id}`,
    changefreq: 'weekly',
    priority: '0.8'
  });
});

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${routes.map(route => `  <url>
    <loc>${route.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

// Write to public directory
const publicDir = path.join(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
console.log('✅ Sitemap generated successfully!');

