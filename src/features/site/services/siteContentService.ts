import siteContent from "@data/siteContent.json";
import type { SiteContent, AboutContent, ContactContent, FooterContent } from "@features/site/types";

const content = siteContent as {
  site: SiteContent;
  about: AboutContent;
  contact: ContactContent;
  footer: FooterContent;
};

export const getSiteContent = () => content.site;

export const getAboutContent = () => content.about;

export const getContactContent = () => content.contact;

export const getFooterContent = () => content.footer;
