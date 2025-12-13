
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LanguagePicker from '../base/LanguagePicker';
import { useLanguage } from '../../contexts/LanguageContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [navItems, setNavItems] = useState<Array<{ key: string; path: string; label: string; isCta: boolean }>>([]);
  const location = useLocation();
  const { getText, currentLanguage, setCurrentLanguage } = useLanguage();

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
          <div className="hidden md:flex items-center space-x-6">
            {regularItems.map((item) => (
              <Link
                key={item.key}
                to={item.path}
                className={`font-medium transition-all duration-300 hover:text-teal-600 hover:scale-105 ${
                  location.pathname === item.path
                    ? 'text-teal-600'
                    : isScrolled
                    ? 'text-slate-700'
                    : 'text-white'
                }`}
              >
                {getText(`navbar.${item.key}`, item.label)}
              </Link>
            ))}

            {/* Language Picker */}
            <div className="flex items-center">
              <LanguagePicker />
            </div>

            {ctaItem && (
              <Link
                to={ctaItem.path}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 hover-lift whitespace-nowrap cursor-pointer ${
                  isScrolled
                    ? 'bg-teal-600 text-white hover:bg-teal-700'
                    : 'bg-white text-slate-800 hover:bg-gray-100'
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
          <div className="md:hidden mt-4 pb-4 bg-white/95 backdrop-blur-md rounded-lg shadow-lg animate-fade-in">
            {/* Mobile Language Switcher - Compact */}
            <div className="px-4 py-3 border-b border-gray-200">
              <div className="text-sm font-medium text-gray-500 mb-3">Language</div>
              <div className="flex space-x-2">
                {[
                  { code: 'en', name: 'EN', flag: '🇺🇸' },
                  { code: 'zh', name: '中文', flag: '🇨🇳' },
                  { code: 'it', name: 'IT', flag: '🇮🇹' },
                  { code: 'es', name: 'ES', flag: '🇪🇸' }
                ].map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setCurrentLanguage(lang.code);
                      localStorage.setItem('selectedLanguage', lang.code);
                      window.dispatchEvent(new CustomEvent('languageChanged', {
                        detail: { language: lang.code }
                      }));
                      setIsMobileMenuOpen(false);
                    }}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      currentLanguage === lang.code
                        ? 'bg-teal-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Navigation Links */}
            {regularItems.map((item) => (
              <Link
                key={item.key}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 text-slate-700 hover:text-teal-600 hover:bg-gray-50 transition-all duration-300 hover-lift ${
                  location.pathname === item.path ? 'text-teal-600 bg-gray-50' : ''
                }`}
              >
                {getText(`navbar.${item.key}`, item.label)}
              </Link>
            ))}

            {ctaItem && (
              <Link
                to={ctaItem.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block mx-4 mt-2 px-6 py-2 bg-teal-600 text-white text-center rounded-full hover:bg-teal-700 transition-all duration-300 hover-lift whitespace-nowrap cursor-pointer"
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
