interface Researches_ES {
  id: number;
  date: string;
  modified: string;
  slug: string;

  "title.rendered": string;
  "content.rendered": string;

  "acf.resource_description": string;
  "acf.resource_category": Term[];
  "acf.user_relevance": Term[];
  "acf.sector": Term[];
  "acf.topic": Term[];

  "acf.research_image": Image;
  "acf.research_description": string;
  "acf.research_option": string;

  // based on research_option, research_attachment and research_link may or may not exist
  "acf.research_link"?: string;
  "acf.research_attachment"?: Attachment;
  "acf.resource_tags": Term[];
}
