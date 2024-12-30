interface Event {
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
  event_format: number[];
  event_tag: number[];
  event_type: number[];
  user_relevance: number[];
  class_list: string[];
  acf: {
    banner_image: Image;
    event_type: Term;
    user_relevance: Term[];
    organiser: {
      organiser_name: string;
      organiser_logo: Image;
      organiser_url: string;
    };
    maximum_enrollment: string;
    start_date_time: string;
    end_date_time: string;
    event_format: Term;
    event_mode: string;
    main_cta_type: string;
    main_cta_destination_url: string;
    details: string;
    objectives: { objective: string }[];
    eligibilities: { eligibility: string }[];
    benefits: { title: string; description: string }[];
    agendas: {
      agenda_time: string;
      agenda_title: string;
      facilitator: {
        person_name: string;
        profile_image: Image;
        person_role: string;
      };
      speaker: {
        person_name: string;
        profile_image: Image;
        person_role: string;
      };
    }[];
    sponsorsID: Sponsors[];
    partners: Partners[];
  };
  _links: _links;
}



interface Sponsors {
  ID: number;
  post_author: string;
  post_date: string;
  post_date_gmt: string;
  post_content: string;
  post_title: string;
  post_excerpt: string;
  post_status: string;
  comment_status: string;
  ping_status: string;
  post_password: string;
  post_name: string;
  to_ping: string;
  pinged: string;
  post_modified: string;
  post_modified_gmt: string;
  post_content_filtered: string;
  post_parent: number;
  guid: string;
  menu_order: number;
  post_type: string;
  post_mime_type: string;
  comment_count: string;
  filter: string;
  acf: {
    logo: boolean;
    url: string;
  };
}

interface Partners {
  ID: number;
  post_author: string;
  post_date: string;
  post_date_gmt: string;
  post_content: string;
  post_title: string;
  post_excerpt: string;
  post_status: string;
  comment_status: string;
  ping_status: string;
  post_password: string;
  post_name: string;
  to_ping: string;
  pinged: string;
  post_modified: string;
  post_modified_gmt: string;
  post_content_filtered: string;
  post_parent: number;
  guid: string;
  menu_order: number;
  post_type: string;
  post_mime_type: string;
  comment_count: string;
  filter: string;
  acf: {
    logo: Image;
    url: string;
  };
}
