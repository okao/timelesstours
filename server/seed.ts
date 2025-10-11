import { db } from './db';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

// Insert languages
const languages = [
  { code: 'en', name: 'English' },
  { code: 'zh', name: '中文' },
  { code: 'it', name: 'Italiano' },
  { code: 'es', name: 'Español' },
];

const insertLang = db.prepare('INSERT OR IGNORE INTO languages (code, name) VALUES (?, ?)');
for (const l of languages) {
  insertLang.run(l.code, l.name);
}

// Navigation seed
const navItems = [
  { key: 'home', path: '/', position: 1, is_cta: 0, label: 'Home' },
  { key: 'tours', path: '/tours', position: 2, is_cta: 0, label: 'Tours' },
  { key: 'about', path: '/about', position: 3, is_cta: 0, label: 'About' },
  { key: 'testimonials', path: '/testimonials', position: 4, is_cta: 0, label: 'Testimonials' },
  { key: 'faq', path: '/faq', position: 5, is_cta: 0, label: 'FAQ' },
  { key: 'contact', path: '/contact', position: 6, is_cta: 0, label: 'Contact' },
  { key: 'book_now', path: '/contact', position: 7, is_cta: 1, label: 'Book Now' },
];

const upsertNav = db.prepare('INSERT INTO navigation (key, path, position, is_cta) VALUES (@key, @path, @position, @is_cta) ON CONFLICT(key) DO UPDATE SET path=excluded.path, position=excluded.position, is_cta=excluded.is_cta');
const upsertNavI18n = db.prepare('INSERT INTO navigation_i18n (nav_id, lang_code, label) VALUES (?, ?, ?) ON CONFLICT(nav_id, lang_code) DO UPDATE SET label=excluded.label');
const selectNavId = db.prepare('SELECT id FROM navigation WHERE key = ?');

const navTrx = db.transaction(() => {
  for (const n of navItems) {
    upsertNav.run(n);
    const row = selectNavId.get(n.key) as { id: number };
    upsertNavI18n.run(row.id, 'en', n.label);
  }
});
navTrx();

// Seed hero slides
const heroImages = [
  "https://readdy.ai/api/search-image?query=Stunning%20aerial%20view%20of%20Maldives%20crystal%20clear%20turquoise%20lagoon%20with%20overwater%20bungalows%2C%20pristine%20white%20sand%20beaches%2C%20tropical%20paradise%2C%20luxury%20resort%2C%20bright%20sunny%20day%2C%20professional%20travel%20photography&width=1920&height=1080&seq=hero-maldives-1&orientation=landscape",
  "https://readdy.ai/api/search-image?query=Beautiful%20Maldives%20beach%20with%20palm%20trees%20swaying%20over%20crystal%20clear%20blue%20water%2C%20white%20sand%2C%20tropical%20paradise%2C%20peaceful%20serenity%2C%20golden%20hour%20lighting%2C%20professional%20travel%20photography&width=1920&height=1080&seq=hero-maldives-2&orientation=landscape",
  "https://readdy.ai/api/search-image?query=Maldives%20underwater%20coral%20reef%20with%20colorful%20tropical%20fish%2C%20snorkeling%20paradise%2C%20crystal%20clear%20water%2C%20vibrant%20marine%20life%2C%20tropical%20diving%20destination%2C%20professional%20underwater%20photography&width=1920&height=1080&seq=hero-maldives-3&orientation=landscape",
  "https://readdy.ai/api/search-image?query=Traditional%20Maldivian%20dhoni%20boat%20sailing%20on%20calm%20turquoise%20waters%20at%20sunset%2C%20golden%20hour%20%2C%20peaceful%20ocean%2C%20tropical%20paradise%2C%20romantic%20atmosphere%2C%20professional%20travel%20photography&width=1920&height=1080&seq=hero-maldives-4&orientation=landscape",
  "https://readdy.ai/api/search-image?query=Maldives%20sandbank%20surrounded%20by%20crystal%20clear%20turquoise%20water%2C%20pristine%20white%20sand%2C%20tropical%20paradise%2C%20aerial%20view%2C%20perfect%20beach%20destination%2C%20professional%20travel%20photography&width=1920&height=1080&seq=hero-maldives-5&orientation=landscape"
];

