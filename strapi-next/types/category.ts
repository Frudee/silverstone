type Category = {
  name: string;
  image: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
  description: string;
};

export default Category;
