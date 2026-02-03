import { Button, Card, Form, Input, Typography } from "antd";
import Section from "@components/ui/Section";
import { useSiteContent } from "@features/site/hooks/useSiteContent";

const ContactPage = () => {
  const { contact } = useSiteContent();

  return (
    <Section title="Contact" subtitle={contact.title}>
      <Typography.Paragraph className="max-w-2xl text-slate-300">
        {contact.subtitle}
      </Typography.Paragraph>
      <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Card className="border-white/10 bg-slate-900">
          <Form layout="vertical" className="text-slate-200">
            <Form.Item label={<span className="text-slate-200">Full name</span>} name="name">
              <Input placeholder="Enter your name" />
            </Form.Item>
            <Form.Item label={<span className="text-slate-200">Email</span>} name="email">
              <Input placeholder="you@example.com" type="email" />
            </Form.Item>
            <Form.Item label={<span className="text-slate-200">Preferred itinerary</span>} name="itinerary">
              <Input placeholder="Tell us what you have in mind" />
            </Form.Item>
            <Form.Item label={<span className="text-slate-200">Notes</span>} name="notes">
              <Input.TextArea rows={4} placeholder="Dates, group size, special requests" />
            </Form.Item>
            <Button type="primary" size="large" className="bg-sky-500">
              Send request
            </Button>
          </Form>
        </Card>
        <div className="space-y-4">
          {contact.offices.map((office) => (
            <Card key={office.city} className="border-white/10 bg-slate-900 text-slate-200">
              <Typography.Title level={4} className="text-white">
                {office.city}
              </Typography.Title>
              <Typography.Text className="block text-sm text-slate-300">
                {office.address}
              </Typography.Text>
              <Typography.Text className="block text-sm text-slate-300">
                {office.phone}
              </Typography.Text>
              <Typography.Text className="block text-sm text-slate-300">
                {office.email}
              </Typography.Text>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ContactPage;
