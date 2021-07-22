import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/layout";
import BlogCard from "../../components/blogCard";
import Head from "next/head";
import { getMyBlogs } from "../../lib/getMyBlogs";

export async function getStaticProps() {
  const blogs = await getMyBlogs();
  return {
    props: {
      allPostsData:blogs,
    },
  };
}
export default function Blog({ allPostsData }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Blogs</title>
        </Head>
        <h1 className="text-center text-3xl md:text-5xl m-6">Blogs</h1>
        <section>
          <ul>
            {allPostsData.map((blogPost) => (
              <li key={blogPost.title}>
                <BlogCard blogPost={blogPost} />
                <div className="bg-gray-500 p-px"></div>
              </li>
            ))}
          </ul>
        </section>
        
      </Layout>
    </>
  );
}
