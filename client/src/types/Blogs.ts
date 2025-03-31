// types.ts
export interface CoverImage {
  data: {
    attributes: {
      url: string;
    };
  };
}

export interface BlogPostAttributes {
  coverImage: CoverImage;
  title: string;
  description: string;
  author: string;
  date: string;
  contents: (TextContent | ImageContent)[];
}

export interface BlogPost {
  id: string;
  attributes: BlogPostAttributes;
}

export interface TextContent {
  __typename: 'ComponentContentText';
  description: string;
}

export interface ImageContent {
  __typename: 'ComponentContentImage';
  images: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
}