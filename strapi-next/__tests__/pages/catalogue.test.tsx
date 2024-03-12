import "@testing-library/jest-dom";
import Catalogue, { getServerSideProps } from "../../pages/catalogue";
import fetchMock from "jest-fetch-mock";
import { render, screen } from "@testing-library/react";
import { Product } from "../../types/product";
beforeEach(() => {
  fetchMock.enableMocks();
});
afterEach(() => {
  fetchMock.resetMocks();
  jest.restoreAllMocks();
});
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

const mockProducts: Product[] = [
  {
    id: 1,
    attributes: {
      name: "Product 1",
      description: [
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              text: "Description of Product 1",
            },
          ],
        },
      ],
      createdAt: "2022-01-01",
      updatedAt: "2022-01-02",
      publishedAt: "2022-01-03",
    },
  },
  {
    id: 2,
    attributes: {
      name: "Product 2",
      description: [
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              text: "Description of Product 2",
            },
          ],
        },
      ],
      createdAt: "2022-02-01",
      updatedAt: "2022-02-02",
      publishedAt: "2022-02-03",
    },
  },
];

describe("Catalogue page", () => {
  it("renders Catalogue page correctly", () => {
    render(<Catalogue products={mockProducts} />);
    const heading = screen.getByRole("heading", { name: "Catalogue" });
    const products = screen.getAllByRole("listitem");
    expect(products).toHaveLength(mockProducts.length);
    expect(heading).toBeInTheDocument();
  });
  it("displays 'no products found' message if products are null", () => {
    render(<Catalogue products={null} />);
    const noProducts = screen.getByText("No products found");
    expect(noProducts).toBeInTheDocument();
  });
});

describe("getServerSideProps", () => {
  it("fetches page data and returns props", async () => {
    fetchMock.mockResponse(JSON.stringify({ data: mockProducts }));
    const { props } = await getServerSideProps();
    expect(fetchMock).toHaveBeenCalledWith(
      "http://localhost:1337/api/products"
    );
    expect(props.products).toEqual(mockProducts);
  });

  it("handles fetch error", async () => {
    fetchMock.mockReject(new Error("Failed to fetch products"));
    await expect(getServerSideProps()).rejects.toThrow(
      "Failed to fetch products"
    );
  });
});
