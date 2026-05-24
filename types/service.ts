// types/service.ts

export interface ServiceSection {
  title: React.ReactNode;
  description: React.ReactNode;
  image: string;
  reverse?: boolean;
}

export interface ServiceType {
  id: number;
  title: string;
  slug: string;
  description: React.ReactNode;
  image: string;
  href?: string;
  downloads?: string | number;
  countries?: string | number;
  awards?: string | number;
  downloadsLabel?: string;
  countriesLabel?: string;
  awardsLabel?: string;
  sections?: ServiceSection[];
}