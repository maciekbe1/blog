import Navbar from "@/components/Navbar";
import Head from "next/head";
import Footer from "@/components/Footer";

export default function Layout({ children, className }) {
  return (
    <>
      <Head></Head>
      <div className="overflow-hidden bg-gray-100 font-custom dark:bg-dark-900">
        <Navbar />
        <div className={className}>{children}</div>
        <Footer />
      </div>
    </>
  );
}
