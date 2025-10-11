
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import WhatsAppButton from '../../components/feature/WhatsAppButton';
import { tours } from '../../mocks/tours';
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

  const [filteredTours, setFilteredTours] = useState(tours);
  const [filters, setFilters] = useState({
    destination: '',
    duration: '',
    type: ''
  });

  const destinations = [...new Set(tours.map(tour => tour.destination))];
  const durations = [...new Set(tours.map(tour => tour.duration))];
  const types = [...new Set(tours.map(tour => tour.type))];

  const handleFilterChange = (filterType: string, value: string) => {
    const newFilters = { ...filters, [filterType]: value };
    setFilters(newFilters);

    let filtered = tours;

    if (newFilters.destination) {
      filtered = filtered.filter(tour => tour.destination === newFilters.destination);
    }
    if (newFilters.duration) {
      filtered = filtered.filter(tour => tour.duration === newFilters.duration);
    }
    if (newFilters.type) {
      filtered = filtered.filter(tour => tour.type === newFilters.type);
    }

    setFilteredTours(filtered);
  };

  const clearFilters = () => {
    setFilters({ destination: '', duration: '', type: '' });
    setFilteredTours(tours);
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        ref={headerRef}
        className="relative py-32 text-white text-center scroll-reveal parallax-bg"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://readdy.ai/api/search-image?query=Multiple%20tropical%20islands%20in%20Maldives%20from%20aerial%20view%2C%20turquoise%20lagoons%2C%20white%20sand%20beaches%2C%20coral%20reefs%2C%20paradise%20archipelago%2C%20professional%20travel%20photography%2C%20bright%20blue%20ocean&width=1920&height=600&seq=tours-header-1&orientation=landscape')`
        }}
      >
        <div className="animate-ocean-wave max-w-4xl mx-auto px-4">
          <h1 className="hero-title text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Maldives Experiences
          </h1>
          <p className="hero-subtitle text-xl text-gray-200">
            Discover the beauty of tropical paradise through our curated tours
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
                <option value="maafushi">Maafushi</option>
                <option value="thulusdhoo">Thulusdhoo</option>
                <option value="dhiffushi">Dhiffushi</option>
                <option value="sandbank">Sandbank</option>
                <option value="hanifaru">Hanifaru Bay</option>
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
                <option value="half-day">Half Day</option>
                <option value="full-day">Full Day</option>
                <option value="multi-day">Multi Day</option>
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
                <option value="island-hopping">Island Hopping</option>
                <option value="water-sports">Water Sports</option>
                <option value="cultural">Cultural</option>
                <option value="marine-life">Marine Life</option>
                <option value="relaxation">Relaxation</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section ref={toursRef} className="py-16 scroll-reveal">
        <div className="max-w-7xl mx-auto px-4">
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
                    alt={tour.name}
                    className="w-full h-full object-cover hover-scale"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold text-slate-800">{tour.duration}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">{tour.title}</h3>
                  <p className="text-slate-600 mb-4 line-clamp-3">{tour.shortDescription}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-teal-600">${tour.price}</span>
                    <div className="flex items-center text-yellow-500">
                      <i className="ri-star-fill text-sm"></i>
                      <span className="ml-1 text-sm text-slate-600">4.8</span>
                    </div>
                  </div>
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
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
