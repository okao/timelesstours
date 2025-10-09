
import { Link } from 'react-router-dom';

export default function Footer() {
  const handleNewsletterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch('https://readdy.ai/api/form/d3ii27vuqofrij837p4g', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        alert('Thank you for subscribing to our newsletter!');
        form.reset();
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Pacifico, serif' }}>
              Timeless Tours Maldives
            </h3>
            <p className="text-gray-300 mb-6">
              Creating unforgettable Maldivian experiences that connect you with pristine coral reefs, authentic island culture, and the natural beauty of our tropical paradise.
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
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/tours" className="text-gray-300 hover:text-white transition-colors">Tours</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <i className="ri-phone-line text-teal-400"></i>
                <span className="text-gray-300">+960 9990377</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-mail-line text-teal-400"></i>
                <span className="text-gray-300">info@timelesstours.mv</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-map-pin-line text-teal-400"></i>
                <span className="text-gray-300">Marine Drive, Malé 20026, Maldives</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-whatsapp-line text-teal-400"></i>
                <span className="text-gray-300">+960 7778899</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-300 mb-4">Subscribe to get Maldivian travel tips and exclusive island experiences.</p>
            <form onSubmit={handleNewsletterSubmit} data-readdy-form className="space-y-3">
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                required
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-500"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors whitespace-nowrap cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Timeless Tours Maldives. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</Link>
            <a href="https://readdy.ai/?origin=logo" className="text-gray-400 hover:text-white text-sm transition-colors">Powered by Readdy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
