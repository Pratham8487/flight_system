import { Card, Typography } from "antd";
import Section from "@components/ui/Section";
import { useSiteContent } from "@features/site/hooks/useSiteContent";

const AboutPage = () => {
  const { about } = useSiteContent();

  return (
    <Section title="About" subtitle={about.title}>
      <Typography.Paragraph className="max-w-3xl text-lg text-slate-300">
        {about.story}
      </Typography.Paragraph>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {about.values.map((value) => (
          <Card
            key={value.title}
            className="border-white/10 bg-slate-900 text-slate-200 transition-all duration-300 hover:-translate-y-1"
          >
            <Typography.Title level={4} className="text-white">
              {value.title}
            </Typography.Title>
            <Typography.Paragraph className="text-sm text-slate-300">
              {value.description}
            </Typography.Paragraph>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default AboutPage;
