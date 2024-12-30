interface Initiative_ES {
  id: number;
  date: string;
  modified: string;
  slug: string;
  "title.rendered": string;

  "acf.banner_image": Image;
  "acf.program_type": Term[];
  "acf.user_relevance": Term[];

  "acf.main_cta_destination_url"?: string;
  "acf.main_cta_destination_label": string;

  "acf.timeline_sub_title": string;
  "acf.timeline_summary": string;
  "acf.timelines"?: { heading: string; description: string }[];

  "acf.featured_sub_title": string;

  "acf.featured_program"?: {
    ID: number;
    post_date: string;
    post_title: string;
    post_modified: string;

    "acf.banner_image": Image;
    "acf.program_type": Term;
    "acf.program_status": string;

    "acf.intake": string;
    "acf.applications_closing": string;
    "acf.commencement": string;
    "acf.organiser.organiser_name": string;
    "acf.organiser.organiser_logo": Image;
    "acf.organiser.organiser_url": string;

    "acf.associated_initiative.ID": number;

    "acf.duration_of_the_program": string;
    "acf.main_cta_type": string;
    "acf.main_cta_destination_url"?: string;

    "acf.program_details": string;
    "acf.user_relevance": boolean | string;

    "acf.eligibilities": { eligibility: string }[];
    "acf.benefits": { title: string; description: string }[];

    "acf.program_structure": {
      start_date: string;
      end_date: string;
      title: string;
      description: string;

      "facilitator.person_name": string;
      "facilitator.profile_image": Image;
      "facilitator.person_role": string;

      "speaker.person_name": string;
      "speaker.profile_image": Image;
      "speaker.person_role": string;
    }[];

    "acf.partners": {
      ID: number;
      post_title: string;
    }[];

    "acf.contact_organiser.person_name": string;
    "acf.contact_organiser.person_profile_image": Image;
    "acf.contact_organiser.person_role": string;
    "acf.contact_organiser.person_email": string;
    "acf.contact_organiser.person_phone_number": string;
    "acf.contact_organiser.contact_page_url": string;

    "acf.faqs": {
      question: string;
      answer: string;
    }[];
    "acf.tags": Term[];

    "acf.other_programs": {
      ID: number;
      post_title: string;
    }[];
  }[];

  "acf.featured_cta_label": string;
  "acf.featured_cta_link"?: string;

  "acf.benefits_sub_title": string;
  "acf.benefit_description": string;
  "acf.benefits": { benefit: string }[];
  "acf.benefit_image": Image;

  "acf.past_programs_summary"?: string;
  "acf.past_programs": Programs_ES[];

  "acf.tags": Term[];
}

// target audience

// enable_recap: true,
// images: [
//             {
//               "recap_image": false
//             },
//             {
//               "recap_image": false
//             }
//           ],
// recap_description: string
// recap_points: []
