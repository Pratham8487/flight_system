import type { PropsWithChildren } from "react";
import { Layout } from "antd";
import SiteHeader from "@components/layout/SiteHeader";
import SiteFooter from "@components/layout/SiteFooter";

const PageLayout = ({ children }: PropsWithChildren) => {
  return (
    <Layout className="min-h-screen bg-slate-950 text-slate-100">
      <SiteHeader />
      <Layout.Content className="flex-1">{children}</Layout.Content>
      <SiteFooter />
    </Layout>
  );
};

export default PageLayout;
