
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import WhatsAppButton from '../../components/feature/WhatsAppButton';
import { tours, exclusivePackage } from '../../mocks/tours';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { usePageTransition } from '../../hooks/usePageTransition';

export default function Tours() {
  usePageTransition();
  const [selectedDestination, setSelectedDestination] = useState('all');
  const [selectedDuration, setSelectedDuration] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const headerRef = useScrollReveal();
  const filtersRef = useScrollReveal();
  const toursRef = useScrollReveal();

  // Guard against missing or malformed mock data
  const toursData = Array.isArray(tours) ? tours : [];

  const destinations = [...new Set(toursData.map(tour => tour.destination))];
  const durations = [...new Set(toursData.map(tour => tour.duration))];
  const types = [...new Set(toursData.map(tour => tour.type))];

  // Filter tours based on selected filters
  const filteredTours = toursData.filter(tour => {
    const destinationMatch = selectedDestination === 'all' ||
      tour.destination.toLowerCase().includes(selectedDestination.toLowerCase()) ||
      selectedDestination.toLowerCase().includes(tour.destination.toLowerCase());

    const durationMatch = selectedDuration === 'all' ||
      tour.duration.toLowerCase().includes(selectedDuration.toLowerCase()) ||
      selectedDuration.toLowerCase().includes(tour.duration.toLowerCase());

    const typeMatch = selectedType === 'all' ||
      tour.type.toLowerCase().includes(selectedType.toLowerCase()) ||
      selectedType.toLowerCase().includes(tour.type.toLowerCase());

    return destinationMatch && durationMatch && typeMatch;
  });

  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />

      {/* Hero Section */}
      <section
        ref={headerRef}
        className="relative py-32 text-white text-center scroll-reveal parallax-bg"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=600&fit=crop&q=80')`
        }}
      >
        <div className="animate-ocean-wave max-w-4xl mx-auto px-4">
          <h1 className="hero-title text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Packages
          </h1>
          <p className="hero-subtitle text-xl text-gray-200">
            Discover the beauty of tropical paradise through our curated packages
          </p>
        </div>
      </section>

      {/* Filters */}
      <section ref={filtersRef} className="py-12 bg-white scroll-reveal">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="group">
              <label className="block text-sm font-medium text-slate-700 mb-2 group-hover:text-teal-600 transition-colors duration-300">Destination</label>
              <select
                value={selectedDestination}
                onChange={(e) => setSelectedDestination(e.target.value)}
                className="w-full p-4 border-2 border-gray-200 rounded-xl bg-white hover:border-teal-300 hover:shadow-lg hover:shadow-teal-100/50 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-300 cursor-pointer group-hover:bg-teal-50/30"
              >
                <option value="all">All Destinations</option>
                {destinations.map(dest => (
                  <option key={dest} value={dest}>{dest}</option>
                ))}
              </select>
            </div>

            <div className="group">
              <label className="block text-sm font-medium text-slate-700 mb-2 group-hover:text-teal-600 transition-colors duration-300">Duration</label>
              <select
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(e.target.value)}
                className="w-full p-4 border-2 border-gray-200 rounded-xl bg-white hover:border-teal-300 hover:shadow-lg hover:shadow-teal-100/50 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-300 cursor-pointer group-hover:bg-teal-50/30"
              >
                <option value="all">All Durations</option>
                {durations.map(dur => (
                  <option key={dur} value={dur}>{dur}</option>
                ))}
              </select>
            </div>

            <div className="group">
              <label className="block text-sm font-medium text-slate-700 mb-2 group-hover:text-teal-600 transition-colors duration-300">Type</label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full p-4 border-2 border-gray-200 rounded-xl bg-white hover:border-teal-300 hover:shadow-lg hover:shadow-teal-100/50 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-300 cursor-pointer group-hover:bg-teal-50/30"
              >
                <option value="all">All Types</option>
                {types.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section ref={toursRef} className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Exclusive Package - Always shown first */}
          <div className="mb-12">
            <div className="bg-gradient-to-br from-teal-50 via-white to-blue-50 rounded-2xl shadow-2xl overflow-hidden border-4 border-teal-500 hover:shadow-3xl transition-all duration-300">
              <div className="md:flex">
                <div className="md:w-1/2 relative h-96 md:h-auto">
                  <img
                    src={exclusivePackage.image}
                    alt={exclusivePackage.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-teal-600 text-white px-4 py-2 rounded-full font-semibold">
                    {exclusivePackage.duration}
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-sm font-semibold text-slate-800">{exclusivePackage.type}</span>
                  </div>
                  <div className="absolute top-16 left-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full font-bold text-sm">
                    EXCLUSIVE
                  </div>
                </div>
                <div className="md:w-1/2 p-8 md:p-12">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-slate-800 mb-4">
                      {exclusivePackage.title}
                    </h3>
                    <p className="text-slate-600 mb-4 leading-relaxed line-clamp-4">
                      {exclusivePackage.fullDescription}
                    </p>
                    <div className="flex items-center text-slate-600 mb-4">
                      <i className="ri-map-pin-line mr-2 text-teal-600"></i>
                      <span>{exclusivePackage.destination}</span>
                    </div>
                  </div>
                  <Link
                    to={`/tour/${exclusivePackage.id}`}
                    className="block w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white text-center py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    View Full Package Details
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Regular Packages */}
          {filteredTours.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-slate-600 text-lg">No packages found. Please try different filters.</p>
              <p className="text-slate-500 text-sm mt-2">Total tours available: {toursData.length}</p>
            </div>
          ) : (
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center" style={{ fontFamily: 'Playfair Display, serif' }}>
                All Packages
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredTours.map((tour, index) => (
                <div
                  key={tour.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={tour.image}
                      alt={tour.title}
                      className="w-full h-full object-cover hover-scale"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-sm font-semibold text-slate-800">{tour.duration}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">{tour.title}</h3>
                    <p className="text-slate-600 mb-4 line-clamp-3">{tour.shortDescription}</p>
                    <Link
                      to={`/tour/${tour.id}`}
                      className="block w-full bg-teal-600 hover:bg-teal-700 text-white text-center py-3 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
