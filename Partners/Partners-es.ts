interface Partners_ES {
  id: number;
  date: string;
  modified: string;
  slug: string;

  "title.rendered": string;
  "content.rendered": string;

  "acf.url": string;
  "acf.logo": Image | boolean;
}
