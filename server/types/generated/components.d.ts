import type { Schema, Struct } from '@strapi/strapi';

export interface ImagesComponentImage extends Struct.ComponentSchema {
  collectionName: 'components_images_component_images';
  info: {
    displayName: 'image';
  };
  attributes: {
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface TextsComponentTexts extends Struct.ComponentSchema {
  collectionName: 'components_texts_component_texts';
  info: {
    displayName: 'texts';
  };
  attributes: {
    description: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'images-component.image': ImagesComponentImage;
      'texts-component.texts': TextsComponentTexts;
    }
  }
}
