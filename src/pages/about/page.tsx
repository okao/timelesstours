
import { useState, useEffect } from 'react';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import WhatsAppButton from '../../components/feature/WhatsAppButton';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { usePageTransition } from '../../hooks/usePageTransition';

export default function About() {
  usePageTransition();

  // About page texts - using static values
  const aboutHeroTitle = 'About Timeless Tours';
  const aboutHeroSubtitle = 'Your gateway to authentic Maldivian experiences';
  const aboutStoryTitle = 'Our Story';
  const aboutStoryPara1 = 'Founded in the heart of Malé, Timeless Tours Maldives was born from a passion for sharing the untouched beauty and rich culture of our island nation. We believe that travel should be more than just visiting places – it should be about creating connections, understanding cultures, and making memories that last a lifetime.';
  const aboutStoryPara2 = 'Our team of local experts brings decades of combined experience in hospitality and marine adventures, ensuring every guest experiences the authentic spirit of the Maldives while enjoying the highest standards of safety and comfort.';
  const aboutTeamTitle = 'Meet Our Team';
  const aboutTeamSubtitle = 'Passionate locals dedicated to sharing the beauty of the Maldives';
  const teamMembers: Array<{
    id: number;
    name: string;
    role: string;
    bio: string;
    image: string;
    position: number;
  }> = [];
  const aboutValuesTitle = 'Our Values';
  const aboutValuesSubtitle = 'The principles that guide everything we do';
  const values: Array<{
    id: number;
    title: string;
    description: string;
    icon: string;
    position: number;
  }> = [];
  const aboutPromiseTitle = 'Our Promise to You';
  const aboutPromiseSustainableTitle = 'Sustainable Tourism';
  const aboutPromiseSustainableDesc = 'We\'re committed to responsible tourism that benefits local communities and preserves our pristine marine environment.';
  const aboutPromiseComfortTitle = 'Comfort & Luxury';
  const aboutPromiseComfortDesc = 'Every detail is carefully planned to ensure your comfort while maintaining the authentic spirit of the Maldives.';
  const aboutPromiseExperiencesTitle = 'Unforgettable Experiences';
  const aboutPromiseExperiencesDesc = 'We create moments that will stay with you long after you leave our beautiful islands.';

  const heroRef = useScrollReveal();
  const storyRef = useScrollReveal();
  const teamRef = useScrollReveal();
  const valuesRef = useScrollReveal();
  const promiseRef = useScrollReveal();

  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative py-32 text-white text-center scroll-reveal parallax-bg"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&h=600&fit=crop&q=80')`
        }}
      >
        <div className="animate-ocean-wave max-w-4xl mx-auto px-4">
          <h1 className="hero-title text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            {aboutHeroTitle}
          </h1>
          <p className="hero-subtitle text-xl text-gray-200">
            {aboutHeroSubtitle}
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section ref={storyRef} className="py-20 scroll-reveal">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl font-bold text-slate-800 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                {aboutStoryTitle}
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                {aboutStoryPara1}
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                {aboutStoryPara2}
              </p>
            </div>
            <div className="animate-slide-in-right">
              <img
                src="https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=600&h=400&fit=crop&q=80"
                alt="Our Story"
                className="rounded-lg shadow-lg hover-scale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      {/* <section ref={teamRef} className="py-20 bg-white scroll-reveal">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              {aboutTeamTitle}
            </h2>
            <p className="text-lg text-slate-600">
              {aboutTeamSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="group text-center p-6 rounded-2xl bg-white border border-gray-100 hover:border-teal-200 hover:shadow-xl hover:shadow-teal-100/50 transition-all duration-500 hover:-translate-y-2 cursor-pointer">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2 group-hover:text-teal-600 transition-colors duration-500">{member.name}</h3>
                <p className="text-teal-600 font-medium mb-3 group-hover:text-teal-700 transition-colors duration-500">{member.role}</p>
                <p className="text-slate-600 group-hover:text-slate-700 transition-colors duration-500">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Values */}
      <section ref={valuesRef} className="py-20 scroll-reveal">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              {aboutValuesTitle}
            </h2>
            <p className="text-lg text-slate-600">
              {aboutValuesSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={value.id} className="group text-center p-6 rounded-2xl bg-white border border-gray-100 hover:border-teal-200 hover:shadow-xl hover:shadow-teal-100/50 transition-all duration-500 hover:-translate-y-2 cursor-pointer">
                <div className="w-16 h-16 bg-teal-100 group-hover:bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-gentle-float group-hover:scale-110 transition-all duration-500" style={{ animationDelay: `${index}s` }}>
                  <i className={`${value.icon} text-2xl text-teal-600 group-hover:text-white transition-colors duration-500`}></i>
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2 group-hover:text-teal-600 transition-colors duration-500">{value.title}</h3>
                <p className="text-slate-600 text-sm group-hover:text-slate-700 transition-colors duration-500">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section
        ref={promiseRef}
        className="py-20 text-white scroll-reveal parallax-bg"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1920&h=600&fit=crop&q=80')`
        }}
      >
        <div className="animate-subtle-zoom max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
            {aboutPromiseTitle}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-teal-300 hover:shadow-xl hover:shadow-teal-100/50 transition-all duration-500 hover:-translate-y-2 cursor-pointer">
              <h3 className="text-xl font-semibold mb-4 group-hover:text-teal-300 transition-colors duration-500">{aboutPromiseSustainableTitle}</h3>
              <p className="text-gray-200 group-hover:text-white transition-colors duration-500">
                {aboutPromiseSustainableDesc}
              </p>
            </div>
            <div className="group p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-teal-300 hover:shadow-xl hover:shadow-teal-100/50 transition-all duration-500 hover:-translate-y-2 cursor-pointer">
              <h3 className="text-xl font-semibold mb-4 group-hover:text-teal-300 transition-colors duration-500">{aboutPromiseComfortTitle}</h3>
              <p className="text-gray-200 group-hover:text-white transition-colors duration-500">
                {aboutPromiseComfortDesc}
              </p>
            </div>
            <div className="group p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-teal-300 hover:shadow-xl hover:shadow-teal-100/50 transition-all duration-500 hover:-translate-y-2 cursor-pointer">
              <h3 className="text-xl font-semibold mb-4 group-hover:text-teal-300 transition-colors duration-500">{aboutPromiseExperiencesTitle}</h3>
              <p className="text-gray-200 group-hover:text-white transition-colors duration-500">
                {aboutPromiseExperiencesDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
