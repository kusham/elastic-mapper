interface Podcasts_ES {
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

  "acf.podcast_option": string;
  //   based on podcast_option, video_series and video_link may or may not exist
  "acf.video_series"?: {
    video_title: string;
    video_description: string;
    video_link: string;
  }[];
  "acf.video_link"?: string;

  "acf.resource_tags": Term[];
}
