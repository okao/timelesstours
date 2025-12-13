
export const exclusivePackage = {
  id: 0,
  title: "7-Day Exclusive Maldives Adventure",
  destination: "Fulidhoo, Vaavu Atoll & Dhigurah, A.Dh Atoll",
  duration: "7 days",
  price: 0,
  type: "Exclusive Package",
  image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=600&fit=crop&q=80",
  shortDescription: "The ultimate Maldivian experience — 7 days of adventure, relaxation, and unforgettable marine encounters in paradise!",
  fullDescription: "Experience the Maldives like never before with our exclusive 7-day adventure package. From your arrival at Velana International Airport to your final departure, immerse yourself in the best of Maldivian paradise. This comprehensive journey takes you through stunning coral reefs, thrilling shark encounters, graceful manta rays, playful turtles, mysterious shipwrecks, gentle whale sharks, and authentic local experiences. Each day brings new adventures and discoveries, from island hopping to night fishing with traditional BBQ. Stay in the beautiful island of Fulidhoo and explore the pristine waters of Vaavu Atoll and A.Dh Atoll. This is more than a vacation — it's a complete Maldivian immersion that combines adventure, culture, and relaxation into one unforgettable week.",
  inclusions: [
    "Airport speedboat transfers",
    "6 nights accommodation in Fulidhoo",
    "All meals (breakfast, lunch, dinner)",
    "All boat transfers and excursions",
    "Snorkeling equipment for all activities",
    "Professional local guides",
    "Manta cruise experience",
    "Whale shark encounter",
    "Turtle point snorkeling",
    "Shipwreck exploration",
    "Island hopping tours",
    "Night fishing with traditional BBQ",
    "Coral and shark sandbank visits",
    "Lunch in Dhigurah",
    "Safety equipment and life jackets",
    "All entrance fees and permits"
  ],
  exclusions: [
    "International flights",
    "Travel insurance",
    "Personal expenses",
    "Alcoholic beverages",
    "Underwater camera rental",
    "Additional activities not mentioned"
  ],
  itinerary: [
    { day: 1, title: "Arrival & Transfer to Fulidhoo", description: "Welcome to the Maldives! Arrive at Velana International Airport and transfer via speedboat to the beautiful island of Fulidhoo. Check into your accommodation and enjoy a welcome dinner. Take in the stunning sunset and prepare for your week of adventure." },
    { day: 2, title: "Coral & Shark Sandbank Adventure", description: "Start your adventure with a visit to a pristine coral reef teeming with colorful marine life. Then head to a sandbank where you can observe friendly reef sharks in their natural habitat. Snorkel through vibrant coral gardens and enjoy a picnic lunch on the sandbank." },
    { day: 3, title: "Manta Cruise & Turtle Point", description: "Embark on a magical manta ray cruise where you'll have the opportunity to swim with these gentle giants. After the manta encounter, visit a famous turtle point where you can snorkel alongside graceful sea turtles in crystal-clear waters." },
    { day: 4, title: "Shipwreck Exploration & Island Hopping", description: "Dive into history as you explore a sunken shipwreck covered in coral and surrounded by tropical fish. Then enjoy an island hopping tour, visiting nearby local islands to experience authentic Maldivian culture, meet locals, and discover the simple beauty of island life." },
    { day: 5, title: "Whale Shark Encounter & Dhigurah Lunch", description: "Experience one of the ocean's most magnificent creatures — the whale shark. Cruise to A.Dh Atoll where you'll have the chance to swim with these gentle giants. After this unforgettable encounter, enjoy a delicious lunch in Dhigurah and explore this charming island." },
    { day: 6, title: "Night Fishing & Traditional BBQ", description: "Experience authentic Maldivian culture with a traditional night fishing trip. Learn local fishing techniques and try your hand at catching your dinner. After fishing, enjoy a BBQ feast on the boat under the starlit sky, grilling your fresh catch the Maldivian way." },
    { day: 7, title: "Departure", description: "Enjoy a final breakfast on Fulidhoo before transferring back to Velana International Airport via speedboat. Depart with unforgettable memories of your 7-day Maldivian adventure, filled with marine encounters, cultural experiences, and the beauty of paradise." }
  ]
};

