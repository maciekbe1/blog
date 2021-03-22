import Navbar from "@/components/Navbar";
import Head from "next/head";
import Footer from "@/components/Footer";

export default function Layout({ children, className }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="bg-gray-100 font-nunito">
        <Navbar />
        <div className={className}>{children}</div>
        <Footer />
      </div>
    </>
  );
}
