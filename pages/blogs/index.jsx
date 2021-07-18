import Link from "next/link";
import Image from "next/image";
import { getSortedPostsData } from "../../lib/posts";
import Layout from "../../components/layout";
import BlogCard from "../../components/blogCard";
import Head from "next/head";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
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
              <li key={blogPost.id}>
                <BlogCard blogPost={blogPost} />
              </li>
            ))}
          </ul>
        </section>
        <Image
          src="/images/profile.jpg" // Route of the image file
          height={200} // Desired size with correct aspect ratio
          width={200} // Desired size with correct aspect ratio
          alt="Your Name"
        />
      </Layout>
    </>
  );
}
