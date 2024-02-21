import type { Schema, Attribute } from '@strapi/strapi';

export interface CategoriesHomePageCategoriesHomePage extends Schema.Component {
  collectionName: 'components_categories_home_page_categories_home_pages';
  info: {
    displayName: 'categoriesHomePage';
    icon: 'apps';
  };
  attributes: {
    product_category: Attribute.Relation<
      'categories-home-page.categories-home-page',
      'oneToOne',
      'api::product-category.product-category'
    >;
    categoryImg: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'categories-home-page.categories-home-page': CategoriesHomePageCategoriesHomePage;
    }
  }
}
