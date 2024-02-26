import type { Schema, Attribute } from '@strapi/strapi';

export interface VideosVideo extends Schema.Component {
  collectionName: 'components_videos_videos';
  info: {
    displayName: 'Video';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'videos.video': VideosVideo;
    }
  }
}
