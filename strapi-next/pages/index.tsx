import Header from "../components/layout/Header";

const IndexPage: React.FC = () => {
  return (
    <div>
      <Header />
      <h1>Welcome to Our Next.js App</h1>
      <p>
        This is the homepage of our Next.js application. You can navigate to
        other pages using the links in the navigation menu.
      </p>
    </div>
  );
};

export default IndexPage;
