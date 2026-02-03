import { Tabs, Typography } from "antd";
import { useMemo, useState } from "react";
import Section from "@components/ui/Section";
import ItineraryCard from "@features/itineraries/components/ItineraryCard";
import { useItineraries } from "@features/itineraries/hooks/useItineraries";

const ItineraryListPage = () => {
  const { itineraries, categories } = useItineraries();
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered = useMemo(() => {
    if (activeCategory === "All") {
      return itineraries;
    }
    return itineraries.filter((itinerary) => itinerary.category === activeCategory);
  }, [activeCategory, itineraries]);

  const tabItems = [
    { key: "All", label: "All" },
    ...categories.map((category) => ({ key: category, label: category }))
  ];

  return (
    <Section title="Itineraries" subtitle="Choose a journey tailored to your travel style">
      <Typography.Paragraph className="max-w-2xl text-slate-300">
        Explore our curated packages, each designed for immersive exploration with premium service and local
        expertise.
      </Typography.Paragraph>
      <div className="mt-6">
        <Tabs
          items={tabItems}
          activeKey={activeCategory}
          onChange={setActiveCategory}
          className="text-slate-200"
        />
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {filtered.map((itinerary) => (
          <ItineraryCard key={itinerary.id} itinerary={itinerary} />
        ))}
      </div>
    </Section>
  );
};

export default ItineraryListPage;
