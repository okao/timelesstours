import { useState, useEffect } from 'react';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import WhatsAppButton from '../../components/feature/WhatsAppButton';
import Carousel from '../../components/base/Carousel';
import { testimonials } from '../../mocks/tours';

export default function Testimonials() {
  // Testimonials page texts - using static values
  const testimonialsHeroTitle = 'Traveler Stories';
  const testimonialsHeroSubtitle = 'Real experiences from our valued travelers';
  const testimonialsFeaturedTitle = 'What Our Travelers Say';
  const testimonialsFeaturedSubtitle = 'Discover why thousands of travelers choose Timeless Tours for their most important journeys';
  const testimonialsMoreTitle = 'More Traveler Reviews';
  const testimonialsMoreSubtitle = 'Join thousands of satisfied travelers who have experienced the Timeless Tours difference';
  const testimonialsStatsTitle = 'Trusted by Thousands';
  const testimonialsStatsSubtitle = 'Our commitment to excellence speaks for itself';
  const testimonialsStatsTravelers = 'Happy Travelers';
  const testimonialsStatsRating = 'Average Rating';
  const testimonialsStatsDestinations = 'Destinations';
  const testimonialsStatsRecommend = 'Would Recommend';
  const testimonialsCtaTitle = 'Ready to Create Your Own Story?';
  const testimonialsCtaSubtitle = 'Join thousands of satisfied travelers and start planning your unforgettable journey today.';
  const testimonialsCtaBrowse = 'Browse Tours';
  const testimonialsCtaContact = 'Contact Us';
  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section
        className="relative h-96 flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1920&h=600&fit=crop&q=80')`
        }}
      >
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            {testimonialsHeroTitle}
          </h1>
          <p className="text-xl md:text-2xl font-light">
            {testimonialsHeroSubtitle}
          </p>
        </div>
      </section>

      {/* Featured Testimonials Carousel */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              {testimonialsFeaturedTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {testimonialsFeaturedSubtitle}
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
              {testimonialsMoreTitle}
            </h2>
            <p className="text-xl text-gray-600">
              {testimonialsMoreSubtitle}
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
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&q=80"
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
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&q=80"
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
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&q=80"
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
              {testimonialsStatsTitle}
            </h2>
            <p className="text-xl text-gray-600">
              {testimonialsStatsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">5,000+</div>
              <p className="text-gray-600">{testimonialsStatsTravelers}</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">4.9/5</div>
              <p className="text-gray-600">{testimonialsStatsRating}</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">50+</div>
              <p className="text-gray-600">{testimonialsStatsDestinations}</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">98%</div>
              <p className="text-gray-600">{testimonialsStatsRecommend}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            {testimonialsCtaTitle}
          </h2>
          <p className="text-xl mb-8 font-light">
            {testimonialsCtaSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/tours"
              className="inline-block px-8 py-3 bg-white text-teal-600 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300 whitespace-nowrap cursor-pointer"
            >
              {testimonialsCtaBrowse}
            </a>
            <a
              href="/contact"
              className="inline-block px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-teal-600 transition-colors duration-300 whitespace-nowrap cursor-pointer"
            >
              {testimonialsCtaContact}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}