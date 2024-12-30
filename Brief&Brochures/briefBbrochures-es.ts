interface BriefBrochures_ES {
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

  "acf.resource_tags": Term[];
}
