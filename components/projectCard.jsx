import Badge from "./badge";

const ProjectCard = ({ project: { title, link, code, stack } }) => {
  return (
    <div className="text-left p-2.5 w-full m-auto my-2 ">
      <h2 className="mb-3 font-medium">{title}</h2>
      <p className="mb-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dolorum
        nemo nam beatae aperiam rem.
      </p>

      <div>
        {" "}
        {stack.map((tech) => (
          
            <Badge tech={tech} />
          
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
