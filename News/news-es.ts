interface News_ES {
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

  "acf.news_image": Image;
  "acf.news_option": string;
  //   based on news_option, authored_details and article_link may or may not exist
  "acf.authored_details"?: string;
  "acf.news_link"?: string;

  "acf.resource_tags": Term[];
}
