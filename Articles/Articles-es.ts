interface Articles_ES {
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
  "acf.article_image": Image;
  "acf.article_description": string;
  "acf.article_option": string;

  // based article_option, authored_details and article_link may or may not exist
  "acf.authored_details"?: {
    heading: string;
    description: string;
  }[];
  "acf.article_link"?: string;
  "acf.resource_tags": Term[];
}
