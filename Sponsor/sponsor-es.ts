interface Sponsors_ES {
  id: number;
  date: string;
  modified: string;
  slug: string;

  "title.rendered": string;

  "acf.url": string;
  "acf.logo": Image | boolean;
}