const clearSlides = db.prepare('DELETE FROM hero_slides');
const insertSlide = db.prepare('INSERT INTO hero_slides (image, position) VALUES (?, ?)');

const slidesTrx = db.transaction(() => {
  clearSlides.run();
  heroImages.forEach((img, idx) => insertSlide.run(img, idx + 1));
});
slidesTrx();

// Seed text keys with values
const textKeys: Array<{ key: string; context: string; value: string }> = [
  { key: 'navbar.home', context: 'Navbar label', value: 'Home' },
  { key: 'navbar.tours', context: 'Navbar label', value: 'Tours' },
  { key: 'navbar.about', context: 'Navbar label', value: 'About' },
  { key: 'navbar.testimonials', context: 'Navbar label', value: 'Testimonials' },
  { key: 'navbar.faq', context: 'Navbar label', value: 'FAQ' },
  { key: 'navbar.contact', context: 'Navbar label', value: 'Contact' },
  { key: 'navbar.book', context: 'Navbar label', value: 'Book Now' },
  { key: 'footer.copyright', context: 'Footer', value: '© Timeless Tours' },
  { key: 'hero.title', context: 'Home hero title', value: 'Explore the Unforgettable Maldives' },
  { key: 'hero.subtitle', context: 'Home hero subtitle', value: 'Discover pristine islands, crystal waters, and thrilling water sports adventures' },
  { key: 'hero.cta', context: 'Home hero button', value: 'Explore Tours' },
  { key: 'about.title', context: 'Home about title', value: 'Welcome to Paradise' },
  { key: 'about.body', context: 'Home about body', value: 'Timeless Tours Maldives specializes in creating unforgettable experiences across the pristine islands of the Maldives. From luxury resort visits to authentic local island adventures, we bring you the very best of tropical paradise with personalized service and deep local knowledge.' },
  { key: 'featured.title', context: 'Home featured title', value: 'Featured Experiences' },
  { key: 'featured.subtitle', context: 'Home featured subtitle', value: 'Discover our most popular Maldivian adventures' },
  { key: 'featured.button', context: 'Home featured button', value: 'More Info' },
  { key: 'why.title', context: 'Home why choose title', value: 'Why Choose Timeless Tours' },
  { key: 'why.subtitle', context: 'Home why choose subtitle', value: 'Experience the Maldives like never before' },
  { key: 'why.expertise.title', context: 'Why choose expertise title', value: 'Local Expertise' },
  { key: 'why.expertise.desc', context: 'Why choose expertise description', value: 'Deep knowledge of hidden gems and authentic Maldivian experiences' },
  { key: 'why.safety.title', context: 'Why choose safety title', value: 'Safety First' },
  { key: 'why.safety.desc', context: 'Why choose safety description', value: 'Certified guides and equipment for worry‑free adventures' },
  { key: 'why.service.title', context: 'Why choose service title', value: 'Personalized Service' },
  { key: 'why.service.desc', context: 'Why choose service description', value: 'Tailored experiences to create your perfect Maldivian getaway' },
  { key: 'testimonials.title', context: 'Home testimonials title', value: 'What Our Guests Say' },
  { key: 'cta.title', context: 'Home CTA title', value: 'Ready for Your Maldivian Adventure?' },
  { key: 'cta.subtitle', context: 'Home CTA subtitle', value: 'Let us create unforgettable memories in paradise' },
  { key: 'cta.button', context: 'Home CTA button', value: 'Plan Your Adventure' },
  { key: 'footer.company', context: 'Footer company name', value: 'Timeless Tours Maldives' },
  { key: 'footer.description', context: 'Footer company description', value: 'Creating unforgettable Maldivian experiences that connect you with pristine coral reefs, authentic island culture, and the natural beauty of our tropical paradise.' },
  { key: 'footer.quicklinks', context: 'Footer quick links title', value: 'Quick Links' },
  { key: 'footer.contact', context: 'Footer contact title', value: 'Contact Info' },
  { key: 'footer.newsletter', context: 'Footer newsletter title', value: 'Newsletter' },
  { key: 'footer.newsletter.desc', context: 'Footer newsletter description', value: 'Subscribe to get Maldivian travel tips and exclusive island experiences.' },
  { key: 'footer.newsletter.placeholder', context: 'Footer newsletter placeholder', value: 'Your email address' },
  { key: 'footer.newsletter.button', context: 'Footer newsletter button', value: 'Subscribe' },
  { key: 'footer.copyright', context: 'Footer copyright', value: '© 2024 Timeless Tours Maldives. All rights reserved.' },
  // About page content
  { key: 'about.hero.title', context: 'About hero title', value: 'About Timeless Tours' },
  { key: 'about.hero.subtitle', context: 'About hero subtitle', value: 'Your gateway to authentic Maldivian experiences' },
  { key: 'about.story.title', context: 'About story title', value: 'Our Story' },
  { key: 'about.story.para1', context: 'About story paragraph 1', value: 'Founded in the heart of Malé, Timeless Tours Maldives was born from a passion for sharing the untouched beauty and rich culture of our island nation. We believe that travel should be more than just visiting places – it should be about creating connections, understanding cultures, and making memories that last a lifetime.' },
  { key: 'about.story.para2', context: 'About story paragraph 2', value: 'Our team of local experts brings decades of combined experience in hospitality and marine adventures, ensuring every guest experiences the authentic spirit of the Maldives while enjoying the highest standards of safety and comfort.' },
  { key: 'about.team.title', context: 'About team title', value: 'Meet Our Team' },
  { key: 'about.team.subtitle', context: 'About team subtitle', value: 'Passionate locals dedicated to sharing the beauty of the Maldives' },
  { key: 'about.values.title', context: 'About values title', value: 'Our Values' },
  { key: 'about.values.subtitle', context: 'About values subtitle', value: 'The principles that guide everything we do' },
  { key: 'about.promise.title', context: 'About promise title', value: 'Our Promise to You' },
  { key: 'about.promise.sustainable.title', context: 'Promise title', value: 'Sustainable Tourism' },
  { key: 'about.promise.sustainable.desc', context: 'Promise description', value: 'We\'re committed to responsible tourism that benefits local communities and preserves our pristine marine environment.' },
  { key: 'about.promise.comfort.title', context: 'Promise title', value: 'Comfort & Luxury' },
  { key: 'about.promise.comfort.desc', context: 'Promise description', value: 'Every detail is carefully planned to ensure your comfort while maintaining the authentic spirit of the Maldives.' },
  { key: 'about.promise.experiences.title', context: 'Promise title', value: 'Unforgettable Experiences' },
  { key: 'about.promise.experiences.desc', context: 'Promise description', value: 'We create moments that will stay with you long after you leave our beautiful islands.' },
  
  // Contact page texts
  { key: 'contact.hero.title', context: 'Contact hero title', value: 'Get In Touch' },
  { key: 'contact.hero.subtitle', context: 'Contact hero subtitle', value: 'Ready to plan your perfect Maldivian adventure?' },
  { key: 'contact.form.title', context: 'Contact form title', value: 'Plan Your Adventure' },
  { key: 'contact.form.name.label', context: 'Form name label', value: 'Full Name' },
  { key: 'contact.form.name.placeholder', context: 'Form name placeholder', value: 'Your full name' },
  { key: 'contact.form.email.label', context: 'Form email label', value: 'Email Address' },
  { key: 'contact.form.email.placeholder', context: 'Form email placeholder', value: 'your.email@example.com' },
  { key: 'contact.form.phone.label', context: 'Form phone label', value: 'Phone Number' },
  { key: 'contact.form.phone.placeholder', context: 'Form phone placeholder', value: '+1 (555) 123-4567' },
  { key: 'contact.form.tour.label', context: 'Form tour label', value: 'Tour of Interest' },
  { key: 'contact.form.tour.placeholder', context: 'Form tour placeholder', value: 'Select a tour' },
  { key: 'contact.form.message.label', context: 'Form message label', value: 'Message' },
  { key: 'contact.form.message.placeholder', context: 'Form message placeholder', value: 'Tell us about your dream Maldives experience...' },
  { key: 'contact.form.submit', context: 'Form submit button', value: 'Send Message' },
  { key: 'contact.form.success.title', context: 'Success message title', value: 'Thank You!' },
  { key: 'contact.form.success.message', context: 'Success message text', value: 'We\'ve received your message and will get back to you within 24 hours.' },
  { key: 'contact.info.title', context: 'Contact info title', value: 'Contact Information' },
  { key: 'contact.info.phone.title', context: 'Phone section title', value: 'Phone' },
  { key: 'contact.info.phone.number', context: 'Phone number', value: '+960 9990377' },
  { key: 'contact.info.phone.desc', context: 'Phone description', value: 'Available 24/7 for emergencies' },
  { key: 'contact.info.email.title', context: 'Email section title', value: 'Email' },
  { key: 'contact.info.email.address', context: 'Email address', value: 'info@timelesstours.mv' },
  { key: 'contact.info.email.desc', context: 'Email description', value: 'We respond within 24 hours' },
  { key: 'contact.info.whatsapp.title', context: 'WhatsApp section title', value: 'WhatsApp' },
  { key: 'contact.info.whatsapp.number', context: 'WhatsApp number', value: '+960 7778899' },
  { key: 'contact.info.whatsapp.desc', context: 'WhatsApp description', value: 'Quick responses and booking' },
  { key: 'contact.info.location.title', context: 'Location section title', value: 'Location' },
  { key: 'contact.info.location.address', context: 'Location address', value: 'Marine Drive, Malé 20026, Maldives' },
  { key: 'contact.info.location.desc', context: 'Location description', value: 'Visit our office in the capital' },
  
  // Testimonials page texts
  { key: 'testimonials.hero.title', context: 'Testimonials hero title', value: 'Traveler Stories' },
  { key: 'testimonials.hero.subtitle', context: 'Testimonials hero subtitle', value: 'Real experiences from our valued travelers' },
  { key: 'testimonials.featured.title', context: 'Featured testimonials title', value: 'What Our Travelers Say' },
  { key: 'testimonials.featured.subtitle', context: 'Featured testimonials subtitle', value: 'Discover why thousands of travelers choose Timeless Tours for their most important journeys' },
  { key: 'testimonials.more.title', context: 'More testimonials title', value: 'More Traveler Reviews' },
  { key: 'testimonials.more.subtitle', context: 'More testimonials subtitle', value: 'Join thousands of satisfied travelers who have experienced the Timeless Tours difference' },
  { key: 'testimonials.stats.title', context: 'Statistics title', value: 'Trusted by Thousands' },
  { key: 'testimonials.stats.subtitle', context: 'Statistics subtitle', value: 'Our commitment to excellence speaks for itself' },
  { key: 'testimonials.stats.travelers', context: 'Happy travelers stat', value: 'Happy Travelers' },
  { key: 'testimonials.stats.rating', context: 'Average rating stat', value: 'Average Rating' },
  { key: 'testimonials.stats.destinations', context: 'Destinations stat', value: 'Destinations' },
  { key: 'testimonials.stats.recommend', context: 'Recommendation stat', value: 'Would Recommend' },
  { key: 'testimonials.cta.title', context: 'CTA title', value: 'Ready to Create Your Own Story?' },
  { key: 'testimonials.cta.subtitle', context: 'CTA subtitle', value: 'Join thousands of satisfied travelers and start planning your unforgettable journey today.' },
  { key: 'testimonials.cta.browse', context: 'Browse tours button', value: 'Browse Tours' },
  { key: 'testimonials.cta.contact', context: 'Contact us button', value: 'Contact Us' },
  
  // FAQ page texts
  { key: 'faq.hero.title', context: 'FAQ hero title', value: 'Frequently Asked Questions' },
  { key: 'faq.hero.subtitle', context: 'FAQ hero subtitle', value: 'Everything you need to know about traveling with us' },
  { key: 'faq.section.title', context: 'FAQ section title', value: 'Common Questions' },
  { key: 'faq.section.subtitle', context: 'FAQ section subtitle', value: 'Find answers to the most frequently asked questions about our tours and services' },
  { key: 'faq.help.title', context: 'Help section title', value: 'Still Have Questions?' },
  { key: 'faq.help.subtitle', context: 'Help section subtitle', value: 'Our travel experts are here to help you plan the perfect journey' },
  { key: 'faq.help.call.title', context: 'Call us title', value: 'Call Us' },
  { key: 'faq.help.call.desc', context: 'Call us description', value: 'Speak directly with our travel experts' },
  { key: 'faq.help.call.number', context: 'Call us number', value: '+1 (555) 123-4567' },
  { key: 'faq.help.call.hours', context: 'Call us hours', value: 'Mon-Fri: 9AM-6PM EST' },
  { key: 'faq.help.email.title', context: 'Email us title', value: 'Email Us' },
  { key: 'faq.help.email.desc', context: 'Email us description', value: 'Get detailed answers to your questions' },
  { key: 'faq.help.email.address', context: 'Email us address', value: 'info@timelesstours.com' },
  { key: 'faq.help.email.response', context: 'Email us response time', value: 'Response within 24 hours' },
  { key: 'faq.help.chat.title', context: 'Live chat title', value: 'Live Chat' },
  { key: 'faq.help.chat.desc', context: 'Live chat description', value: 'Instant support for quick questions' },
  { key: 'faq.help.chat.button', context: 'Live chat button', value: 'Start Chat' },
  { key: 'faq.help.chat.availability', context: 'Live chat availability', value: 'Available 24/7' },
  { key: 'faq.topics.title', context: 'Popular topics title', value: 'Popular Help Topics' },
  { key: 'faq.topics.subtitle', context: 'Popular topics subtitle', value: 'Quick access to the information you need most' }
];

