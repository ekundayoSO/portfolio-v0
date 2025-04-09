export interface Blog {
  id: number;
  documentId: string;
  title: string;
  description: string;
  author: string;
  date: string;
  content: string;
  coverImage: Array<{
    url: string;
    formats: {
      thumbnail: {
        url: string;
      };
      small?: {
        url: string;
      };
      medium?: {
        url: string;
      };
      large?: {
        url: string;
      };
    };
  }>;
}