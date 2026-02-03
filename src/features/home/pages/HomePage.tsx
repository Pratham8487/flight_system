import { Card, Typography, Tag, Button } from "antd";
import { Link } from "react-router-dom";
import Section from "@components/ui/Section";
import { useSiteContent } from "@features/site/hooks/useSiteContent";
import { useItineraries } from "@features/itineraries/hooks/useItineraries";
import ItineraryCard from "@features/itineraries/components/ItineraryCard";

const HomePage = () => {
  const { site } = useSiteContent();
  const { featured } = useItineraries();

  return (
    <div className="section-blur">
      <Section className="pt-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <Tag color="cyan" className="border-none bg-sky-500/20 text-sky-200">
              {site.tagline}
            </Tag>
            <Typography.Title className="text-4xl font-semibold text-white md:text-5xl">
              {site.hero.title}
            </Typography.Title>
            <Typography.Paragraph className="text-lg text-slate-300">
              {site.hero.subtitle}
            </Typography.Paragraph>
            <div className="flex flex-wrap gap-4">
              <Button type="primary" size="large" className="bg-sky-500">
                <Link to="/itineraries">{site.cta}</Link>
              </Button>
              <Button size="large" className="border-white/20 bg-transparent text-white">
                <Link to="/contact">Talk to a designer</Link>
              </Button>
            </div>
            <div className="grid gap-4 pt-4 sm:grid-cols-3">
              {site.hero.stats.map((stat) => (
                <Card key={stat.label} className="border-white/10 bg-slate-900 text-center">
                  <Typography.Title level={3} className="text-white">
                    {stat.value}
                  </Typography.Title>
                  <Typography.Text className="text-xs uppercase tracking-[0.3em] text-slate-400">
                    {stat.label}
                  </Typography.Text>
                </Card>
              ))}
            </div>
          </div>
          <Card className="overflow-hidden border-white/10 bg-slate-900">
            <img
              src={site.hero.image}
              alt="Hero travel"
              className="h-full w-full rounded-xl object-cover"
              loading="lazy"
            />
          </Card>
        </div>
      </Section>

      <Section title="Highlights" subtitle="Premium experiences crafted with care">
        <div className="grid gap-6 md:grid-cols-3">
          {site.highlights.map((highlight) => (
            <Card
              key={highlight.title}
              className="border-white/10 bg-slate-900 text-slate-200 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/40"
            >
              <Typography.Title level={4} className="text-white">
                {highlight.title}
              </Typography.Title>
              <Typography.Paragraph className="text-sm text-slate-300">
                {highlight.description}
              </Typography.Paragraph>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Featured" subtitle="Signature itineraries loved by travelers">
        <div className="grid gap-6 lg:grid-cols-3">
          {featured.map((itinerary) => (
            <ItineraryCard key={itinerary.id} itinerary={itinerary} />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default HomePage;
