import { useMemo } from "react";
import { getFeaturedItineraries, getItineraries, getItineraryCategories } from "@features/itineraries/services/itineraryService";

export const useItineraries = () => {
  const itineraries = useMemo(() => getItineraries(), []);
  const featured = useMemo(() => getFeaturedItineraries(), []);
  const categories = useMemo(() => getItineraryCategories(), []);

  return { itineraries, featured, categories };
};
