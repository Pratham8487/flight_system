import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { Button, Card, Divider, Result, Tag, Typography } from "antd";
import Section from "@components/ui/Section";
import { getItineraryById } from "@features/itineraries/services/itineraryService";

const ItineraryDetailPage = () => {
  const { slug } = useParams();
  const itinerary = useMemo(() => (slug ? getItineraryById(slug) : undefined), [slug]);

  if (!itinerary) {
    return (
      <Section>
        <Result
          status="404"
          title="Itinerary not found"
          subTitle="The journey you are looking for does not exist yet."
          extra={
            <Button type="primary" className="bg-sky-500">
              <Link to="/itineraries">Back to itineraries</Link>
            </Button>
          }
        />
      </Section>
    );
  }

  return (
    <Section>
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <Tag color="cyan" className="border-none bg-sky-500/20 text-sky-200">
            {itinerary.category}
          </Tag>
          <Typography.Title className="mt-4 text-4xl font-semibold text-white">
            {itinerary.title}
          </Typography.Title>
          <Typography.Text className="text-slate-300">{itinerary.location}</Typography.Text>
          <Typography.Paragraph className="mt-4 text-lg text-slate-300">
            {itinerary.overview}
          </Typography.Paragraph>
          <div className="mt-6 flex flex-wrap gap-3">
            {itinerary.tags.map((tag) => (
              <Tag key={tag} className="border-white/10 bg-slate-800 text-slate-200">
                {tag}
              </Tag>
            ))}
          </div>
          <Divider className="border-white/10" />
          <div className="flex flex-wrap gap-6">
            <div>
              <Typography.Text className="text-xs uppercase tracking-[0.3em] text-slate-400">
                Duration
              </Typography.Text>
              <Typography.Title level={4} className="text-white">
                {itinerary.duration}
              </Typography.Title>
            </div>
            <div>
              <Typography.Text className="text-xs uppercase tracking-[0.3em] text-slate-400">
                Investment
              </Typography.Text>
              <Typography.Title level={4} className="text-white">
                {itinerary.price}
              </Typography.Title>
            </div>
          </div>
          <div className="mt-8">
            <Typography.Title level={4} className="text-white">
              Jump to day
            </Typography.Title>
            <div className="mt-3 flex flex-wrap gap-2">
              {itinerary.days.map((day) => (
                <Button
                  key={day.day}
                  className="border-white/10 bg-slate-900 text-slate-200"
                  onClick={() => {
                    const element = document.getElementById(`day-${day.day}`);
                    element?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                >
                  Day {day.day}
                </Button>
              ))}
            </div>
          </div>
        </div>
        <Card className="overflow-hidden border-white/10 bg-slate-900">
          <img
            src={itinerary.image}
            alt={itinerary.title}
            className="h-full w-full rounded-xl object-cover"
            loading="lazy"
          />
        </Card>
      </div>

      <Divider className="border-white/10" />

      <div className="space-y-6">
        {itinerary.days.map((day) => (
          <Card
            key={day.day}
            id={`day-${day.day}`}
            className="border-white/10 bg-slate-900 text-slate-200 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <Typography.Text className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  Day {day.day}
                </Typography.Text>
                <Typography.Title level={4} className="text-white">
                  {day.title}
                </Typography.Title>
                <Typography.Paragraph className="text-sm text-slate-300">
                  {day.description}
                </Typography.Paragraph>
              </div>
              <div className="flex flex-wrap gap-2">
                {day.highlights.map((highlight) => (
                  <Tag key={highlight} className="border-white/10 bg-slate-800 text-slate-200">
                    {highlight}
                  </Tag>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default ItineraryDetailPage;
