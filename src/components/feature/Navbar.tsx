
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [navItems, setNavItems] = useState<Array<{ key: string; path: string; label: string; isCta: boolean }>>([]);
  const location = useLocation();
  const { getText } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Use static navigation items
    setNavItems([
      { key: 'home', path: '/', label: 'Home', isCta: false },
      { key: 'tours', path: '/tours', label: 'Packages', isCta: false },
      { key: 'about', path: '/about', label: 'About', isCta: false },
      // { key: 'testimonials', path: '/testimonials', label: 'Testimonials', isCta: false },
      { key: 'faq', path: '/faq', label: 'FAQ', isCta: false },
      { key: 'contact', path: '/contact', label: 'Contact', isCta: false },
      { key: 'book_now', path: '/contact', label: 'Book Now', isCta: true },
    ]);
  }, []);

  const regularItems = navItems.filter(i => !i.isCta && i.key !== 'testimonials');
  const ctaItem = navItems.find(i => i.isCta);

  return (
  <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? 'bg-gray-900/70 backdrop-blur-md shadow-lg py-3'
          : 'bg-gray-900/50 backdrop-blur-md shadow-md py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center hover-scale">
            <img
              src="/primarylogo.png"
              alt="Timeless Tours"
              className="h-8 md:h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {regularItems.map((item) => (
              <Link
                key={item.key}
                to={item.path}
                className={`font-medium transition-all duration-300 hover:text-teal-600 hover:scale-105 ${
                  location.pathname === item.path
                    ? 'text-teal-400'
                    : 'text-white'
                }`}
              >
                {getText(`navbar.${item.key}`, item.label)}
              </Link>
            ))}

            {ctaItem && (
              <Link
                to={ctaItem.path}
                className={`px-6 py-2 rounded-none font-medium transition-all duration-300 hover-lift whitespace-nowrap cursor-pointer ${
                  isScrolled
                    ? 'bg-teal-500 text-white hover:bg-teal-600'
                    : 'bg-white text-slate-900 hover:bg-gray-100'
                }`}
              >
                {getText(`navbar.${ctaItem.key}`, ctaItem.label)}
              </Link>
            )}
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
          <div className="md:hidden mt-4 pb-4 bg-slate-900/95 backdrop-blur-md shadow-lg animate-fade-in">
            {/* Navigation Links */}
            {regularItems.map((item) => (
              <Link
                key={item.key}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 text-gray-100 hover:text-teal-300 hover:bg-gray-800/70 transition-all duration-300 hover-lift ${
                  location.pathname === item.path ? 'text-teal-300 bg-gray-800/90' : ''
                }`}
              >
                {getText(`navbar.${item.key}`, item.label)}
              </Link>
            ))}

            {ctaItem && (
              <Link
                to={ctaItem.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block mx-4 mt-2 px-6 py-2 bg-teal-500 text-white text-center rounded-none hover:bg-teal-600 transition-all duration-300 hover-lift whitespace-nowrap cursor-pointer"
              >
                {getText(`navbar.${ctaItem.key}`, ctaItem.label)}
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
