interface Research {
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
  resource_category: number[];
  resource_sector: number[];
  resource_tag: number[];
  resource_topic: number[];
  user_relevance: number[];

  classList: string[];
  acf: {
    resource_description: string;
    resource_category: Term[];
    user_relevance: Term[];
    sector: Term[];
    topic: Term[];
    research_image: Image;
    research_description: string;
    research_option: string;
    research_attachment: Attachment;
    resource_tags: Term[];
  };
  _links: _links;
}