export const tours = [
  {
    id: 1,
    title: "3 Point Snorkeling Trip (Sharks, Turtles & Corals)",
    destination: "Fulidhoo, Vaavu Atoll",
    duration: "Half day",
    price: 0,
    type: "Marine Life",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop&q=80",
    shortDescription: "Three amazing spots, one epic adventure — swim with turtles, spot reef sharks, and dive into coral wonderlands!",
    fullDescription: "Get ready for the ultimate snorkeling experience! Visit three stunning locations filled with friendly reef sharks, chilled-out turtles, and colorful coral gardens bursting with life. It's the best of the Maldives packed into one unforgettable trip — full of splashes, smiles, and sea magic.",
    inclusions: ["Boat transfers", "Snorkeling equipment", "Professional guide", "Refreshments", "Safety equipment"],
    exclusions: ["Underwater camera rental", "Personal expenses", "Additional beverages"],
    itinerary: [
      { day: 1, title: "Departure & First Snorkel Spot", description: "Board the boat and head to the first location teeming with marine life." },
      { day: 1, title: "Turtle Encounter", description: "Swim alongside graceful sea turtles in their natural habitat." },
      { day: 1, title: "Reef Shark Spotting", description: "Observe friendly reef sharks from a safe distance in crystal-clear waters." },
      { day: 1, title: "Coral Garden Exploration", description: "Dive into vibrant coral gardens filled with colorful tropical fish." },
      { day: 1, title: "Return Journey", description: "Head back to shore with unforgettable memories of your underwater adventure." }
    ]
  },
  {
    id: 2,
    title: "Shipwreck & Sandbank",
    destination: "Fulidhoo, Vaavu Atoll",
    duration: "Half day",
    price: 0,
    type: "Adventure",
    image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=600&fit=crop&q=80",
    shortDescription: "Explore a sunken ship, then chill on a dreamy sandbank — adventure and relaxation in one trip!",
    fullDescription: "Start with a splash as you dive around a real shipwreck covered in coral and teeming with fish. Then slow it down and unwind on a pure white sandbank surrounded by turquoise water. It's part explorer, part beach bum — 100% Maldivian fun.",
    inclusions: ["Boat transfers", "Snorkeling equipment", "Sandbank access", "Refreshments", "Professional guide"],
    exclusions: ["Underwater camera rental", "Personal expenses", "Additional beverages"],
    itinerary: [
      { day: 1, title: "Departure & Shipwreck Arrival", description: "Cruise to the shipwreck site and prepare for your underwater adventure." },
      { day: 1, title: "Shipwreck Snorkeling", description: "Explore the sunken ship covered in vibrant coral and surrounded by tropical fish." },
      { day: 1, title: "Sandbank Transfer", description: "Head to a pristine white sandbank for relaxation and swimming." },
      { day: 1, title: "Sandbank Relaxation", description: "Unwind on the pure white sand, swim in turquoise waters, and soak up the sun." },
      { day: 1, title: "Return Journey", description: "Cruise back with memories of both adventure and relaxation." }
    ]
  },
  {
    id: 3,
    title: "Night Fishing",
    destination: "Fulidhoo, Vaavu Atoll",
    duration: "Evening",
    price: 0,
    type: "Cultural",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&h=600&fit=crop&q=80",
    shortDescription: "Stars above, fish below — catch your dinner the local way!",
    fullDescription: "Experience the Maldives after dark as you drop your line under a glowing night sky. Feel the thrill when you get a bite and grill your catch right on the boat. It's laid-back, local, and a little bit legendary — perfect for ocean lovers with an adventurous side.",
    inclusions: ["Traditional dhoni boat", "Fishing equipment", "Professional guide", "BBQ grill on board", "Refreshments"],
    exclusions: ["Alcoholic beverages", "Personal expenses", "Additional food"],
    itinerary: [
      { day: 1, title: "Evening Departure", description: "Board the traditional dhoni boat as the sun sets and stars begin to appear." },
      { day: 1, title: "Fishing Spot Arrival", description: "Cruise to the best fishing spot and receive instruction on traditional fishing techniques." },
      { day: 1, title: "Night Fishing Experience", description: "Drop your line and feel the thrill of fishing under the starlit sky." },
      { day: 1, title: "BBQ Your Catch", description: "Grill your fresh catch right on the boat and enjoy a delicious meal under the stars." },
      { day: 1, title: "Return to Harbor", description: "Head back to shore with your catch and unforgettable memories of the night." }
    ]
  },
  {
    id: 4,
    title: "Dolphin Cruise",
    destination: "Fulidhoo, Vaavu Atoll",
    duration: "Half day",
    price: 0,
    type: "Marine Life",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop&q=80",
    shortDescription: "Sail with the happiest creatures in the sea — the dolphins!",
    fullDescription: "Jump aboard for some pure joy as playful dolphins leap and spin beside your boat. The ocean sparkles, the breeze is perfect, and your camera won't stop clicking. Every trip is different — but always magical.",
    inclusions: ["Boat cruise", "Professional guide", "Refreshments", "Dolphin spotting"],
    exclusions: ["Alcoholic beverages", "Personal expenses", "Additional activities"],
    itinerary: [
      { day: 1, title: "Departure", description: "Board the boat and set sail in search of playful dolphins." },
      { day: 1, title: "Dolphin Spotting", description: "Watch as dolphins leap and spin beside the boat in their natural habitat." },
      { day: 1, title: "Photo Opportunities", description: "Capture amazing photos of dolphins playing in the crystal-clear waters." },
      { day: 1, title: "Refreshments", description: "Enjoy refreshments while watching the dolphins." },
      { day: 1, title: "Return Journey", description: "Head back to shore with unforgettable memories." }
    ]
  },
  {
    id: 5,
    title: "Sunset Cruise",
    destination: "Fulidhoo, Vaavu Atoll",
    duration: "Evening",
    price: 0,
    type: "Relaxation",
    image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=600&fit=crop&q=80",
    shortDescription: "Golden skies, calm seas, and that perfect island vibe — sunset done right.",
    fullDescription: "Drift across the lagoon as the sun melts into the horizon. Sip a drink, snap some photos, and soak up the colors of paradise. Whether it's romance or relaxation you're after, this cruise gives you the best seat in the house for nature's evening show.",
    inclusions: ["Boat cruise", "Refreshments", "Professional guide", "Sunset viewing"],
    exclusions: ["Alcoholic beverages", "Personal expenses", "Additional food"],
    itinerary: [
      { day: 1, title: "Evening Departure", description: "Board the boat as the sun begins to set." },
      { day: 1, title: "Lagoon Cruise", description: "Drift across the calm lagoon waters." },
      { day: 1, title: "Sunset Viewing", description: "Watch the sun melt into the horizon with stunning colors." },
      { day: 1, title: "Refreshments", description: "Sip drinks and enjoy the peaceful atmosphere." },
      { day: 1, title: "Return to Harbor", description: "Head back under the starlit sky." }
    ]
  },
  {
    id: 6,
    title: "House Reef Snorkeling",
    destination: "Fulidhoo, Vaavu Atoll",
    duration: "2-3 hours",
    price: 0,
    type: "Marine Life",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop&q=80",
    shortDescription: "No boat needed — the reef is right here and packed with life!",
    fullDescription: "Grab your mask and fins and jump into your island's own underwater paradise. Meet turtles, rays, and a rainbow of tropical fish just a few meters from shore. It's easy, fun, and perfect for any ocean lover.",
    inclusions: ["Snorkeling equipment", "Professional guide", "Safety briefing"],
    exclusions: ["Personal expenses", "Underwater camera rental"],
    itinerary: [
      { day: 1, title: "Equipment & Briefing", description: "Get fitted with snorkeling equipment and receive a safety briefing." },
      { day: 1, title: "Reef Entry", description: "Enter the water from the shore and begin exploring." },
      { day: 1, title: "Marine Life Encounter", description: "Meet turtles, rays, and colorful tropical fish." },
      { day: 1, title: "Exploration", description: "Explore the vibrant coral reef just meters from shore." },
      { day: 1, title: "Return to Shore", description: "Head back to shore with amazing memories." }
    ]
  },
  {
    id: 7,
    title: "Manta Cruise",
    destination: "Fulidhoo, Vaavu Atoll",
    duration: "Full day",
    price: 0,
    type: "Marine Life",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop&q=80",
    shortDescription: "Meet the ocean's gentle giants — swim with majestic manta rays!",
    fullDescription: "Ready for a \"wow\" moment? Glide beside graceful manta rays as they dance through crystal-clear water. Watching them up close is an experience you'll never forget — peaceful, surreal, and pure Maldivian magic.",
    inclusions: ["Boat transfers", "Snorkeling equipment", "Professional guide", "Lunch", "Safety equipment"],
    exclusions: ["Underwater camera rental", "Personal expenses", "Additional beverages"],
    itinerary: [
      { day: 1, title: "Early Departure", description: "Depart early to maximize manta ray viewing opportunities." },
      { day: 1, title: "Manta Ray Location", description: "Cruise to known manta ray feeding and cleaning stations." },
      { day: 1, title: "Manta Ray Encounter", description: "Swim with majestic manta rays in their natural habitat." },
      { day: 1, title: "Lunch Break", description: "Enjoy lunch on a nearby island." },
      { day: 1, title: "Return Journey", description: "Head back with unforgettable memories." }
    ]
  },
  {
    id: 8,
    title: "Fulidhoo to Maafushi Trip",
    destination: "Fulidhoo, Vaavu Atoll",
    duration: "Full day",
    price: 0,
    type: "Island Hopping",
    image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=600&fit=crop&q=80",
    shortDescription: "Island-hop your way through paradise — culture, color, and ocean views all the way!",
    fullDescription: "Take a scenic ride from Fulidhoo to Maafushi and explore the real island life. Meet locals, grab a coconut, and enjoy the simple beauty of the Maldives from a whole new perspective. It's the perfect mix of travel, chill, and discovery.",
    inclusions: ["Boat transfers", "Island tours", "Local guide", "Refreshments"],
    exclusions: ["Meals", "Personal expenses", "Additional activities"],
    itinerary: [
      { day: 1, title: "Departure from Fulidhoo", description: "Start your journey from Fulidhoo island." },
      { day: 1, title: "Scenic Cruise", description: "Enjoy the beautiful ocean views during the cruise." },
      { day: 1, title: "Maafushi Arrival", description: "Arrive at Maafushi and explore the island." },
      { day: 1, title: "Local Culture", description: "Meet locals and experience authentic island life." },
      { day: 1, title: "Return Journey", description: "Head back to Fulidhoo with new memories." }
    ]
  },
  {
    id: 9,
    title: "Big Game Fishing (1 Hour)",
    destination: "Fulidhoo, Vaavu Atoll",
    duration: "1 hour",
    price: 0,
    type: "Adventure",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&h=600&fit=crop&q=80",
    shortDescription: "One hour, one big catch — let's see what you can reel in!",
    fullDescription: "Hit the open seas and test your skills with some real big game action. Feel the rush as you hook a strong one — whether it's a tuna, barracuda, or something even bigger. Fast, thrilling, and perfect for anyone who loves a challenge.",
    inclusions: ["Fishing boat", "Fishing equipment", "Professional guide", "Safety equipment"],
    exclusions: ["Personal expenses", "Fish processing"],
    itinerary: [
      { day: 1, title: "Departure", description: "Head out to the open ocean for big game fishing." },
      { day: 1, title: "Fishing Action", description: "Test your skills and try to hook a big catch." },
      { day: 1, title: "The Catch", description: "Feel the thrill when you hook a strong fish." },
      { day: 1, title: "Return", description: "Head back to shore with your catch." }
    ]
  },
  {
    id: 10,
    title: "Fulidhoo to Kunaawashi",
    destination: "Fulidhoo, Vaavu Atoll",
    duration: "Half day",
    price: 0,
    type: "Island Hopping",
    image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=600&fit=crop&q=80",
    shortDescription: "Cruise to a hidden gem — clear lagoons, soft sands, and total peace.",
    fullDescription: "Escape to the quiet beauty of Kunaawashi Island. Swim, snorkel, or just kick back and enjoy the postcard-perfect scenery. It's your personal slice of paradise — calm, cozy, and completely unforgettable.",
    inclusions: ["Boat transfers", "Island access", "Professional guide", "Refreshments"],
    exclusions: ["Meals", "Personal expenses", "Additional activities"],
    itinerary: [
      { day: 1, title: "Departure from Fulidhoo", description: "Start your journey to Kunaawashi." },
      { day: 1, title: "Scenic Cruise", description: "Enjoy the beautiful ocean views." },
      { day: 1, title: "Kunaawashi Arrival", description: "Arrive at the hidden gem of Kunaawashi." },
      { day: 1, title: "Island Exploration", description: "Swim, snorkel, or relax on the pristine beaches." },
      { day: 1, title: "Return Journey", description: "Head back with peaceful memories." }
    ]
  },
  {
    id: 11,
    title: "Trolling Fishing (1 Hour)",
    destination: "Fulidhoo, Vaavu Atoll",
    duration: "1 hour",
    price: 0,
    type: "Cultural",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&h=600&fit=crop&q=80",
    shortDescription: "Cruise, chill, and reel in the fun — fishing the easy-going way!",
    fullDescription: "Sit back as the boat glides across the ocean and your lines trail behind. The sea breeze, the sound of waves, and that moment when you feel a tug — pure bliss! A short, simple, and super fun fishing trip for everyone.",
    inclusions: ["Fishing boat", "Fishing equipment", "Professional guide"],
    exclusions: ["Personal expenses", "Fish processing"],
    itinerary: [
      { day: 1, title: "Departure", description: "Set out on a relaxing trolling fishing trip." },
      { day: 1, title: "Trolling", description: "Let your lines trail behind as the boat glides." },
      { day: 1, title: "The Catch", description: "Feel the excitement when you get a bite." },
      { day: 1, title: "Return", description: "Head back to shore." }
    ]
  },
  {
    id: 12,
    title: "Lobster Hunting (2 Hours)",
    destination: "Fulidhoo, Vaavu Atoll",
    duration: "2 hours",
    price: 0,
    type: "Adventure",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop&q=80",
    shortDescription: "Mask up and dive for lobsters like a true islander!",
    fullDescription: "Go on a mini underwater treasure hunt near a nearby island. Our guides will show you how to find and catch lobsters the traditional way. It's fun, hands-on, and deliciously rewarding — the Maldivian way to spend a morning!",
    inclusions: ["Boat transfers", "Snorkeling equipment", "Professional guide", "Traditional techniques"],
    exclusions: ["Personal expenses", "Lobster processing"],
    itinerary: [
      { day: 1, title: "Departure", description: "Head to a nearby island for lobster hunting." },
      { day: 1, title: "Briefing", description: "Learn traditional lobster hunting techniques." },
      { day: 1, title: "Underwater Hunt", description: "Dive and search for lobsters in their natural habitat." },
      { day: 1, title: "The Catch", description: "Catch lobsters using traditional methods." },
      { day: 1, title: "Return", description: "Head back with your catch." }
    ]
  },
  {
    id: 13,
    title: "Sandbank Escape (2 Hours – near Alimatha)",
    destination: "Fulidhoo, Vaavu Atoll",
    duration: "2 hours",
    price: 0,
    type: "Relaxation",
    image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=600&fit=crop&q=80",
    shortDescription: "Just you, the sun, and endless blue — your private paradise awaits.",
    fullDescription: "Step onto a tiny sandbank surrounded by shimmering turquoise water. Take a swim, snap some photos, or just lie back and let time drift away. Whether you come for peace or play, this is the Maldives at its most magical.",
    inclusions: ["Boat transfers", "Sandbank access", "Professional guide", "Refreshments"],
    exclusions: ["Personal expenses", "Additional activities"],
    itinerary: [
      { day: 1, title: "Departure", description: "Cruise to the private sandbank near Alimatha." },
      { day: 1, title: "Sandbank Arrival", description: "Step onto your private paradise." },
      { day: 1, title: "Relaxation", description: "Swim, sunbathe, or simply relax on the pristine sand." },
      { day: 1, title: "Photo Opportunities", description: "Capture stunning photos of the paradise setting." },
      { day: 1, title: "Return Journey", description: "Head back with peaceful memories." }
    ]
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, USA",
    text: "Our Maafushi day trip with Timeless Tours was absolutely magical. The snorkeling was incredible and the local lunch was delicious. The crystal-clear waters and friendly locals made it unforgettable.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&q=80"
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Singapore",
    text: "Swimming with manta rays at Hanifaru Bay was a dream come true. The marine biologist guide was knowledgeable and the whole experience was professionally organized. Highly recommend!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&q=80"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    location: "Madrid, Spain",
    text: "The sandbank picnic was pure paradise! Crystal clear waters, pristine white sand, and delicious food. It felt like we had our own private piece of heaven in the Maldives.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&q=80"
  },
  {
    id: 4,
    name: "David Thompson",
    location: "London, UK",
    text: "Thulusdhoo island was fascinating! Learning to surf at Chickens break and visiting the Coca-Cola factory was unique. The local culture experience was authentic and memorable.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&q=80"
  },
  {
    id: 5,
    name: "Lisa Park",
    location: "Seoul, South Korea",
    text: "The sunset dolphin cruise was magical! Watching dolphins play in the golden light while cruising on a traditional dhoni was the perfect end to our Maldives vacation.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&q=80"
  }
];

