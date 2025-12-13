import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import WhatsAppButton from '../../components/feature/WhatsAppButton';
import ImageGallery from '../../components/base/ImageGallery';
import Accordion from '../../components/base/Accordion';
import SEO from '../../components/base/SEO';
import { tours, exclusivePackage } from '../../mocks/tours';

export default function TourDetail() {
	const { id } = useParams();
	const tourId = parseInt(id || '');
	const tour =
		tourId === 0
			? exclusivePackage
			: tours.find((t) => t.id === tourId);
	const [showBookingForm, setShowBookingForm] = useState(false);

	// Generate structured data for tour
	const tourStructuredData = tour
		? {
				'@context': 'https://schema.org',
				'@type': 'TouristTrip',
				name: tour.title,
				description: tour.fullDescription || tour.shortDescription,
				image: tour.image,
				offers: {
					'@type': 'Offer',
					availability: 'https://schema.org/InStock',
					priceCurrency: 'USD',
					url: `https://thetimelesstours.com/tour/${tour.id}`,
				},
				itinerary: tour.itinerary
					? tour.itinerary.map((item: any) => ({
							'@type': 'TouristDestination',
							name: item.title,
							description: item.description,
					  }))
					: undefined,
		  }
		: null;

	if (!tour) {
		return (
			<div className="min-h-screen bg-stone-50 flex items-center justify-center">
				<div className="text-center">
					<h1 className="text-4xl font-bold text-slate-800 mb-4">
						Tour Not Found
					</h1>
					<Link
						to="/tours"
						className="text-teal-600 hover:text-teal-700"
					>
						Back to Packages
					</Link>
				</div>
			</div>
		);
	}

	const relatedTours = tours
		.filter(
			(t) =>
				t.id !== tour.id &&
				t.id !== 0 &&
				t.destination === tour.destination
		)
		.slice(0, 3);

	const galleryImages = [
		tour.image,
		'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=600&fit=crop&q=80',
		'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&q=80',
		'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&h=600&fit=crop&q=80',
		'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop&q=80',
		'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop&q=80',
	];

	const itineraryAccordion = tour.itinerary.map((item) => ({
		id: item.day,
		title: `Day ${item.day}: ${item.title}`,
		content: item.description,
	}));

	const handleBookingSubmit = async (
		e: React.FormEvent<HTMLFormElement>
	) => {
		e.preventDefault();
		const form = e.currentTarget;

		// Show success message without API call
		alert(
			'Thank you for your booking inquiry! We will contact you within 24 hours.'
		);
		form.reset();
		setShowBookingForm(false);
	};

	const scrollToBooking = () => {
		setShowBookingForm(true);
		setTimeout(() => {
			const element = document.getElementById('booking-form');
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' });
			}
		}, 100);
	};

	return (
		<>
			<SEO
				title={`${tour.title} | Timeless Tours Maldives`}
				description={
					tour.shortDescription ||
					tour.fullDescription ||
					`Experience ${tour.title} in ${tour.destination} with Timeless Tours Maldives.`
				}
				keywords={`${tour.title}, ${tour.destination}, Maldives tours, ${tour.type}, Timeless Tours`}
				url={`https://thetimelesstours.com/tour/${tour.id}`}
				image={tour.image}
				type="product"
				structuredData={tourStructuredData || undefined}
			/>
			<div className="min-h-screen bg-stone-50">
				<Navbar />
				<WhatsAppButton />

				{/* Hero Section */}
				<section
					className="relative h-96 flex items-end bg-cover bg-center bg-no-repeat"
					style={{
						backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${tour.image}')`,
					}}
				>
					<div className="w-full bg-gradient-to-t from-black/60 to-transparent p-8">
						<div className="max-w-7xl mx-auto">
							<div className="text-white">
								<h1
									className="text-4xl md:text-5xl font-bold mb-4"
									style={{ fontFamily: 'Playfair Display, serif' }}
								>
									{tour.title}
								</h1>
								<div className="flex flex-wrap gap-4 text-lg">
									<span className="flex items-center">
										<i className="ri-map-pin-line mr-2"></i>
										{tour.destination}
									</span>
									<span className="flex items-center">
										<i className="ri-time-line mr-2"></i>
										{tour.duration}
									</span>
									<span className="flex items-center">
										<i className="ri-price-tag-3-line mr-2"></i>
										{tour.type}
									</span>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Package Info Cards - Only for Exclusive Package */}
				{tour.id === 0 && (
					<section className="py-6 -mt-8 relative z-10">
						<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
							<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
								{/* Duration Card */}
								<div className="bg-white rounded-lg border-2 border-teal-200 p-6">
									<div className="text-center">
										<div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
											<i className="ri-time-line text-xl text-gray-600"></i>
										</div>
										<h3 className="text-xs font-semibold uppercase mb-3 text-gray-500 tracking-wider">
											DURATION
										</h3>
										<p className="text-sm text-gray-800 font-medium">
											6 nights
										</p>
										<p className="text-sm text-gray-800 font-medium">
											7 days
										</p>
									</div>
								</div>

								{/* Location Card */}
								<div className="bg-white rounded-lg border-2 border-teal-200 p-6">
									<div className="text-center">
										<div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
											<i className="ri-map-pin-line text-xl text-gray-600"></i>
										</div>
										<h3 className="text-xs font-semibold uppercase mb-3 text-gray-500 tracking-wider">
											LOCATION
										</h3>
										<p className="text-sm text-gray-800 font-medium">
											Fulidhoo
										</p>
										<p className="text-xs text-gray-500 mt-1">
											Airport: Velana International
										</p>
									</div>
								</div>

								{/* Hotel Card */}
								<div className="bg-white rounded-lg border-2 border-teal-200 p-6">
									<div className="text-center">
										<div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
											<i className="ri-hotel-line text-xl text-gray-600"></i>
										</div>
										<h3 className="text-xs font-semibold uppercase mb-3 text-gray-500 tracking-wider">
											HOTEL
										</h3>
										<p className="text-sm text-gray-800 font-medium">
											The Mureed
										</p>
										<p className="text-sm text-gray-800 font-medium">
											Malas
										</p>
									</div>
								</div>
							</div>
						</div>
					</section>
				)}

				{/* Tour Details */}
				<section className="py-16">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
							{/* Main Content */}
							<div className="lg:col-span-2">
								{/* Overview */}
								<div className="bg-white rounded-lg shadow-lg p-8 mb-8">
									<h2 className="text-3xl font-bold text-slate-800 mb-6">
										Tour Overview
									</h2>
									<p className="text-lg text-gray-700 leading-relaxed mb-6">
										{tour.fullDescription}
									</p>

									<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
										<div>
											<h3 className="text-xl font-semibold text-slate-800 mb-4">
												What's Included
											</h3>
											<ul className="space-y-2">
												{tour.inclusions.map((item, index) => (
													<li
														key={index}
														className="flex items-center text-gray-700"
													>
														<i className="ri-check-line text-green-500 mr-3"></i>
														{item}
													</li>
												))}
											</ul>
										</div>

										<div>
											<h3 className="text-xl font-semibold text-slate-800 mb-4">
												What's Not Included
											</h3>
											<ul className="space-y-2">
												{tour.exclusions.map((item, index) => (
													<li
														key={index}
														className="flex items-center text-gray-700"
													>
														<i className="ri-close-line text-red-500 mr-3"></i>
														{item}
													</li>
												))}
											</ul>
										</div>
									</div>
								</div>

								{/* Itinerary */}
								<div className="bg-white rounded-lg shadow-lg p-8 mb-8">
									<h2 className="text-3xl font-bold text-slate-800 mb-6">
										Detailed Itinerary
									</h2>
									<Accordion items={itineraryAccordion} />
								</div>

								{/* Image Gallery */}
								<div className="bg-white rounded-lg shadow-lg p-8">
									<h2 className="text-3xl font-bold text-slate-800 mb-6">
										Photo Gallery
									</h2>
									<ImageGallery
										images={galleryImages}
										alt={tour.title}
									/>
								</div>
							</div>

							{/* Sidebar */}
							<div className="lg:col-span-1">
								{/* Booking Card */}
								<div className="bg-gradient-to-br from-teal-50 to-white rounded-xl shadow-xl p-8 sticky top-24 border border-teal-100">
									<div className="text-center mb-8">
										<div className="inline-flex items-center justify-center w-20 h-20 bg-teal-100 rounded-full mb-4">
											<i className="ri-price-tag-3-line text-4xl text-teal-600"></i>
										</div>
										<h3 className="text-2xl font-bold text-slate-800 mb-2">
											Get Your Price
										</h3>
										<p className="text-gray-600 text-sm">
											Contact us via WhatsApp for personalized pricing
											and special offers
										</p>
									</div>

									<a
										href={`https://wa.me/9609404623?text=${encodeURIComponent(
											`Hi! I'm interested in the package: ${tour.title}. Can you please send me the price?`
										)}`}
										target="_blank"
										rel="noopener noreferrer"
										className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-[#25D366] text-white font-semibold rounded-xl hover:bg-[#20BA5A] transition-all duration-300 mb-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
									>
										<i className="ri-whatsapp-line text-2xl"></i>
										<span>Ask for Price on WhatsApp</span>
									</a>

									<button
										onClick={scrollToBooking}
										className="w-full px-6 py-3 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 transition-all duration-300 mb-6 shadow-md hover:shadow-lg"
									>
										Book This Package
									</button>

									<div className="bg-white rounded-lg p-5 mb-6 border border-gray-100">
										<h4 className="font-semibold text-slate-800 mb-4 text-center">
											Package Details
										</h4>
										<div className="space-y-3 text-sm">
											<div className="flex items-center justify-between py-2 border-b border-gray-100">
												<span className="flex items-center text-gray-600">
													<i className="ri-time-line mr-2 text-teal-600"></i>
													Duration
												</span>
												<span className="font-medium text-slate-800">
													{tour.duration}
												</span>
											</div>
											<div className="flex items-center justify-between py-2 border-b border-gray-100">
												<span className="flex items-center text-gray-600">
													<i className="ri-group-line mr-2 text-teal-600"></i>
													Group Size
												</span>
												<span className="font-medium text-slate-800">
													Max 12 people
												</span>
											</div>
											<div className="flex items-center justify-between py-2 border-b border-gray-100">
												<span className="flex items-center text-gray-600">
													<i className="ri-global-line mr-2 text-teal-600"></i>
													Languages
												</span>
												<span className="font-medium text-slate-800">
													English, Spanish
												</span>
											</div>
											<div className="flex items-center justify-between py-2">
												<span className="flex items-center text-gray-600">
													<i className="ri-bar-chart-line mr-2 text-teal-600"></i>
													Difficulty
												</span>
												<span className="font-medium text-slate-800">
													Moderate
												</span>
											</div>
										</div>
									</div>

									<div className="bg-gradient-to-r from-teal-50 to-transparent rounded-lg p-5 border border-teal-100">
										<h4 className="font-semibold text-slate-800 mb-3 flex items-center">
											<i className="ri-customer-service-2-line mr-2 text-teal-600"></i>
											Need Help?
										</h4>
										<div className="space-y-2 text-sm">
											<a
												href="https://wa.me/9609404623"
												target="_blank"
												rel="noopener noreferrer"
												className="flex items-center text-gray-700 hover:text-teal-600 transition-colors"
											>
												<i className="ri-whatsapp-line mr-2 text-[#25D366]"></i>
												WhatsApp Support
											</a>
											<div className="flex items-center text-gray-600">
												<i className="ri-mail-line mr-2 text-teal-600"></i>
												info@timelesstours.com
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Booking Form */}
				{showBookingForm && (
					<section id="booking-form" className="py-16 bg-white">
						<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
							<div className="text-center mb-12">
								<h2 className="text-3xl font-bold text-slate-800 mb-4">
									Book Your Adventure
								</h2>
								<p className="text-xl text-gray-600">
									Fill out the form below and we'll get back to you
									within 24 hours
								</p>
							</div>

							<form
								onSubmit={handleBookingSubmit}
								data-readdy-form
								className="bg-stone-50 rounded-lg p-8"
							>
								<input type="hidden" name="tour" value={tour.title} />

								<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
									<div>
										<label className="block text-sm font-medium text-gray-700 mb-2">
											First Name *
										</label>
										<input
											type="text"
											name="firstName"
											required
											className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
										/>
									</div>
									<div>
										<label className="block text-sm font-medium text-gray-700 mb-2">
											Last Name *
										</label>
										<input
											type="text"
											name="lastName"
											required
											className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
										/>
									</div>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
									<div>
										<label className="block text-sm font-medium text-gray-700 mb-2">
											Email *
										</label>
										<input
											type="email"
											name="email"
											required
											className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
										/>
									</div>
									<div>
										<label className="block text-sm font-medium text-gray-700 mb-2">
											Phone
										</label>
										<input
											type="tel"
											name="phone"
											className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
										/>
									</div>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
									<div>
										<label className="block text-sm font-medium text-gray-700 mb-2">
											Number of Travelers
										</label>
										<select
											name="travelers"
											className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 pr-8"
										>
											<option value="1">1 Person</option>
											<option value="2">2 People</option>
											<option value="3">3 People</option>
											<option value="4">4 People</option>
											<option value="5+">5+ People</option>
										</select>
									</div>
									<div>
										<label className="block text-sm font-medium text-gray-700 mb-2">
											Preferred Travel Date
										</label>
										<input
											type="date"
											name="travelDate"
											className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
										/>
									</div>
								</div>

								<div className="mb-6">
									<label className="block text-sm font-medium text-gray-700 mb-2">
										Special Requests or Questions
									</label>
									<textarea
										name="message"
										rows={4}
										maxLength={500}
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 resize-none"
										placeholder="Tell us about any dietary restrictions, accessibility needs, or special occasions..."
									></textarea>
									<p className="text-sm text-gray-500 mt-1">
										Maximum 500 characters
									</p>
								</div>

								<button
									type="submit"
									className="w-full px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors duration-300 whitespace-nowrap cursor-pointer"
								>
									Submit Booking Request
								</button>
							</form>
						</div>
					</section>
				)}

				{/* Related Tours */}
				{relatedTours.length > 0 && (
					<section className="py-16 bg-stone-50">
						<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
							<h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">
								More Tours in {tour.destination}
							</h2>

							<div
								className="grid grid-cols-1 md:grid-cols-3 gap-8"
								data-product-shop
							>
								{relatedTours.map((relatedTour) => (
									<div
										key={relatedTour.id}
										className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
									>
										<div className="relative overflow-hidden">
											<img
												src={relatedTour.image}
												alt={relatedTour.title}
												className="w-full h-48 object-cover object-top group-hover:scale-110 transition-transform duration-500"
											/>
											<div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-slate-800">
												{relatedTour.duration}
											</div>
										</div>
										<div className="p-6">
											<h3 className="text-xl font-semibold text-slate-800 mb-2">
												{relatedTour.title}
											</h3>
											<p className="text-gray-600 mb-4 line-clamp-2">
												{relatedTour.shortDescription}
											</p>
											<Link
												to={`/tour/${relatedTour.id}`}
												className="block w-full text-center px-4 py-2 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors duration-300 whitespace-nowrap cursor-pointer"
											>
												View Details
											</Link>
										</div>
									</div>
								))}
							</div>
						</div>
					</section>
				)}

				<Footer />
			</div>
		</>
	);
}
