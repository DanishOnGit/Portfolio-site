import Head from "next/head";
import Image from "next/image";
import Footer from "./footer";
import Navbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <div className="max-w-4xl mx-auto ">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="px-4 md:px-0 mb-6">{children} </main>
      <a href="#">
        <button className="px-2.5  text-white fixed bottom-5 right-5">
          <Image src="/images/upwards-arrow.png" alt="Back to top" width={25} height={25} />
        </button>
      </a>
      <Footer />
    </div>
  );
};
export default Layout;