const upsertText = db.prepare('INSERT INTO texts (key, context) VALUES (?, ?) ON CONFLICT(key) DO UPDATE SET context=excluded.context');
const selectTextId = db.prepare('SELECT id FROM texts WHERE key = ?');
const upsertTranslation = db.prepare('INSERT INTO translations (text_id, lang_code, value) VALUES (?, ?, ?) ON CONFLICT(text_id, lang_code) DO UPDATE SET value=excluded.value');

for (const tk of textKeys) {
  upsertText.run(tk.key, tk.context);
  const row = selectTextId.get(tk.key) as { id: number };
  upsertTranslation.run(row.id, 'en', tk.value);
}

// Load tours mock from src
const toursPath = resolve(process.cwd(), 'src', 'mocks', 'tours.ts');
const content = readFileSync(toursPath, 'utf-8');

// Very simple parse to eval JSON-like export using Function (safe enough in dev scripts)
function extractArray(name: string): any[] {
  const match = content.match(new RegExp(`export const ${name} = \\[(.|\\n|\\r)*?\\];`));
  if (!match) return [];
  const arrCode = match[0].replace(`export const ${name} =`, 'return');
  // eslint-disable-next-line no-new-func
  const fn = new Function(arrCode);
  return fn();
}

const tours = extractArray('tours');

