import Head from "next/head";
import Layout from "../../components/layout";
export default function TopLevelDomain() {
  return (
    <Layout>
     <Head>
        <title>Top level domain</title>
      </Head>
      <h1 className="text-5xl">Blog 1</h1>
      <style jsx>{`
      h1 {
        color: red;
      }
    `}</style>
    </Layout>
  );
}
