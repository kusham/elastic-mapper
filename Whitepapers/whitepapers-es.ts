interface Whitepapers_ES {
  id: number;
  date: string;
  modified: string;
  slug: string;

  "title.rendered": string;

  "acf.resource_description": string;
  "acf.resource_category": Term[];
  "acf.user_relevance": Term[];
  "acf.sector": Term[];
  "acf.topic": Term[];

  "acf.whitepaper_image": Image;
  "acf.whitepaper_description": string;
  "acf.whitepaper_option": string;
  "acf.whitepaper_link": string;
  "acf.whitepaper_attachment": Attachment;

  "acf.resource_tags": Term[];
}
