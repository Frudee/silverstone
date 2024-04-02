type Product = {
  attributes: {
    characteristics: {
      type: string;
      format: string;
      children: {
        type: string;
        children: {
          type: string;
          text: string;
        }[];
      }[];
    }[];
    description: string;
    slug: string;
    product_categories: {
      data: {
        attributes: {
          name: string;
          slug: string;
        };
      }[];
    };
    image: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    name: string;
  };
  id: string;
};

export default Product;
