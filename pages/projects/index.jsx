import Head from "next/head";
import axios from "axios";
import Layout from "../../components/layout";
import Link from "next/link";
import ProjectCard from "../../components/projectCard";

// export const getStaticProps = async () => {
//   let allProjectsData;
//   try {
//     const {
//       data:{projects}
//     } = await axios.get("data.json");
//     console.log({ projects });
//    allProjectsData=projects
//   } catch (error) {
//     console.log(error);
//   }
//   finally{
//     return {
//         props: {
//            allProjectsData,
//         },
//       };
//   }
  
// };

const projects=[
    {
      "title": "ShuttleArc-socials",
      "stack":["React","Chakra-ui","Express","MongoDB"],
      "link": "https://shuttlearc-socials.netlify.app/",
      "code": "https://github.com/DanishOnGit/ShuttleArc-Social/tree/development"
    },
    {
      "title": "ShuttleArc-quiz",
      "stack":["React","Chakra-ui"],
      "link": "https://shuttlearc-quiz.netlify.app/",
      "code": "https://github.com/DanishOnGit/ShuttleArc-Quiz/tree/development"
    }, {
      "title": "ShuttleArc-store",
      "stack":["React","Popcube-ui","Express","MongoDB"],
      "link": "https://shuttle-shop.netlify.app/",
      "code": "https://github.com/DanishOnGit/E-Commerce-App/tree/Devlopment"
    }, {
      "title": "Netplay",
      "stack":["React","Popcube-ui","Express","MongoDB"],
      "link": "https://netplay.netlify.app/",
      "code": "https://github.com/DanishOnGit/Video-lib-Dev/tree/development"
    }, {
      "title": "Popcube-Ui",
      "stack":["Html","Css","vanilla-js"],
      "link": "https://popcube-ui.netlify.app/",
      "code": "https://github.com/DanishOnGit/PopCube-Ui"
    },
  ]
const Projects = () => {
  return (
    <>
    <Layout>
        <Head>
             <title>Projects</title>
        </Head>
      <h1 className="text-center text-3xl md:text-5xl m-6 ">Projects</h1>
      <section>
        <ul>
          {projects?.map((project) => (
            <li key={project.title}>
             <ProjectCard project={project}/>
            </li>
          ))}
        </ul>
        
      </section>
      </Layout>
    </>
  );
};
export default Projects;
