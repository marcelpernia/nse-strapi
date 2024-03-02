import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsButton extends Schema.Component {
  collectionName: 'components_components_buttons';
  info: {
    displayName: 'button';
    description: '';
  };
  attributes: {
    label: Attribute.String & Attribute.DefaultTo<'Saber m\u00E1s'>;
    url: Attribute.String;
    new_tab: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

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
      'components.button': ComponentsButton;
      'videos.video': VideosVideo;
    }
  }
}
