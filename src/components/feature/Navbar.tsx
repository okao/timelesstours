
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Tours', path: '/tours' },
    { name: 'About', path: '/about' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 hover-scale">
            <span className={`text-2xl font-bold transition-all duration-500 ${
              isScrolled ? 'text-slate-800' : 'text-white'
            }`} style={{ fontFamily: 'Pacifico, serif' }}>
              Timeless Tours
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition-all duration-300 hover:text-teal-600 hover:scale-105 ${
                  location.pathname === item.path
                    ? 'text-teal-600'
                    : isScrolled
                    ? 'text-slate-700'
                    : 'text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 hover-lift whitespace-nowrap cursor-pointer ${
                isScrolled
                  ? 'bg-teal-600 text-white hover:bg-teal-700'
                  : 'bg-white text-slate-800 hover:bg-gray-100'
              }`}
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-all duration-300 hover-scale ${
              isScrolled ? 'text-slate-700' : 'text-white'
            }`}
          >
            <i className={`ri-${isMobileMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 bg-white/95 backdrop-blur-md rounded-lg shadow-lg animate-fade-in">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 text-slate-700 hover:text-teal-600 hover:bg-gray-50 transition-all duration-300 hover-lift ${
                  location.pathname === item.path ? 'text-teal-600 bg-gray-50' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block mx-4 mt-2 px-6 py-2 bg-teal-600 text-white text-center rounded-full hover:bg-teal-700 transition-all duration-300 hover-lift whitespace-nowrap cursor-pointer"
            >
              Book Now
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
