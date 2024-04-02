type Category = {
  attributes: {
    name: string;
    image: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    description: string;
    slug: string;
  };
};

export default Category;
