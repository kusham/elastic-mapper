interface Initiative {
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
  parent: number;
  template: string;
  meta: {
    _acf_changed: boolean;
    own_group: string;
  };
  initiative_tag: number[];
  class_list: string[];
  acf: {
    banner_image: Image;
    program_type: Term[];
    user_relevance: Term[];
    main_cta_destination_url: string;
    main_cta_destination_label: string;
    timeline_sub_title: string;
    timeline_summary: string;
    timelines: { heading: string; description: string }[];
    featured_sub_title: string;
    featured_program: {
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
        banner_image: Image;
        program_type: Term;
        intake: string;
        applications_closing: string;
        commencement: string;
        organiser: {
          organiser_name: string;
          organiser_logo: Image;
          organiser_url: string;
        };
        associated_initiative: boolean;
        duration_of_the_program: string;
        main_cta_type: string;
        main_cta_destination_url: string;
        program_details: string;
        user_relevance: boolean;
        eligibilities: Array<{ eligibility: string }>;
        benefits: Array<{ title: string; description: string }>;
        program_structure: Array<{
          start_date: string;
          end_date: string;
          title: string;
          description: string;
          facilitator: {
            person_name: string;
            profile_image: boolean;
            person_role: string;
          };
          speaker: {
            person_name: string;
            profile_image: Image;
            person_role: string;
          };
        }>;
        partners: Array<{
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
        }>;
        contact_organiser: {
          person_name: string;
          person_profile_image: Image;
        };
      };
    }[];
    featured_cta_label: string;
    featured_cta_link: string;
    benefits_sub_title: string;
    benefit_description: string;
    benefits: { benefit: string }[];
    benefit_image: Image;
    past_programs_summary: string;
    tags: Term[];
    past_programs: boolean;
  };
  _links: _links;
}

