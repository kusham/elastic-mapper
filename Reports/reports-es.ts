interface Reports_ES {
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

  "acf.report_image": Image;
  "acf.report_details": string;
  "acf.report_option": string;

  // based on report_option, report_attachment and report_link may or may not exist
  "acf.report_link"?: string;
  "acf.report_attachment"?: Attachment;
  "acf.resource_tags": Term[];
}