const insertTour = db.prepare('INSERT OR REPLACE INTO tours (id, destination, duration, price, type, image) VALUES (@id, @destination, @duration, @price, @type, @image)');
const insertTourI18n = db.prepare('INSERT OR REPLACE INTO tour_i18n (tour_id, lang_code, title, short_description, full_description) VALUES (?, ?, ?, ?, ?)');

const trx = db.transaction(() => {
  for (const t of tours) {
    insertTour.run(t);
    insertTourI18n.run(t.id, 'en', t.title, t.shortDescription, t.fullDescription);
  }
});
trx();

// Seed team members
const teamMembers = [
  {
    name: 'Ahmed Hassan',
    role: 'Founder & Marine Guide',
    bio: 'Born and raised in Malé, Ahmed has over 15 years of experience in marine tourism and is passionate about marine conservation.',
    image: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20Maldivian%20male%20tour%20guide%2C%20friendly%20smile%2C%20traditional%20island%20background%2C%20tourism%20professional%2C%20authentic%20local%20person%2C%20warm%20personality%2C%20tropical%20setting&width=300&height=300&seq=team-ahmed-1&orientation=squarish',
    position: 1
  },
  {
    name: 'Fatima Ali',
    role: 'Cultural Experience Manager',
    bio: 'Fatima specializes in authentic cultural experiences and has deep connections with local island communities throughout the Maldives.',
    image: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20Maldivian%20female%20hospitality%20manager%2C%20warm%20smile%2C%20traditional%20island%20background%2C%20tourism%20professional%2C%20authentic%20local%20person%2C%20welcoming%20personality%2C%20tropical%20setting&width=300&height=300&seq=team-fatima-1&orientation=squarish',
    position: 2
  },
  {
    name: 'Ibrahim Mohamed',
    role: 'Dive Master & Safety Coordinator',
    bio: 'A certified PADI instructor with expertise in the Maldives\' best dive sites and marine life encounters.',
    image: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20Maldivian%20male%20dive%20instructor%2C%20confident%20smile%2C%20ocean%20background%2C%20scuba%20diving%20professional%2C%20authentic%20local%20person%2C%20adventurous%20personality%2C%20marine%20setting&width=300&height=300&seq=team-ibrahim-1&orientation=squarish',
    position: 3
  }
];

