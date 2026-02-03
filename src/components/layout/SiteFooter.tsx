import { Card, Divider, Layout, Typography } from "antd";
import { useSiteContent } from "@features/site/hooks/useSiteContent";

const { Footer } = Layout;

const SiteFooter = () => {
  const { footer } = useSiteContent();

  return (
    <Footer className="border-t border-white/10 bg-slate-950 px-6 py-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-4">
            <Typography.Title level={4} className="text-white">
              {footer.company.name}
            </Typography.Title>
            <Typography.Paragraph className="text-slate-300">
              {footer.company.description}
            </Typography.Paragraph>
            <div className="space-y-2 text-sm text-slate-300">
              <p>{footer.company.address}</p>
              <p>{footer.company.phone}</p>
              <p>{footer.company.email}</p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {footer.cards.map((card) => (
              <Card
                key={card.title}
                className="border-white/10 bg-slate-900 text-slate-200"
                bordered
              >
                <Typography.Text className="block text-sm font-semibold text-white">
                  {card.title}
                </Typography.Text>
                <Typography.Text className="text-xs text-slate-300">{card.detail}</Typography.Text>
              </Card>
            ))}
          </div>
        </div>
        <Divider className="border-white/10" />
        <Typography.Text className="text-xs text-slate-400">
          © 2024 Azure Trails Tourism. All rights reserved.
        </Typography.Text>
      </div>
    </Footer>
  );
};

export default SiteFooter;
