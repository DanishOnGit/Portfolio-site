import Link from "next/link";
import Image from "next/image";
import { getSortedPostsData } from "../../lib/posts";

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
      <h1 >Blogs posts</h1>
      <section >
        <h2 >Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/blogs/${id}`}><a>{title}</a></Link>
              
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
      <h2 className="text-blue-600 text-2xl">
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>

      <Image
        src="/images/profile.jpg" // Route of the image file
        height={200} // Desired size with correct aspect ratio
        width={200} // Desired size with correct aspect ratio
        alt="Your Name"
      />
    </>
  );
}
