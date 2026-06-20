import { CarnivalEvent, BookingItem, GalleryItem } from './types';

// Let's import the newly generated images. Since typescript might warn if asset files are imported directly as values,
// we can use standard asset URLs representing our absolute paths in the vite server.
export const IMAGES = {
  hero: '/src/assets/images/hero_masquerade_1781172436115.png',
  maskDetail: '/src/assets/images/fancy_dress_art_1781172453997.png',
  brassBand: '/src/assets/images/brass_band_dance_1781172470774.png',
  backupHero: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1600&q=80',
};

export const SERVICES_WHATSAPP_NUMBER = '233549232040'; // Standard placeholder for Westside Carnival Booking

export const CARNIVAL_EVENTS: CarnivalEvent[] = [
  {
    id: 'e1',
    title: 'Ankos Fancy Dress Grand Parade',
    category: 'adults',
    date: 'Dec 24, 2026',
    time: '08:00 AM - 05:00 PM',
    location: 'Amanful to Jubilee Park, Takoradi',
    description: 'The crowning jewel of the Westside Carnival. Witness over 50 masquerade groups (fancy dress clubs) matching in elaborate handmade costumes and papier-mâché masks, dancing to full-strength energetic brass bands.',
    price: 'Free Public Event',
    imageUrl: IMAGES.hero,
    popular: true,
  },
  {
    id: 'e2',
    title: 'Westside Brass Band Championship',
    category: 'music',
    date: 'Dec 25, 2026',
    time: '04:00 PM - 10:00 PM',
    location: 'Takoradi Mall Arena',
    description: 'The ultimate battle of rhythm. Top brass bands from Sekondi-Takoradi and across Ghana battle the tempo, showcasing live horns, deep percussion, and highlife improvisations that make spectators move.',
    price: 'GHS 50 (Standard) / GHS 150 (VIP)',
    imageUrl: IMAGES.brassBand,
    popular: true,
  },
  {
    id: 'e3',
    title: 'Ankos Youth & Kids Parade',
    category: 'kids',
    date: 'Dec 26, 2026',
    time: '09:00 AM - 02:00 PM',
    location: 'Market Circle Parade Ring, Takoradi',
    description: 'A beautiful future-generation display where kids from various schools and masquerade branches learn, celebrate, and perform with custom lightweight masks and children brass marching bands.',
    price: 'Free Public Event',
    imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80',
    popular: false,
  },
  {
    id: 'e4',
    title: 'Afrobeats & Highlife Street Jam',
    category: 'music',
    date: 'Dec 26, 2026',
    time: '07:00 PM - Midnight',
    location: 'Liberation Road High Street, Takoradi',
    description: 'The big street concert! Featuring top Ghanaian superstars, legendary local highlife veterans, and high-energy DJs turning Liberation Road into a massive open-air dance floor.',
    price: 'Free Ground Entry / GHS 100 VIP Stand',
    imageUrl: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=600&q=80',
    popular: true,
  },
  {
    id: 'e5',
    title: 'Legacy Masquerade Exhibition & Workshop',
    category: 'adults',
    date: 'Dec 23, 2026',
    time: '10:00 AM - 04:00 PM',
    location: 'Takoradi Regional Library Hall',
    description: 'Learn the artistry and deep-rooted historical significance of Takoradi masquerading. Watch veteran craftsmen sculpt traditional papier-mâché masks and design complex customized suits.',
    price: 'GHS 20 (Includes souvenir)',
    imageUrl: IMAGES.maskDetail,
    popular: false,
  },
  {
    id: 'e6',
    title: 'Carnival Kids Playground & Funfair',
    category: 'kids',
    date: 'Dec 24 - Dec 27, 2026',
    time: '10:00 AM Daily',
    location: 'Raybow International Gardens',
    description: 'A premium kids play park featuring bouncing castles, face painting, carnival games, balloon modeling, photo sessions with friendly cartoon masquerade giants, and candy stands.',
    price: 'GHS 30 per child (Parents Enter Free)',
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
    popular: false,
  },
];

export const HOTEL_BOOKINGS: BookingItem[] = [
  {
    id: 'h1',
    type: 'hotel',
    name: 'Best Western Plus Atlantic Hotel',
    description: 'Perched overlooking the Gulf of Guinea, this absolute luxury hotel offers modern rooms, beachside breeze, and multiple swimming pools where carnival afterparties are hosted.',
    rating: 4.8,
    priceRange: 'GHS 1,800 - GHS 3,500 / night',
    facilities: ['Ocean View', 'Infinity Pool', 'Complimentary Breakfast', 'Free Wi-Fi', '24/7 Security'],
    whatsappNumber: SERVICES_WHATSAPP_NUMBER,
    whatsappMessage: 'Hello Westside Carnival! I would like to inquire about booking a room at Best Western Plus Atlantic Hotel Takoradi for the carnival week.',
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
    location: 'Beach Road, Takoradi',
  },
  {
    id: 'h2',
    type: 'hotel',
    name: 'Raybow International Hotel',
    description: 'Featuring lush green botanical gardens, extremely quiet and elegant accommodations, and an exquisite restaurant, Raybow is the primary hub of culture workshops and VIP dining during the carnival.',
    rating: 4.6,
    priceRange: 'GHS 1,200 - GHS 2,200 / night',
    facilities: ['Lush Gardens', 'Outdoor Pool', 'Gourmet Restaurant', 'Airport Shuttle', 'Gym'],
    whatsappNumber: SERVICES_WHATSAPP_NUMBER,
    whatsappMessage: 'Hello Westside Carnival! I would like to inquire about booking at Raybow International Hotel for the festival period.',
    imageUrl: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80',
    location: 'Dixcove Hill, Takoradi',
  },
  {
    id: 'h3',
    type: 'hotel',
    name: 'Plan B Executive Lodge & Suites',
    description: 'Perfect for the pragmatic traveler wanting clean modern style, highly responsive service, and quick central proximity to both Market Circle and the parade termination points.',
    rating: 4.3,
    priceRange: 'GHS 600 - GHS 1,100 / night',
    facilities: ['Central Location', 'AC Rooms', 'Local & Continental Kitchen', 'Free Parking', 'Bar'],
    whatsappNumber: SERVICES_WHATSAPP_NUMBER,
    whatsappMessage: 'Hello Westside Carnival! Please help me check availability at Plan B Lodge for the upcoming celebration.',
    imageUrl: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80',
    location: 'Anaji, Takoradi',
  }
];

