import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function Layout({ children, className }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="robots" content="noodp" />
        <meta
          name="keyworld"
          content="react, nextjs, javascript, nodejs, node, js, es6, programowanie, frontend, fullstack, typescript, blog"
        />
        <meta
          property="og:site_name"
          content="Frontreview - miejsce informacji o Frontendzie"
          key="ogsitename"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pl_PL" />
        <meta
          name="google-site-verification"
          content="Kf4IUf_oTBSgATrEnejZ-PGm6sjFe1Hy4KJn4glevcE"
        />
      </Head>
      <div className="overflow-hidden text-gray-900 light:font-custom dark:bg-dark-900 dark:text-white">
        <Navbar />
        <div className={className}>{children}</div>
        <Footer />
      </div>
    </>
  );
}
