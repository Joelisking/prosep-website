export interface Team {
  name: string;
  role: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: string | any; // string for URL, any for Sanity image object
}

export interface Product {
  id: string;
  name: string;
  category: string;
  imageSrc: string;
  imageAlt: string;
}
