import React from 'react'
import Title from '../layouts/Title'
// import { projectOne, projectTwo} from "../../assets/index";
import ProjectsCard from './ProjectsCard';
import petadopt from '../../assets/images/pet-adopt.png'
import cyro from '../../assets/images/CYRO.png'
import isp from '../../assets/images/ISP.png'
import lax from '../../assets/images/lax360.png'

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
        title="ISP AGENCY WEBSITE"
          des="Built a responsive multi-page ISP agency website using React with an interactive UI. Features include service plan listings. Implemented smooth navigation with React Router and optimized for mobile responsiveness."
          src={isp}
          gitlink={'https://github.com/SANSAI-FSD/ISP'}
          livelink={'ispagencyyy.netlify.app'} 
        />
        <ProjectsCard
          title="LAX 360 WEBSITE"
          des=" A full-stack MERN web platform built with the assistance of AI tools to accelerate development, improve UI/UX design, and ensure clean, scalable code."
          src={lax}
          gitlink={'https://github.com/SANSAI-FSD/LAX360FRONTEND'}
          livelink={'https://lax360frontend.onrender.com'} 
        />
        {/* <ProjectsCard
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