const clearTeamMembers = db.prepare('DELETE FROM team_members');
const insertTeamMember = db.prepare('INSERT INTO team_members (name, role, bio, image, position) VALUES (?, ?, ?, ?, ?)');

const teamTrx = db.transaction(() => {
  clearTeamMembers.run();
  teamMembers.forEach(member => {
    insertTeamMember.run(member.name, member.role, member.bio, member.image, member.position);
  });
});
teamTrx();

// Seed values
const values = [
  {
    title: 'Sustainability',
    description: 'Protecting our marine environment for future generations',
    icon: 'ri-leaf-line',
    position: 1
  },
  {
    title: 'Authenticity',
    description: 'Genuine experiences that showcase real Maldivian culture',
    icon: 'ri-heart-line',
    position: 2
  },
  {
    title: 'Safety',
    description: 'Your safety and comfort are our top priorities',
    icon: 'ri-shield-check-line',
    position: 3
  },
  {
    title: 'Excellence',
    description: 'Exceeding expectations in every aspect of your journey',
    icon: 'ri-star-line',
    position: 4
  }
];

const clearValues = db.prepare('DELETE FROM company_values');
const insertValue = db.prepare('INSERT INTO company_values (title, description, icon, position) VALUES (?, ?, ?, ?)');

const valuesTrx = db.transaction(() => {
  clearValues.run();
  values.forEach(value => {
    insertValue.run(value.title, value.description, value.icon, value.position);
  });
});
valuesTrx();

