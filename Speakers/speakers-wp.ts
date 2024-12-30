
  
  interface Speakers {
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
    class_list: string[];
    acf: {
      profile_picture: boolean;
      profession: string;
    };
    _links: _links;
  }
  