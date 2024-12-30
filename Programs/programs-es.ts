// complete
interface Programs_ES {
  id: number;
  date: string;
  modified: string;
  slug: string;

  "title.rendered": string;
  "content.rendered": string;

  "acf.banner_image": Image;
  "acf.program_type": string;
  "acf.program_status": string;

  "acf.intake"?: string;
  "acf.applications_closing"?: string;
  "acf.commencement"?: string;

  "acf.organiser.organiser_name": string;
  "acf.organiser.organiser_logo": Image;
  "acf.organiser.organiser_url": string;

  
  "acf.duration_of_the_program": string;
  "acf.main_cta_type": string;
  "acf.main_cta_destination_url"?: string;
  
  "acf.user_relevance": Term[];
  
  "acf.program_details": string;
  "acf.eligibilities"?: { eligibility: string }[];
  "acf.benefits"?: { benefit: string }[];

  "acf.program_structure"?: {
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

  "acf.partners"?: {
    ID: number;
    post_title: string;
    "afc.logo": Image;
    "acf.partner_url": string;
    "acf.url": string;
  }[] | boolean;
  
  "acf.contact_organiser.person_name": string;
  "acf.contact_organiser.person_profile_image": Image;
  "acf.contact_organiser.person_role": string;
  "acf.contact_organiser.person_email": string;
  "acf.contact_organiser.person_phone_number": string;
  "acf.contact_organiser.contact_page_url": string;

  "acf.faqs"?: {
    question: string;
    answer: string;
  }[];
  "acf.associated_initiative": boolean | Initative; // Initative need to be defined
  
  "acf.tags"?: Term[];

  "acf.other_programs": Programs_ES[] | boolean;
}


// recap