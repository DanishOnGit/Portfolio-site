import Link from "next/link";

 const Navbar=()=> {
  return (
    <nav className="flex flex-col md:flex-row justify-center md:justify-between items-center max-w-4xl mx-auto h-20 ">
      <Link href="/" passHref>
        <div className="mb-2 md:mb-0 text-2xl font-semibold cursor-pointer">Danish A.</div>
      </Link>
      <ul className="flex list-none">
        <Link href="/" passHref>
          <li className="mx-2 md:mx-5 cursor-pointer hover:text-red-700">Home</li>
        </Link>
        <Link href="/projects" passHref>
          <li className="mx-2 md:mx-5 cursor-pointer hover:text-red-700">Projects</li>
        </Link>
        <Link href="/blogs" passHref>
          <li className="mx-2 cursor-pointer hover:text-red-700">Blogs</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar