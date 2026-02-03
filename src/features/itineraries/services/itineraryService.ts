import siteContent from "@data/siteContent.json";
import type { Itinerary } from "@features/itineraries/types";

const itineraryData = (siteContent as { itineraries: Itinerary[] }).itineraries;

export const getItineraries = () => itineraryData;

export const getFeaturedItineraries = () =>
  itineraryData.filter((itinerary) => itinerary.featured);

export const getItineraryById = (id: string) =>
  itineraryData.find((itinerary) => itinerary.id === id);

export const getItineraryCategories = () =>
  Array.from(new Set(itineraryData.map((itinerary) => itinerary.category)));