export const faqs = [
  {
    id: 1,
    question: "What is included in the 7-Day Exclusive Maldives Adventure package?",
    answer: "The Exclusive Package includes airport speedboat transfers, 6 nights accommodation in Fulidhoo, all meals (breakfast, lunch, dinner), all boat transfers and excursions, snorkeling equipment, professional local guides, manta cruise experience, whale shark encounter, turtle point snorkeling, shipwreck exploration, island hopping tours, night fishing with traditional BBQ, coral and shark sandbank visits, lunch in Dhigurah, safety equipment, and all entrance fees. International flights, travel insurance, personal expenses, alcoholic beverages, and underwater camera rental are not included."
  },
  {
    id: 2,
    question: "What can I expect on the 3 Point Snorkeling Trip?",
    answer: "The 3 Point Snorkeling Trip takes you to three amazing locations in one half-day adventure. You'll swim with sea turtles, observe friendly reef sharks from a safe distance, and explore vibrant coral gardens teeming with colorful tropical fish. The package includes boat transfers, snorkeling equipment, professional guide, refreshments, and safety equipment. This is perfect for both beginners and experienced snorkelers."
  },
  {
    id: 3,
    question: "How does the Night Fishing experience work?",
    answer: "Night Fishing is an authentic Maldivian cultural experience. You'll board a traditional dhoni boat in the evening and cruise to the best fishing spots as the stars appear. Our guides will teach you traditional fishing techniques, and you'll have the opportunity to catch your own dinner. After fishing, you'll grill your fresh catch right on the boat under the starlit sky. The package includes the traditional dhoni boat, fishing equipment, professional guide, BBQ grill on board, and refreshments."
  },
  {
    id: 4,
    question: "What is the difference between Big Game Fishing and Trolling Fishing?",
    answer: "Big Game Fishing (1 hour) is an intense, fast-paced experience where you target larger fish like tuna and barracuda in the open ocean. It requires more physical effort and is perfect for thrill-seekers. Trolling Fishing (1 hour) is more relaxed - you sit back as the boat glides and your lines trail behind. It's easier-going and suitable for everyone, including families. Both include fishing boat, equipment, and professional guide."
  },
  {
    id: 5,
    question: "Can I swim with manta rays on the Manta Cruise?",
    answer: "Yes! The Manta Cruise is a full-day experience designed specifically for swimming with majestic manta rays. We cruise to known manta ray feeding and cleaning stations where you'll have the opportunity to swim alongside these gentle giants in their natural habitat. The package includes boat transfers, snorkeling equipment, professional guide, lunch, and safety equipment. Manta ray encounters are most common during the dry season (December to April)."
  },
  {
    id: 6,
    question: "What makes the Shipwreck & Sandbank tour special?",
    answer: "This half-day tour combines adventure and relaxation perfectly. First, you'll explore a real sunken shipwreck covered in vibrant coral and teeming with tropical fish - a unique underwater adventure. Then, you'll unwind on a pristine white sandbank surrounded by turquoise water, perfect for swimming, sunbathing, and photography. It's the best of both worlds in one unforgettable trip."
  },
  {
    id: 7,
    question: "Do I need to be a strong swimmer for the House Reef Snorkeling?",
    answer: "No! House Reef Snorkeling is perfect for all skill levels because the reef is just a few meters from shore - no boat needed. You can enter the water directly from the beach and explore at your own pace. We provide snorkeling equipment and a professional guide who will give you a safety briefing. Life jackets are available for those who need extra confidence. You'll see turtles, rays, and colorful tropical fish in shallow, calm waters."
  },
  {
    id: 8,
    question: "What should I expect on the Dolphin Cruise?",
    answer: "The Dolphin Cruise is a magical half-day experience where playful dolphins often leap and spin beside the boat. While dolphin sightings are common, they're wild animals, so encounters can vary. The cruise includes a professional guide who knows the best spots, refreshments, and plenty of photo opportunities. The ocean views and peaceful atmosphere make it enjoyable even if dolphins are shy that day."
  },
  {
    id: 9,
    question: "What is included in the island hopping tours (Fulidhoo to Maafushi or Kunaawashi)?",
    answer: "Island hopping tours include boat transfers, island tours with a local guide, and refreshments. You'll experience authentic Maldivian culture, meet locals, explore different islands, and enjoy the simple beauty of island life. Meals and additional activities are not included, but you can purchase food and drinks on the islands. These tours are perfect for cultural immersion and photography."
  },
  {
    id: 10,
    question: "How does the Sunset Cruise differ from other tours?",
    answer: "The Sunset Cruise is a peaceful evening experience focused on relaxation and romance. You'll drift across the calm lagoon as the sun sets, creating stunning colors in the sky. It's perfect for couples, photographers, or anyone wanting to unwind. The cruise includes refreshments and a professional guide. Unlike snorkeling or fishing tours, this is purely about enjoying the natural beauty and peaceful atmosphere."
  },
  {
    id: 11,
    question: "What is the Lobster Hunting experience like?",
    answer: "Lobster Hunting is a 2-hour adventure where you'll learn traditional Maldivian lobster hunting techniques. Our guides will teach you how to find and catch lobsters the traditional way near a nearby island. You'll use snorkeling equipment to dive and search for lobsters in their natural habitat. It's a hands-on, fun experience that's both adventurous and culturally authentic. The package includes boat transfers, snorkeling equipment, professional guide, and instruction in traditional techniques."
  },
  {
    id: 12,
    question: "What makes the Sandbank Escape special?",
    answer: "The Sandbank Escape (2 hours near Alimatha) offers you a private paradise experience. You'll step onto a tiny sandbank surrounded by shimmering turquoise water - it's like having your own private island. Perfect for swimming, sunbathing, photography, or simply relaxing. The package includes boat transfers, sandbank access, professional guide, and refreshments. It's the Maldives at its most magical and peaceful."
  },
  {
    id: 13,
    question: "How do I get to Fulidhoo from the airport?",
    answer: "Fulidhoo is accessible via speedboat from Velana International Airport. The Exclusive Package includes airport transfers. For individual tours, we can arrange speedboat transfers from the airport to Fulidhoo. The journey takes approximately 1.5-2 hours depending on weather conditions. We'll coordinate your arrival and departure times to ensure smooth transfers."
  },
  {
    id: 14,
    question: "Are the tours suitable for children?",
    answer: "Yes! Many of our tours are family-friendly. Island hopping, dolphin cruises, sunset cruises, and sandbank visits are perfect for children. For snorkeling tours, children should be comfortable in water and we provide life jackets. Night fishing and fishing tours are great family activities. The Exclusive Package is suitable for families, though some activities like whale shark encounters may require stronger swimming skills. Please discuss your family's needs when booking."
  },
  {
    id: 15,
    question: "What is the best time of year to visit for marine life encounters?",
    answer: "The dry season (December to April) offers the best conditions for marine life encounters. Water visibility is excellent, and manta rays and whale sharks are more commonly seen. However, the Maldives offers amazing marine life year-round. During the wet season (May to November), you can still enjoy snorkeling, fishing, and island hopping, though some days may have rougher seas. We monitor conditions daily and adjust tours accordingly."
  },
  {
    id: 16,
    question: "Can I customize the Exclusive Package itinerary?",
    answer: "While the Exclusive Package has a set 7-day itinerary designed to showcase the best of the Maldives, we can discuss modifications based on your interests, weather conditions, and availability. Some activities may be swapped or adjusted. Please contact us via WhatsApp to discuss customization options before booking."
  },
  {
    id: 17,
    question: "What accommodation is included in the Exclusive Package?",
    answer: "The Exclusive Package includes 6 nights accommodation in Fulidhoo at either The Mureed or Malas hotels. Both are comfortable local guesthouses that offer authentic Maldivian island living. Rooms are clean, comfortable, and include basic amenities. The package includes all meals (breakfast, lunch, dinner) at the accommodation and during excursions."
  },
  {
    id: 18,
    question: "Do I need to bring my own snorkeling equipment?",
    answer: "No, all snorkeling tours include high-quality snorkeling equipment (mask, fins, snorkel). Equipment is sanitized between uses. However, if you prefer to bring your own equipment for comfort or hygiene reasons, you're welcome to do so. For the House Reef Snorkeling, you can use the equipment for the entire duration of your stay."
  }
];
