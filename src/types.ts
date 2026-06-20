export type EventCategory = 'adults' | 'kids' | 'music' | 'all';

export interface CarnivalEvent {
  id: string;
  title: string;
  category: EventCategory;
  date: string;
  time: string;
  location: string;
  description: string;
  price: string;
  imageUrl?: string;
  popular?: boolean;
}

export type BookingType = 'hotel' | 'restaurant';

export interface BookingItem {
  id: string;
  type: BookingType;
  name: string;
  description: string;
  rating: number;
  priceRange: string;
  facilities: string[];
  whatsappNumber: string;
  whatsappMessage: string;
  imageUrl: string;
  location: string;
}

export interface GalleryItem {
  id: string;
  type: 'image' | 'video';
  title: string;
  url: string;
  category: 'masquerade' | 'brassband' | 'festival';
  thumbnailUrl: string;
  description?: string;
}