// Seed FAQ
const faqData = [
  {
    question: "What is included in the tour packages?",
    answer: "Our tour packages typically include speedboat or dhoni transfers, snorkeling equipment, guided tours, meals as specified, and entrance fees. Specific inclusions vary by tour and are clearly listed on each tour page. Resort transfers from Malé are generally included.",
    position: 1
  },
  {
    question: "How far in advance should I book?",
    answer: "We recommend booking at least 1-2 weeks in advance, especially during peak season (December to April). However, we can often accommodate last-minute bookings depending on availability. Early booking ensures better boat availability and weather conditions.",
    position: 2
  },
  {
    question: "What is your cancellation policy?",
    answer: "Cancellations made 48+ hours before the tour receive a full refund. Cancellations 24-48 hours before are subject to a 50% penalty. Same-day cancellations are non-refundable unless due to weather conditions determined unsafe by our guides.",
    position: 3
  },
  {
    question: "Do you provide snorkeling equipment?",
    answer: "Yes, we provide high-quality snorkeling equipment including masks, fins, and snorkels for all our marine tours. Equipment is sanitized between uses. If you prefer to bring your own equipment, you're welcome to do so.",
    position: 4
  },
  {
    question: "Are the tours suitable for non-swimmers?",
    answer: "Many of our tours are suitable for non-swimmers. Island hopping and cultural tours don't require swimming. For marine tours, we provide life jackets and have experienced guides to assist. Please inform us of any swimming concerns when booking.",
    position: 5
  },
  {
    question: "What should I bring on the tours?",
    answer: "We recommend bringing sunscreen (reef-safe), a hat, sunglasses, swimwear, a towel, and a waterproof bag for your belongings. Underwater cameras are available for rent. We'll provide specific packing lists for each tour type.",
    position: 6
  },
  {
    question: "Can you accommodate dietary restrictions?",
    answer: "Yes, we can accommodate most dietary restrictions including vegetarian, vegan, and halal requirements. Please inform us of any dietary needs when booking so we can arrange appropriate meals with local restaurants and families.",
    position: 7
  },
  {
    question: "What happens if weather affects the tour?",
    answer: "Safety is our top priority. If weather conditions are unsafe, we'll reschedule your tour or provide a full refund. During monsoon season (May-November), we monitor conditions closely and have alternative indoor cultural activities available.",
    position: 8
  }
];

