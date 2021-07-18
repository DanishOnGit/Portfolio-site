import Head from "next/head";
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
      <main className="px-4 md:px-0">{children}</main>
    </div>
  );
};
export default Layout;
