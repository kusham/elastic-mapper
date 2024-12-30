interface Programs {
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
    program_tag: number[];
    program_type: number[];
    user_relevance: number[];
    class_list: string[];
    acf: {
      program_type: boolean;
      program_status: string;
      intake: string;
      applications_closing: string;
      commencement: string;
      organiser: {
        organiser_name: string;
        organiser_logo: Image;
        organiser_url: string;
      };
      duration_of_the_program: string;
      main_cta_type: string;
      program_details: string;
      contact_organiser: {
        person_name: string;
        person_profile_image: Image;
        person_role: string;
        person_email: string;
        person_phone_number: string;
        contact_page_url: string;
      };
      tags: false;
      user_relevance: Term[];
      banner_image: Image;
      associated_initiative: false;
      partners: false;
      other_programs: false;
    };
    _links: _links;
  }
  
  