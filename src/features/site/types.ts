export type NavigationItem = {
  label: string;
  path: string;
};

export type SiteStat = {
  label: string;
  value: string;
};

export type SiteHighlight = {
  title: string;
  description: string;
};

export type SiteHero = {
  title: string;
  subtitle: string;
  image: string;
  stats: SiteStat[];
};

export type SiteContent = {
  name: string;
  tagline: string;
  cta: string;
  navigation: NavigationItem[];
  hero: SiteHero;
  highlights: SiteHighlight[];
};

export type AboutValue = {
  title: string;
  description: string;
};

export type AboutContent = {
  title: string;
  story: string;
  values: AboutValue[];
};

export type ContactOffice = {
  city: string;
  address: string;
  phone: string;
  email: string;
};

export type ContactContent = {
  title: string;
  subtitle: string;
  offices: ContactOffice[];
};

export type FooterCompany = {
  name: string;
  description: string;
  address: string;
  phone: string;
  email: string;
};

export type FooterCard = {
  title: string;
  detail: string;
};

export type FooterContent = {
  company: FooterCompany;
  cards: FooterCard[];
};

export type SiteData = {
  site: SiteContent;
  about: AboutContent;
  contact: ContactContent;
  itineraries: unknown[];
  footer: FooterContent;
};
