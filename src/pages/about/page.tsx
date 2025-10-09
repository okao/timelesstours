
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import WhatsAppButton from '../../components/feature/WhatsAppButton';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { usePageTransition } from '../../hooks/usePageTransition';

export default function About() {
  usePageTransition();
  
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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://readdy.ai/api/search-image?query=Traditional%20Maldivian%20dhoni%20boats%20on%20crystal%20clear%20turquoise%20water%2C%20local%20fishermen%2C%20authentic%20island%20culture%2C%20tropical%20paradise%2C%20golden%20hour%20lighting%2C%20cultural%20heritage%20photography&width=1920&height=600&seq=about-hero-1&orientation=landscape')`
        }}
      >
        <div className="animate-ocean-wave max-w-4xl mx-auto px-4">
          <h1 className="hero-title text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            About Timeless Tours
          </h1>
          <p className="hero-subtitle text-xl text-gray-200">
            Your gateway to authentic Maldivian experiences
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section ref={storyRef} className="py-20 scroll-reveal">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl font-bold text-slate-800 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Our Story
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Founded in the heart of Malé, Timeless Tours Maldives was born from a passion for sharing the 
                untouched beauty and rich culture of our island nation. We believe that travel should be more 
                than just visiting places – it should be about creating connections, understanding cultures, 
                and making memories that last a lifetime.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our team of local experts brings decades of combined experience in hospitality and marine 
                adventures, ensuring every guest experiences the authentic spirit of the Maldives while 
                enjoying the highest standards of safety and comfort.
              </p>
            </div>
            <div className="animate-slide-in-right">
              <img
                src="https://readdy.ai/api/search-image?query=Maldivian%20local%20guide%20showing%20tourists%20around%20traditional%20island%20village%2C%20authentic%20cultural%20experience%2C%20friendly%20local%20people%2C%20tropical%20island%20setting%2C%20warm%20hospitality%2C%20community%20tourism&width=600&height=400&seq=about-story-1&orientation=landscape"
                alt="Our Story"
                className="rounded-lg shadow-lg hover-scale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section ref={teamRef} className="py-20 bg-white scroll-reveal">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Meet Our Team
            </h2>
            <p className="text-lg text-slate-600">
              Passionate locals dedicated to sharing the beauty of the Maldives
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center hover-lift">
              <div className="relative mb-6">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20Maldivian%20male%20tour%20guide%2C%20friendly%20smile%2C%20traditional%20island%20background%2C%20tourism%20professional%2C%20authentic%20local%20person%2C%20warm%20personality%2C%20tropical%20setting&width=300&height=300&seq=team-ahmed-1&orientation=squarish"
                  alt="Ahmed Hassan"
                  className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg hover-scale"
                />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Ahmed Hassan</h3>
              <p className="text-teal-600 font-medium mb-3">Founder & Marine Guide</p>
              <p className="text-slate-600">
                Born and raised in Malé, Ahmed has over 15 years of experience in marine tourism 
                and is passionate about marine conservation.
              </p>
            </div>
            
            <div className="text-center hover-lift">
              <div className="relative mb-6">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20Maldivian%20female%20hospitality%20manager%2C%20warm%20smile%2C%20traditional%20island%20background%2C%20tourism%20professional%2C%20authentic%20local%20person%2C%20welcoming%20personality%2C%20tropical%20setting&width=300&height=300&seq=team-fatima-1&orientation=squarish"
                  alt="Fatima Ali"
                  className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg hover-scale"
                />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Fatima Ali</h3>
              <p className="text-teal-600 font-medium mb-3">Cultural Experience Manager</p>
              <p className="text-slate-600">
                Fatima specializes in authentic cultural experiences and has deep connections 
                with local island communities throughout the Maldives.
              </p>
            </div>
            
            <div className="text-center hover-lift">
              <div className="relative mb-6">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20Maldivian%20male%20dive%20instructor%2C%20confident%20smile%2C%20ocean%20background%2C%20scuba%20diving%20professional%2C%20authentic%20local%20person%2C%20adventurous%20personality%2C%20marine%20setting&width=300&height=300&seq=team-ibrahim-1&orientation=squarish"
                  alt="Ibrahim Mohamed"
                  className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg hover-scale"
                />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Ibrahim Mohamed</h3>
              <p className="text-teal-600 font-medium mb-3">Dive Master & Safety Coordinator</p>
              <p className="text-slate-600">
                A certified PADI instructor with expertise in the Maldives' best dive sites 
                and marine life encounters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section ref={valuesRef} className="py-20 scroll-reveal">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Our Values
            </h2>
            <p className="text-lg text-slate-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center hover-lift">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-gentle-float">
                <i className="ri-leaf-line text-2xl text-teal-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Sustainability</h3>
              <p className="text-slate-600 text-sm">
                Protecting our marine environment for future generations
              </p>
            </div>
            
            <div className="text-center hover-lift">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-gentle-float" style={{ animationDelay: '1s' }}>
                <i className="ri-heart-line text-2xl text-teal-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Authenticity</h3>
              <p className="text-slate-600 text-sm">
                Genuine experiences that showcase real Maldivian culture
              </p>
            </div>
            
            <div className="text-center hover-lift">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-gentle-float" style={{ animationDelay: '2s' }}>
                <i className="ri-shield-check-line text-2xl text-teal-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Safety</h3>
              <p className="text-slate-600 text-sm">
                Your safety and comfort are our top priorities
              </p>
            </div>
            
            <div className="text-center hover-lift">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-gentle-float" style={{ animationDelay: '3s' }}>
                <i className="ri-star-line text-2xl text-teal-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Excellence</h3>
              <p className="text-slate-600 text-sm">
                Exceeding expectations in every aspect of your journey
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section 
        ref={promiseRef}
        className="py-20 text-white scroll-reveal parallax-bg"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://readdy.ai/api/search-image?query=Pristine%20coral%20reef%20in%20Maldives%20with%20colorful%20tropical%20fish%2C%20crystal%20clear%20water%2C%20marine%20conservation%2C%20underwater%20paradise%2C%20vibrant%20coral%20formations%2C%20sustainable%20tourism&width=1920&height=600&seq=about-promise-1&orientation=landscape')`
        }}
      >
        <div className="animate-subtle-zoom max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
            Our Promise to You
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="hover-lift">
              <h3 className="text-xl font-semibold mb-4">Sustainable Tourism</h3>
              <p className="text-gray-200">
                We're committed to responsible tourism that benefits local communities 
                and preserves our pristine marine environment.
              </p>
            </div>
            <div className="hover-lift">
              <h3 className="text-xl font-semibold mb-4">Comfort & Luxury</h3>
              <p className="text-gray-200">
                Every detail is carefully planned to ensure your comfort while 
                maintaining the authentic spirit of the Maldives.
              </p>
            </div>
            <div className="hover-lift">
              <h3 className="text-xl font-semibold mb-4">Unforgettable Experiences</h3>
              <p className="text-gray-200">
                We create moments that will stay with you long after you leave 
                our beautiful islands.
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
