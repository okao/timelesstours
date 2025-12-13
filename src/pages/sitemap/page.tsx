import { useEffect } from 'react';
import { generateSitemap } from '../../utils/generateSitemap';

export default function Sitemap() {
	useEffect(() => {
		const sitemap = generateSitemap();

		// Set content type and send sitemap
		const blob = new Blob([sitemap], { type: 'application/xml' });
		const url = URL.createObjectURL(blob);

		// For server-side, this would be handled differently
		// This is a client-side fallback
		window.location.href = url;
	}, []);

	return null;
}
