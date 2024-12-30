interface PressRelease {
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

  "acf.press_release_image": Image;
  "acf.press_release_option": string;
  
  // based on press_release_option, authored_details and press_release_link may or may not exist
  "acf.authored_details"?: string;
  "acf.press_release_link"?: string;

  "acf.resource_tags": Term[];
}
