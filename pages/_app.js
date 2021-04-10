import "styles/globals.css";
import Layout from "@/components/Layout";
import { Fragment } from "react";
import { ThemeProvider } from "next-themes";

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Fragment>
          <Component {...pageProps} />
        </Fragment>
      </Layout>
    </ThemeProvider>
  );
}
