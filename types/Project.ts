import { PortableTextBlock } from "sanity";

export type Image = {
  imageUrl: string;
  alt: string;
};

export type Project = {
  _id: string;
  _createdAt: Date;
  title: string;
  slug: string;
  description: string;
  date: string;
  github: string;
  livebuild: string;
  clientoverview: PortableTextBlock[];
  projectoverview: PortableTextBlock[];
  tools: PortableTextBlock[];
  images: Image[];
};
