export type Product = {
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
