const Footer = () => {
  return (
    <div className="text-center bg-black text-white py-4 mt-10">
      <h1 className="m-6 font-semibold">Connect with me!</h1>
      <ul className="list-none flex justify-center items-center">
        <li className="hover:text-red-600">
          <a
            href="https://github.com/DanishOnGit"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </li>
        <li className="mx-3 hover:text-red-600">
          <a
            href="https://twitter.com/sum1writes"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
        </li>
        <li className="hover:text-red-600 ">
          <a
            href="https://www.linkedin.com/in/danishahmed27"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
      </ul>
      <small>Made using Next-js and Tailwind</small>
    </div>
  );
};
export default Footer;
