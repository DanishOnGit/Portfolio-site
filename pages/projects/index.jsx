import Head from "next/head";
import Layout from "../../components/layout";
import Link from "next/link";
import ProjectCard from "../../components/projectCard";
import { getMyProjects } from "../../lib/getMyProjects";

export async function getStaticProps() {
  const projects = await getMyProjects();
  return {
    props: {
      allProjectsData:projects,
    },
  };
}
const Projects = ({allProjectsData}) => {
  return (
    <>
      <Layout>
        <Head>
          <title>Projects</title>
        </Head>
        <h1 className="text-center text-3xl md:text-5xl m-6 ">Projects</h1>
        <section>
          <ul>
            {allProjectsData?.map((project) => (
              <li key={project.title}>
                <ProjectCard project={project} />
                <div className="bg-gray-500 p-px"></div>
              </li>
            ))}
          </ul>
        </section>
      </Layout>
    </>
  );
};
export default Projects;
