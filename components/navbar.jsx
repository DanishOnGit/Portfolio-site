import Link from "next/link";

 const Navbar=()=> {
  return (
    <nav className="flex flex-col md:flex-row justify-center md:justify-between items-center max-w-4xl mx-auto h-20">
      <Link href="/">
        <div className="mb-2 md:mb-0 text-2xl font-semibold">Danish A.</div>
      </Link>
      <ul className="flex list-none">
        <Link href="/" passHref>
          <li className="mx-2 md:mx-5"><a>Home</a></li>
        </Link>
        <Link href="/projects" passHref>
          <li className="mx-2 md:mx-5"><a>Projects</a></li>
        </Link>
        <Link href="/blogs" passHref>
          <li className="mx-2 "><a>Blogs</a></li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar