interface Events_ES {
  id: number;
  date: string;
  modified: string;
  slug: string;

  "title.rendered": string;
  "content.rendered": string;

  "acf.banner_image": Image;
  "acf.event_type": Term;
  "acf.user_relevance": Term[];

  "acf.organiser.organiser_name": string;
  "acf.organiser.organiser_logo": string;
  "acf.organiser.organiser_url": string;

  "acf.maximum_enrollment"?: string;
  "acf.start_date_time": string;
  "acf.end_date_time": string;
  "acf.event_format": Term;
  "acf.event_mode": string;
  "acf.main_cta_type": string;
  "acf.main_cta_destination_url"?: string;

  "acf.details": string;
  "acf.objectives"?: { objective: string }[];
  "acf.eligibilities"?: { eligibility: string }[];
  "acf.benefits"?: { title: string; description: string }[];

  "acf.agendas": {
    agenda_time: string;
    agenda_title: string;
    agenda_description: string;

    "facilitator.person_name": string;
    "facilitator.profile_image": Image;
    "facilitator.person_role": string;

    "speaker.person_name": string;
    "speaker.profile_image": Image;
    "speaker.person_role": string;
  }[];

  "acf.sponsors": {
    ID: number;
    post_date: string;
    post_title: string;

    "acf.logo": Image | boolean;
    "acf.url": string;
  }[];
  "acf.partners": {
    ID: number;
    post_date: string;
    post_title: string;

    "acf.logo": Image | boolean;
    "acf.url": string;
    "acf.partner_url": string;
  }[];

  "acf.contact_organiser.person_name": string;
  "acf.contact_organiser.person_profile_image": Image;
  "acf.contact_organiser.person_role": string;
  "acf.contact_organiser.person_email": string;
  "acf.contact_organiser.person_phone": string;
  "acf.contact_organiser.contact_page_url": string;

  "acf.enable_recap": boolean;
  "acf.images"?: {
    recap_image: Image | boolean;
  }[];
  "acf.recap_description"?: string;
  "acf.recap_points"?: { recap_point: string }[];
  "acf.faqs": {
    question: string;
    answer: string;
  }[];

  "acf.tags": Term[];

  "acf.other_events": Events_ES[];
}
