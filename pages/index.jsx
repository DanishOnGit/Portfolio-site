import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Banner from "../components/banner";
import Layout from "../components/layout";
import { getMySkills } from "../lib/getMySkills";

export const getStaticProps = async () => {
  const skills = await getMySkills();
  return {
    props: {
      myAllSkills: skills
    }
  };
};

const Home = ({myAllSkills}) => {

  const [showMoreSkills, setShowSkills] = useState(false);

  const loadSkills = () => {
    setShowSkills(flag => !flag);
  };

  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>

      <main>
        <Banner/>
        
        <div>
        <h2 className="text-center md:text-left mt-24 mb-8 text-4xl font-custom">
          My Skills
        </h2>

        <div
          className={`grid grid-cols-3 md:grid-cols-6 gap-8 md:justify-items-start  overflow-hidden ${
            showMoreSkills ? '' : 'max-h-40 md:max-h-20'
          }`}
        >
          {myAllSkills.map(skill => (
            <div key={skill.title} className="flex flex-col items-center">
              <Image
                alt={skill.title}
                width={50}
                height={50}
                src={skill.image}
              />
              <p className="text-sm pt-1.5 font-custom">{skill.title}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button
            onClick={loadSkills}
            className="inline-block bg-pastelBlue-dark hover:bg-pastelBlue-darker transition delay-100 ease-in-out text-base font-medium text-white bg-black py-1 px-4 mt-7 rounded-none "
          >
            {showMoreSkills ? 'View Less' : 'View All'}
          </button>
        </div>
      </div>
      </main>
    </Layout>
  );
};

export default Home;
