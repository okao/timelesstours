import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import WhatsAppButton from '../../components/feature/WhatsAppButton';
import Carousel from '../../components/base/Carousel';
import { testimonials } from '../../mocks/tours';

export default function Testimonials() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://readdy.ai/api/search-image?query=Happy%20travelers%20sharing%20stories%20and%20experiences%2C%20group%20of%20diverse%20people%20smiling%2C%20travel%20memories%20and%20friendship%2C%20warm%20social%20atmosphere&width=1920&height=600&seq=testimonials-hero&orientation=landscape')`
        }}
      >
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Traveler Stories
          </h1>
          <p className="text-xl md:text-2xl font-light">
            Real experiences from our valued travelers
          </p>
        </div>
      </section>

      {/* Featured Testimonials Carousel */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              What Our Travelers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover why thousands of travelers choose Timeless Tours for their most important journeys
            </p>
          </div>

          <Carousel autoPlay={true} interval={8000} showArrows={true}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-stone-50 rounded-lg p-12 mx-4">
                <div className="text-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-24 h-24 rounded-full object-cover object-top mx-auto mb-6"
                  />
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="ri-star-fill text-yellow-400 text-xl"></i>
                    ))}
                  </div>
                  <blockquote className="text-2xl text-gray-700 leading-relaxed italic mb-6 max-w-4xl mx-auto">
                    "{testimonial.text}"
                  </blockquote>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-800">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              More Traveler Reviews
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of satisfied travelers who have experienced the Timeless Tours difference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover object-top mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-slate-800">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.location}</p>
                  </div>
                  <div className="ml-auto flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="ri-star-fill text-yellow-400 text-sm"></i>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">"{testimonial.text}"</p>
              </div>
            ))}

            {/* Additional testimonials */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20happy%20male%20traveler%20with%20genuine%20smile%2C%20outdoor%20natural%20lighting%2C%20travel%20portrait%20style%2C%20satisfied%20customer%20expression&width=150&height=150&seq=testimonial6&orientation=squarish"
                  alt="James Wilson"
                  className="w-12 h-12 rounded-full object-cover object-top mr-4"
                />
                <div>
                  <h4 className="font-semibold text-slate-800">James Wilson</h4>
                  <p className="text-gray-600 text-sm">Toronto, Canada</p>
                </div>
                <div className="ml-auto flex">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-yellow-400 text-sm"></i>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">"The Morocco desert adventure was absolutely incredible. The camel trek, desert camp, and sunrise over the dunes were magical moments I'll never forget. Exceptional service throughout."</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20happy%20female%20traveler%20with%20warm%20smile%2C%20natural%20lighting%2C%20travel%20photography%20style%2C%20delighted%20customer%20expression&width=150&height=150&seq=testimonial7&orientation=squarish"
                  alt="Maria Santos"
                  className="w-12 h-12 rounded-full object-cover object-top mr-4"
                />
                <div>
                  <h4 className="font-semibold text-slate-800">Maria Santos</h4>
                  <p className="text-gray-600 text-sm">São Paulo, Brazil</p>
                </div>
                <div className="ml-auto flex">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-yellow-400 text-sm"></i>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">"Our family trip to Bali was perfectly organized. The cultural experiences were authentic and educational for our children. The guides were knowledgeable and patient with all our questions."</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20happy%20elderly%20male%20traveler%20with%20kind%20smile%2C%20natural%20lighting%2C%20travel%20portrait%20style%2C%20satisfied%20senior%20customer&width=150&height=150&seq=testimonial8&orientation=squarish"
                  alt="Robert Taylor"
                  className="w-12 h-12 rounded-full object-cover object-top mr-4"
                />
                <div>
                  <h4 className="font-semibold text-slate-800">Robert Taylor</h4>
                  <p className="text-gray-600 text-sm">Melbourne, Australia</p>
                </div>
                <div className="ml-auto flex">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-yellow-400 text-sm"></i>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">"The Iceland Northern Lights tour was a dream come true. Despite challenging weather, the team ensured we had multiple opportunities to see the aurora. The ice caves were breathtaking!"</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Trusted by Thousands
            </h2>
            <p className="text-xl text-gray-600">
              Our commitment to excellence speaks for itself
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">5,000+</div>
              <p className="text-gray-600">Happy Travelers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">4.9/5</div>
              <p className="text-gray-600">Average Rating</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">50+</div>
              <p className="text-gray-600">Destinations</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">98%</div>
              <p className="text-gray-600">Would Recommend</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Ready to Create Your Own Story?
          </h2>
          <p className="text-xl mb-8 font-light">
            Join thousands of satisfied travelers and start planning your unforgettable journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/tours"
              className="inline-block px-8 py-3 bg-white text-teal-600 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300 whitespace-nowrap cursor-pointer"
            >
              Browse Tours
            </a>
            <a
              href="/contact"
              className="inline-block px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-teal-600 transition-colors duration-300 whitespace-nowrap cursor-pointer"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}