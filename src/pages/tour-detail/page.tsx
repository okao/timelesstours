import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import WhatsAppButton from '../../components/feature/WhatsAppButton';
import ImageGallery from '../../components/base/ImageGallery';
import Accordion from '../../components/base/Accordion';
import { tours } from '../../mocks/tours';

export default function TourDetail() {
  const { id } = useParams();
  const tour = tours.find(t => t.id === parseInt(id || ''));
  const [showBookingForm, setShowBookingForm] = useState(false);

  if (!tour) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Tour Not Found</h1>
          <Link to="/tours" className="text-teal-600 hover:text-teal-700">
            Back to Tours
          </Link>
        </div>
      </div>
    );
  }

  const relatedTours = tours.filter(t => t.id !== tour.id && t.destination === tour.destination).slice(0, 3);

  const galleryImages = [
    tour.image,
    `https://readdy.ai/api/search-image?query=$%7Btour.destination%7D%20beautiful%20landscape%20scenic%20view%20travel%20destination%20stunning%20natural%20beauty&width=800&height=600&seq=gallery${tour.id}1&orientation=landscape`,
    `https://readdy.ai/api/search-image?query=$%7Btour.destination%7D%20cultural%20experience%20local%20traditions%20authentic%20travel%20moments&width=800&height=600&seq=gallery${tour.id}2&orientation=landscape`,
    `https://readdy.ai/api/search-image?query=$%7Btour.destination%7D%20luxury%20accommodation%20beautiful%20hotel%20resort%20travel%20comfort&width=800&height=600&seq=gallery${tour.id}3&orientation=landscape`,
    `https://readdy.ai/api/search-image?query=$%7Btour.destination%7D%20adventure%20activities%20outdoor%20experiences%20travel%20excitement&width=800&height=600&seq=gallery${tour.id}4&orientation=landscape`,
    `https://readdy.ai/api/search-image?query=$%7Btour.destination%7D%20local%20cuisine%20traditional%20food%20culinary%20experience%20travel%20dining&width=800&height=600&seq=gallery${tour.id}5&orientation=landscape`
  ];

  const itineraryAccordion = tour.itinerary.map(item => ({
    id: item.day,
    title: `Day ${item.day}: ${item.title}`,
    content: item.description
  }));

  const handleBookingSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch('https://readdy.ai/api/form/d3ii27vuqofrij837p40', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        alert('Thank you for your booking inquiry! We will contact you within 24 hours.');
        form.reset();
        setShowBookingForm(false);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      alert('Something went wrong. Please try again.');
    }
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
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-end bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${tour.image}')`
        }}
      >
        <div className="w-full bg-gradient-to-t from-black/60 to-transparent p-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
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

      {/* Tour Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Overview */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-slate-800 mb-6">Tour Overview</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {tour.fullDescription}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-4">What's Included</h3>
                    <ul className="space-y-2">
                      {tour.inclusions.map((item, index) => (
                        <li key={index} className="flex items-center text-gray-700">
                          <i className="ri-check-line text-green-500 mr-3"></i>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-4">What's Not Included</h3>
                    <ul className="space-y-2">
                      {tour.exclusions.map((item, index) => (
                        <li key={index} className="flex items-center text-gray-700">
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
                <h2 className="text-3xl font-bold text-slate-800 mb-6">Detailed Itinerary</h2>
                <Accordion items={itineraryAccordion} />
              </div>

              {/* Image Gallery */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold text-slate-800 mb-6">Photo Gallery</h2>
                <ImageGallery images={galleryImages} title={tour.title} />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Booking Card */}
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-teal-600">${tour.price.toLocaleString()}</span>
                  <p className="text-gray-600">per person</p>
                </div>
                
                <button
                  onClick={scrollToBooking}
                  className="w-full px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors duration-300 mb-4 whitespace-nowrap cursor-pointer"
                >
                  Book This Tour
                </button>
                
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span className="font-medium">{tour.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Group Size:</span>
                    <span className="font-medium">Max 12 people</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Languages:</span>
                    <span className="font-medium">English, Spanish</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Difficulty:</span>
                    <span className="font-medium">Moderate</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-slate-800 mb-3">Need Help?</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-gray-600">
                      <i className="ri-phone-line mr-2 text-teal-600"></i>
                      +1 (555) 123-4567
                    </div>
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
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Book Your Adventure</h2>
              <p className="text-xl text-gray-600">Fill out the form below and we'll get back to you within 24 hours</p>
            </div>

            <form onSubmit={handleBookingSubmit} data-readdy-form className="bg-stone-50 rounded-lg p-8">
              <input type="hidden" name="tour" value={tour.title} />
              <input type="hidden" name="price" value={tour.price} />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Number of Travelers</label>
                  <select name="travelers" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 pr-8">
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                    <option value="5+">5+ People</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Travel Date</label>
                  <input
                    type="date"
                    name="travelDate"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Special Requests or Questions</label>
                <textarea
                  name="message"
                  rows={4}
                  maxLength={500}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 resize-none"
                  placeholder="Tell us about any dietary restrictions, accessibility needs, or special occasions..."
                ></textarea>
                <p className="text-sm text-gray-500 mt-1">Maximum 500 characters</p>
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
            <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">More Tours in {tour.destination}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-product-shop>
              {relatedTours.map((relatedTour) => (
                <div key={relatedTour.id} className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
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
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">{relatedTour.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{relatedTour.shortDescription}</p>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-2xl font-bold text-teal-600">${relatedTour.price.toLocaleString()}</span>
                    </div>
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
  );
}