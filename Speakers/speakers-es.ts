interface Speakers_ES {
  id: number;
  date: string;
  modified: string;
  slug: string;

  "title.rendered": string;
  "content.rendered": string;
  "acf.profile_picture": Image | boolean;
  "acf.profession": string;
}
