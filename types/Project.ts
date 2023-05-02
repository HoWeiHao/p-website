import { PortableTextBlock } from "sanity";

export type Project = {
  _id: string;
  createdAt: Date;
  p_type: string;
  name: string;
  slug: string;
  image: string;
  url: string;
  content: PortableTextBlock[];
}
