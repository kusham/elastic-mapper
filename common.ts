interface _links {
  self: {
    href: string;
    targetHints?: {
      allow: string[];
    };
  }[];
  collection: {
    href: string;
  }[];
  about: {
    href: string;
  }[];
  wp_attachment: {
    href: string;
  }[];
  wp_term: {
    taxonomy: string;
    embeddable: boolean;
    href: string;
  }[];
  curies: {
    name: string;
    href: string;
    templated: boolean;
  }[];
}

interface Attachment {
  id: number;
  title: string;
  filename: string;
  filesize: number;
  url: string;
  alt: string;
  caption: string;
  icon: string;
}

interface Image {
  id: number;
  title: string;
  filename: string;
  filesize: number;
  url: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  sizes: {
    thumbnail: string;
    thumbnail_width: number;
    thumbnail_height: number;
    medium: string;
    medium_width: number;
    medium_height: number;
    medium_large: string;
    medium_large_width: number;
    medium_large_height: number;
    large: string;
    large_width: number;
    large_height: number;
    "1536x1536": string;
    "1536x1536_width": number;
    "1536x1536_height": number;
    "2048x2048": string;
    "2048x2048_width": number;
    "2048x2048_height": number;
  };
}

interface Term {
  term_id: number;
  name: string;
  slug: string;
  taxonomy: string;
}
