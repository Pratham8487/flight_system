import { useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Drawer, Layout, Menu, Typography } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useSiteContent } from "@features/site/hooks/useSiteContent";

const { Header } = Layout;

const SiteHeader = () => {
  const { site } = useSiteContent();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const menuItems = useMemo(
    () =>
      site.navigation.map((item) => ({
        key: item.path,
        label: <Link to={item.path}>{item.label}</Link>
      })),
    [site.navigation]
  );

  return (
    <Header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 px-6 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-sky-400 via-teal-300 to-emerald-300" />
          <div>
            <Typography.Text className="block text-sm font-semibold text-white">
              {site.name}
            </Typography.Text>
            <Typography.Text className="text-xs text-slate-300">{site.tagline}</Typography.Text>
          </div>
        </Link>
        <div className="hidden items-center gap-4 lg:flex">
          <Menu
            mode="horizontal"
            selectedKeys={[location.pathname]}
            items={menuItems}
            className="bg-transparent text-slate-200"
          />
          <Button type="primary" className="bg-sky-500" href="/itineraries">
            {site.cta}
          </Button>
        </div>
        <Button
          type="text"
          icon={<MenuOutlined />}
          className="text-slate-200 lg:hidden"
          onClick={() => setOpen(true)}
        />
        <Drawer
          open={open}
          onClose={() => setOpen(false)}
          placement="right"
          className="lg:hidden"
          title={site.name}
        >
          <Menu
            mode="vertical"
            selectedKeys={[location.pathname]}
            items={menuItems}
            className="border-0"
            onClick={() => setOpen(false)}
          />
          <div className="mt-4">
            <Button type="primary" block className="bg-sky-500" href="/itineraries">
              {site.cta}
            </Button>
          </div>
        </Drawer>
      </div>
    </Header>
  );
};

export default SiteHeader;
