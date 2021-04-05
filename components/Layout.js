import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function Layout({ children, className }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="keyworld"
          content="react, nextjs, javascript, nodejs, node, js, es6, programowanie, frontend, fullstack"
        />
        <meta
          property="og:site_name"
          content="Frontreview - miejsce informacji o Frontendzie"
          key="ogsitename"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pl_PL" />
      </Head>
      <div className="overflow-hidden bg-gray-100 font-custom dark:bg-dark-900">
        <Navbar />
        <div className={className}>{children}</div>
        <Footer />
      </div>
    </>
  );
}
