import React from 'react'
import Title from '../layouts/Title'
// import { projectOne, projectTwo} from "../../assets/index";
import ProjectsCard from './ProjectsCard';
import petadopt from '../../assets/images/pet-adopt.png'
import cyro from '../../assets/images/CYRO.png'
import bootstrap from '../../assets/images/bootstrap.png'

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="PET ADOPTION WEBSITE"
          des=" Pet Adoption Web App (MERN Stack) – Built a responsive pet adoption platform with user authentication, image uploads, and search/filter features. 
          Implemented an admin panel for managing listings, tracking sold pets, and viewing analytics."
          src={petadopt}
          git={'https://github.com/SANSAI-FSD/project-pet'}
          livelink={'https://project-pet.netlify.app'}
        />
        <ProjectsCard
          title="ULTRA-COIN WEB"
          des="Utracoin is designed to make cryptocurrency simple, clear, and accessible for everyone. 
          Whether you’re new to digital currency or looking to expand your knowledge, we provide easy-to-follow explanations, real-world examples, and expert insights to help you navigate the crypto world confidently. "
          src={cyro}
          gitlink={'https://github.com/SANSAI-FSD/TEMPLATEPROJECT'}
          livelink={'https://templateproject-jbvp.onrender.com'} 
        />
         <ProjectsCard
          title="COURSE LANDING PAGE"
          des=" Code Camp – Interactive Learning Platform – Built a responsive React-based website featuring learning modes, course details, FAQs, and instructor profiles.
           Designed a modern, user-friendly UI optimized for all devices."
          src={bootstrap}
          gitlink={'https://github.com/SANSAI-FSD/bootstrap'}
          livelink={'https://bootstrapp-e3r4.onrender.com'} 
        />
        {/* <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
        />
        <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
        />  */}
      </div>
    </section>
  );
}

export default Projects