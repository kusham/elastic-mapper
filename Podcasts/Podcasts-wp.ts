interface Podcasts {
  id: number;
  date: string;
  date_gmt: string;
  guid: {
    rendered: string;
  };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  featured_media: number;
  template: string;
  meta: {
    _acf_changed: boolean;
    own_group: string;
  };
  resourceCategory: number[];
  resourceSector: number[];
  resourceTag: number[];
  resourceTopic: number[];
  userRelevance: number[];
  classList: string[];
  acf: {
    resource_description: string;
    resource_category: Term[];
    user_relevance: Term[];
    sector: Term[];
    topic: Term[];

    podcast_option: string;

    video_link: string;
    video_series: {
      video_title: string;
      video_description: string;
      video_link: string;
    }[];

    podcast_details: string;

    resource_tags: Term[];
  };
  _links: _links;
}
