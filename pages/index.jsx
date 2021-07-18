import Head from "next/head";
import Link from "next/link";
import Banner from "../components/banner";
import Layout from "../components/layout";


const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>

      <main>
        <Banner/>
      </main>
    </Layout>
  );
};

export default Home;
