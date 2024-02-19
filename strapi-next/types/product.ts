export interface Product {
  id: number;
  attributes: {
    name: string;
    description: Array<{
      type: string;
      children: Array<{
        type: string;
        text: string;
      }>;
    }>;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}
