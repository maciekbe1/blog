import "../styles/globals.css";
import Layout from "../components/Layout";
import { Fragment } from "react";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout className="container mx-auto xs:px-2">
      <Fragment>
        <Component {...pageProps} />
      </Fragment>
    </Layout>
  );
}
