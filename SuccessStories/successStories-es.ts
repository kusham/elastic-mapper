interface SuccessStories_ES {
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

  "acf.success_story_image": Image;
  "acf.success_story_option": string;
  //   based on success_story_option, authored_details and success_story_link may or may not exist
  "acf.authored_details"?: {
    heading: string;
    description: string;
  }[];
  "acf.success_story_link"?: string;

  "acf.resource_tags": Term[];
}
