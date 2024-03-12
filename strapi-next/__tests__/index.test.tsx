import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import IndexPage from "../pages";
import { getStaticProps } from "../pages/index";
import fetchMock from "jest-fetch-mock";
beforeEach(() => {
  fetchMock.enableMocks();
});

afterEach(() => {
  fetchMock.resetMocks();
});

const mockPageData = {
  id: 1,
  attributes: {
    title: "Test Title",
    titleDesc: "Test Description",
    product_categories: {
      data: [
        {
          id: 1,
          attributes: {
            name: "Category 1",
          },
        },
        {
          id: 2,
          attributes: {
            name: "Category 2",
          },
        },
      ],
    },
  },
};

describe("IndexPage", () => {
  it("renders Index page", () => {
    render(<IndexPage pageData={mockPageData} />);
    const title = screen.getByText("Test Title");
    const description = screen.getByText("Test Description");
    const category1 = screen.getByText("Category 1");
    const category2 = screen.getByText("Category 2");
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(category1).toBeInTheDocument();
    expect(category2).toBeInTheDocument();
  });
  it('renders "Loading..." when pageData is null', () => {
    render(<IndexPage pageData={null} />);
    const loadingMessage = screen.getByText("Loading...");
    expect(loadingMessage).toBeInTheDocument();
  });
});

describe("getStaticProps", () => {
  it("fetches page data and returns props", async () => {
    fetchMock.mockResponse(JSON.stringify({ data: mockPageData }));
    const { props } = await getStaticProps();
    expect(fetchMock).toHaveBeenCalledWith(
      "http://localhost:1337/api/home-page?populate=*"
    );
    expect(props.pageData).toEqual(mockPageData);
  });

  it("handles fetch error", async () => {
    fetchMock.mockReject(new Error("Failed to fetch"));
    await expect(getStaticProps()).rejects.toThrow("Failed to fetch products");
  });
});
