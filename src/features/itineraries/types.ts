export type ItineraryDay = {
  day: number;
  title: string;
  description: string;
  highlights: string[];
};

export type Itinerary = {
  id: string;
  title: string;
  location: string;
  duration: string;
  price: string;
  image: string;
  category: string;
  tags: string[];
  featured: boolean;
  overview: string;
  days: ItineraryDay[];
};
