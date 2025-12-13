import { useEffect } from 'react';

interface SEOProps {
	title?: string;
	description?: string;
	keywords?: string;
	image?: string;
	url?: string;
	type?: string;
	siteName?: string;
	locale?: string;
	structuredData?: object;
}

export default function SEO({
	title = 'Timeless Tours Maldives — Sail Through the White Pearls of the Indian Ocean',
	description = 'At timeless tours we invite you to lose yourself in moments that lasts forever. Experience authentic Maldivian adventures including snorkeling, manta ray encounters, whale shark tours, and island hopping in the pristine waters of Vaavu Atoll.',
	keywords = 'Maldives tours, Fulidhoo tours, Vaavu Atoll, snorkeling Maldives, manta ray Maldives, whale shark Maldives, island hopping Maldives, Maldivian adventures, local island tours, Fulidhoo packages',
	image = 'https://thetimelesstours.com/og-image.jpg',
	url = 'https://thetimelesstours.com',
	type = 'website',
	siteName = 'Timeless Tours Maldives',
	locale = 'en_US',
	structuredData,
}: SEOProps) {
	useEffect(() => {
		// Update document title
		document.title = title;

		// Update or create meta tags
		const updateMetaTag = (
			name: string,
			content: string,
			attribute: string = 'name'
		) => {
			let element = document.querySelector(
				`meta[${attribute}="${name}"]`
			) as HTMLMetaElement;
			if (!element) {
				element = document.createElement('meta');
				element.setAttribute(attribute, name);
				document.head.appendChild(element);
			}
			element.content = content;
		};

		// Basic meta tags
		updateMetaTag('description', description);
		updateMetaTag('keywords', keywords);
		updateMetaTag('author', 'Timeless Tours Maldives');
		updateMetaTag('robots', 'index, follow');
		updateMetaTag('googlebot', 'index, follow');
		updateMetaTag('language', 'English');
		updateMetaTag('revisit-after', '7 days');

		// Open Graph tags
		updateMetaTag('og:title', title, 'property');
		updateMetaTag('og:description', description, 'property');
		updateMetaTag('og:image', image, 'property');
		updateMetaTag('og:url', url, 'property');
		updateMetaTag('og:type', type, 'property');
		updateMetaTag('og:site_name', siteName, 'property');
		updateMetaTag('og:locale', locale, 'property');

		// Twitter Card tags
		updateMetaTag('twitter:card', 'summary_large_image');
		updateMetaTag('twitter:title', title);
		updateMetaTag('twitter:description', description);
		updateMetaTag('twitter:image', image);
		updateMetaTag('twitter:site', '@timelesstours');
		updateMetaTag('twitter:creator', '@timelesstours');

		// Canonical URL
		let canonical = document.querySelector(
			'link[rel="canonical"]'
		) as HTMLLinkElement;
		if (!canonical) {
			canonical = document.createElement('link');
			canonical.rel = 'canonical';
			document.head.appendChild(canonical);
		}
		canonical.href = url;

		// Structured Data (JSON-LD)
		if (structuredData) {
			// Remove existing structured data
			const existingScript = document.querySelector(
				'script[type="application/ld+json"]'
			);
			if (existingScript) {
				existingScript.remove();
			}

			// Add new structured data
			const script = document.createElement('script');
			script.type = 'application/ld+json';
			script.text = JSON.stringify(structuredData);
			document.head.appendChild(script);
		}
	}, [
		title,
		description,
		keywords,
		image,
		url,
		type,
		siteName,
		locale,
		structuredData,
	]);

	return null;
}