export const RESTAURANT_BOOKINGS: BookingItem[] = [
  {
    id: 'r1',
    type: 'restaurant',
    name: 'Mona Lisa Executive Bar & Restaurant',
    description: 'The absolute culinary beacon of Takoradi. Experience high-end classic lobster, authentic grilled prawns, and local Ghanaian luxury platters. Special live jazz and brass bands perform here during the carnival evenings.',
    rating: 4.7,
    priceRange: 'GHS 150 - GHS 450 per meal',
    facilities: ['Ac indoor dining', 'Vibrant Rooftop Bar', 'Live Brass Music', 'Seafood Specialist'],
    whatsappNumber: SERVICES_WHATSAPP_NUMBER,
    whatsappMessage: 'Hello Westside Carnival! I would like to book a VIP dinner reservation at Mona Lisa Restaurant for the festival.',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80',
    location: 'Liberation Road, Takoradi',
  },
  {
    id: 'r2',
    type: 'restaurant',
    name: 'Gilbens Gourmet Garden & Lounge',
    description: 'A cozy open-air tropical bistro with an incredible menu of local fusions. Famous for their spiced charcoal grilled tilapia with banku, spicy Jollof, and signature Westside mocktails crafted from indigenous fruits.',
    rating: 4.5,
    priceRange: 'GHS 80 - GHS 220 per meal',
    facilities: ['Al Fresco Lounge', 'Mocktail Lounge', 'Local Fusion Delicacies', 'Weekend Band Night'],
    whatsappNumber: SERVICES_WHATSAPP_NUMBER,
    whatsappMessage: 'Hello Westside Carnival! I would like to make a table reservation for a group at Gilbens Gourmet Garden.',
    imageUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80',
    location: 'Kwesimintsim Highway, Takoradi',
  },
  {
    id: 'r3',
    type: 'restaurant',
    name: 'Standard Heritage Chop Bar & Palms',
    description: 'For travelers seeking authentic roots. Enjoy hot legendary fufu, pounded fresh under the palm trees, with rich goat light-soup or peanut butter soup, freshly tapped local palm wine, and premium hospitality.',
    rating: 4.4,
    priceRange: 'GHS 60 - GHS 150 per meal',
    facilities: ['Traditional Vibes', 'Live Fufu Pounding', 'Palm Wine Bar', 'Traditional Horn Band'],
    whatsappNumber: SERVICES_WHATSAPP_NUMBER,
    whatsappMessage: 'Hello Westside Carnival! I want to try standard organic Ghanaian dishes, please reserve standard heritage combo slots for me.',
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
    location: 'Fijai, Takoradi',
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    type: 'image',
    title: 'Ankos Elite Parade Costumes',
    url: IMAGES.hero,
    category: 'masquerade',
    thumbnailUrl: IMAGES.hero,
    description: 'Stunning fancy dress participants matching in spectacular orange and purple silk masks during the central Parade.'
  },
  {
    id: 'g2',
    type: 'image',
    title: 'The Brass Horn Resonance',
    url: IMAGES.brassBand,
    category: 'brassband',
    thumbnailUrl: IMAGES.brassBand,
    description: 'Takoradi local marching orchestra leading the parade with high energy, trumpets, and local horns.'
  },
  {
    id: 'g3',
    type: 'image',
    title: 'Traditional Mask Artistry',
    url: IMAGES.maskDetail,
    category: 'masquerade',
    thumbnailUrl: IMAGES.maskDetail,
    description: 'Expert hand-crafted masquerade mask combining local elements and celebratory modern paint trends.'
  },
  {
    id: 'g4',
    type: 'video',
    title: 'Grand Finale Showcase at Jubilee Park (Past Year)',
    // Since this is a video placeholder, we use a beautiful stock clip cover
    url: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=80',
    category: 'festival',
    thumbnailUrl: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=600&q=80',
    description: 'Full-spectrum summary of the cultural dance showcase, brass band rhythms, and massive crowds at the park.'
  },
  {
    id: 'g5',
    type: 'image',
    title: 'Street Drummer Rhythms',
    url: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1200&q=80',
    category: 'brassband',
    thumbnailUrl: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=600&q=80',
    description: 'Unifying beat of traditional talking drums mixed with modern percussion elements.'
  },
  {
    id: 'g6',
    type: 'image',
    title: 'Kids Fancy Dress Joy',
    url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80',
    category: 'festival',
    thumbnailUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80',
    description: 'Children smiling and showing off their junior custom suits during the Boxing Day special event.'
  }
];
