interface CaseStudy_ES {
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

  "acf.case_study_image": Image;
  "acf.case_study_description": string;
  "acf.case_study_option": string;

  // based on case_study_option, case_study_attachment and case_study_link may or may not exist
  "acf.case_study_link"?: string;
  "acf.case_study_attachment"?: Attachment;
  "acf.resource_tags": Term[];
}

