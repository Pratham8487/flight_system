import { useMemo } from "react";
import { getAboutContent, getContactContent, getFooterContent, getSiteContent } from "@features/site/services/siteContentService";

export const useSiteContent = () => {
  const site = useMemo(() => getSiteContent(), []);
  const about = useMemo(() => getAboutContent(), []);
  const contact = useMemo(() => getContactContent(), []);
  const footer = useMemo(() => getFooterContent(), []);

  return { site, about, contact, footer };
};
