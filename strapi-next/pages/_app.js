import "../styles/globals.css";
import "../css/main.css";
import Layout from "../components/layout/Layout";
import React from "react";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
