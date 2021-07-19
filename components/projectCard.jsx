import Badge from "./badge";

const ProjectCard = ({ project: { title, link, code, stack } }) => {
  return (
    <div className="text-left p-2.5 w-full m-auto my-4 ">
      <h2 className="text-2xl md:text-4xl mb-3 font-medium">{title}</h2>
      <p className="mb-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dolorum
        nemo nam beatae aperiam rem.
      </p>

      <div>
        {" "}
        {stack.map((tech) => (
          
           <span key={tech}> <Badge tech={tech} /></span>
          
        ))}{" "}
      </div>

      <div className="mt-3">
        <a href={link}>
          <button className="mr-4 rounded-none px-3 py-1 bg-black text-white">
            View app
          </button>
        </a>
        <a href={code}>
          <button className="px-3 py-1 rounded-none bg-black  text-white">View code</button>
        </a>
      </div>
    </div>
  );
};
export default ProjectCard;
