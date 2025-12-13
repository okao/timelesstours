
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

export default function Footer() {
  const { getText } = useLanguage();

  // Footer texts - using static values
  const footerCompany = 'Timeless Tours Maldives';
  const footerDescription = 'Creating unforgettable Maldivian experiences that connect you with pristine coral reefs, authentic island culture, and the natural beauty of our tropical paradise.';
  const footerQuicklinks = 'Quick Links';
  const footerContact = 'Contact Info';
  const footerNewsletter = 'Newsletter';
  const footerNewsletterDesc = 'Subscribe to get Maldivian travel tips and exclusive island experiences.';
  const footerNewsletterPlaceholder = 'Your email address';
  const footerNewsletterButton = 'Subscribe';
  const footerCopyright = '© 2024 Timeless Tours Maldives. All rights reserved.';

  const handleNewsletterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    // Show success message without API call
    alert('Thank you for subscribing to our newsletter!');
    form.reset();
  };

  {/* FOOTER Section */}
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Pacifico, serif' }}>
              {getText('footer.company', footerCompany)}
            </h3>
            <p className="text-gray-300 mb-6">
              {getText('footer.description', footerDescription)}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center hover:bg-teal-700 transition-colors cursor-pointer">
                <i className="ri-facebook-fill"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center hover:bg-teal-700 transition-colors cursor-pointer">
                <i className="ri-instagram-line"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center hover:bg-teal-700 transition-colors cursor-pointer">
                <i className="ri-twitter-line"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center hover:bg-teal-700 transition-colors cursor-pointer">
                <i className="ri-youtube-line"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{getText('footer.quicklinks', footerQuicklinks)}</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">{getText('navbar.home', 'Home')}</Link></li>
              <li><Link to="/tours" className="text-gray-300 hover:text-white transition-colors">{getText('navbar.tours', 'Tours')}</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">{getText('navbar.about', 'About Us')}</Link></li>
              <li><Link to="/testimonials" className="text-gray-300 hover:text-white transition-colors">{getText('navbar.testimonials', 'Testimonials')}</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-white transition-colors">{getText('navbar.faq', 'FAQ')}</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">{getText('navbar.contact', 'Contact')}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{getText('footer.contact', footerContact)}</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <i className="ri-phone-line text-teal-400"></i>
                <a
                  href={`https://wa.me/9609404623?text=${encodeURIComponent('Hello! I have a question about your tours.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-teal-400 transition-colors cursor-pointer"
                >
                  +960 9404623
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-mail-line text-teal-400"></i>
                <a
                  href="mailto:info@thetimelesstours.com"
                  className="text-gray-300 hover:text-teal-400 transition-colors cursor-pointer"
                >
                  info@thetimelesstours.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-map-pin-line text-teal-400"></i>
                <span className="text-gray-300">Fulidhoo, Vaavu Atoll, Maldives</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-whatsapp-line text-teal-400"></i>
                <a
                  href={`https://wa.me/9609404623?text=${encodeURIComponent('Hello! I\'m interested in learning more about your Maldives tours.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-teal-400 transition-colors cursor-pointer"
                >
                  +960 9404623
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{getText('footer.newsletter', footerNewsletter)}</h4>
            <p className="text-gray-300 mb-4">{getText('footer.newsletter.desc', footerNewsletterDesc)}</p>
            <form onSubmit={handleNewsletterSubmit} data-readdy-form className="space-y-3">
              <input
                type="email"
                name="email"
                placeholder={getText('footer.newsletter.placeholder', footerNewsletterPlaceholder)}
                required
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-500"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors whitespace-nowrap cursor-pointer"
              >
                {getText('footer.newsletter.button', footerNewsletterButton)}
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            {getText('footer.copyright', footerCopyright)}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
