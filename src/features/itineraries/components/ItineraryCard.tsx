import { Card, Tag, Typography, Button } from "antd";
import { useNavigate } from "react-router-dom";
import type { Itinerary } from "@features/itineraries/types";

const ItineraryCard = ({ itinerary }: { itinerary: Itinerary }) => {
  const navigate = useNavigate();

  return (
    <Card
      hoverable
      className="group overflow-hidden border-white/10 bg-slate-900 text-slate-100 transition-all duration-300"
      cover={
        <div className="relative h-56 w-full overflow-hidden">
          <img
            src={itinerary.image}
            alt={itinerary.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <Tag color="cyan" className="border-none bg-sky-500/20 text-sky-200">
              {itinerary.category}
            </Tag>
          </div>
        </div>
      }
    >
      <div className="space-y-3">
        <div>
          <Typography.Title level={4} className="mb-1 text-white">
            {itinerary.title}
          </Typography.Title>
          <Typography.Text className="text-sm text-slate-300">{itinerary.location}</Typography.Text>
        </div>
        <Typography.Paragraph className="text-sm text-slate-300">
          {itinerary.overview}
        </Typography.Paragraph>
        <div className="flex flex-wrap gap-2">
          {itinerary.tags.map((tag) => (
            <Tag key={tag} className="border-white/10 bg-slate-800 text-slate-200">
              {tag}
            </Tag>
          ))}
        </div>
        <div className="flex items-center justify-between pt-2">
          <div>
            <Typography.Text className="block text-xs uppercase tracking-[0.2em] text-slate-400">
              {itinerary.duration}
            </Typography.Text>
            <Typography.Text className="text-lg font-semibold text-white">
              {itinerary.price}
            </Typography.Text>
          </div>
          <Button type="primary" className="bg-sky-500" onClick={() => navigate(`/itineraries/${itinerary.id}`)}>
            View details
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ItineraryCard;
