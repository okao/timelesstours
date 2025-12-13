// Sitemap generator utility
import { tours, exclusivePackage } from '../mocks/tours';

const baseUrl = 'https://thetimelesstours.com';

export function generateSitemap(): string {
	const routes = [
		{ url: baseUrl, changefreq: 'daily', priority: '1.0' },
		{
			url: `${baseUrl}/tours`,
			changefreq: 'weekly',
			priority: '0.9',
		},
		{
			url: `${baseUrl}/about`,
			changefreq: 'monthly',
			priority: '0.8',
		},
		{ url: `${baseUrl}/faq`, changefreq: 'monthly', priority: '0.7' },
		{
			url: `${baseUrl}/contact`,
			changefreq: 'monthly',
			priority: '0.8',
		},
	];

	// Add exclusive package
	routes.push({
		url: `${baseUrl}/tour/${exclusivePackage.id}`,
		changefreq: 'weekly',
		priority: '0.9',
	});

	// Add all tours
	tours.forEach((tour) => {
		routes.push({
			url: `${baseUrl}/tour/${tour.id}`,
			changefreq: 'weekly',
			priority: '0.8',
		});
	});

	const currentDate = new Date().toISOString();

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${routes
	.map(
		(route) => `  <url>
    <loc>${route.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
	)
	.join('\n')}
</urlset>`;

	return sitemap;
}