const clearFaq = db.prepare('DELETE FROM faq');
const insertFaq = db.prepare('INSERT INTO faq (question, answer, position) VALUES (?, ?, ?)');

const faqTrx = db.transaction(() => {
  clearFaq.run();
  faqData.forEach(faq => {
    insertFaq.run(faq.question, faq.answer, faq.position);
  });
});
faqTrx();

// Seed FAQ Topics
const faqTopicsData = [
  {
    title: 'Booking Process',
    description: 'Learn how to book and what to expect',
    icon: 'ri-calendar-line',
    position: 1
  },
  {
    title: 'Travel Insurance',
    description: 'Protection options for your journey',
    icon: 'ri-shield-check-line',
    position: 2
  },
  {
    title: 'Travel Documents',
    description: 'Passport, visa, and other requirements',
    icon: 'ri-file-text-line',
    position: 3
  },
  {
    title: 'Packing Tips',
    description: 'What to bring for your destination',
    icon: 'ri-luggage-cart-line',
    position: 4
  },
  {
    title: 'Payment Options',
    description: 'Flexible payment plans available',
    icon: 'ri-money-dollar-circle-line',
    position: 5
  },
  {
    title: 'Group Travel',
    description: 'Special rates for groups of 8 or more',
    icon: 'ri-group-line',
    position: 6
  },
  {
    title: 'Health & Safety',
    description: 'Our commitment to your wellbeing',
    icon: 'ri-heart-pulse-line',
    position: 7
  },
  {
    title: 'Customer Support',
    description: '24/7 assistance during your travels',
    icon: 'ri-customer-service-2-line',
    position: 8
  }
];

const clearFaqTopics = db.prepare('DELETE FROM faq_topics');
const insertFaqTopic = db.prepare('INSERT INTO faq_topics (title, description, icon, position) VALUES (?, ?, ?, ?)');

const faqTopicsTrx = db.transaction(() => {
  clearFaqTopics.run();
  faqTopicsData.forEach(topic => {
    insertFaqTopic.run(topic.title, topic.description, topic.icon, topic.position);
  });
});
faqTopicsTrx();

// Finish
// eslint-disable-next-line no-console
console.log('Seed completed.');
