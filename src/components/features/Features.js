import React from 'react'

import {  FaServer ,FaDatabase,FaBug,FaCloudUploadAlt } from "react-icons/fa";
import {  SiAntdesign ,} from "react-icons/si";
import { FiCode } from 'react-icons/fi';

import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Frontend Development"
          des="Crafting visually appealing, responsive user interfaces using modern technologies like React, HTML, and CSS.  
          I focus on delivering seamless user experiences across all devices."
          con={<FiCode />}
         
        />
        <Card
          title="Backend Development"
          des="Building robust and scalable server-side logic, APIs, and database integrations. I ensure that the application runs efficiently behind the scenes."
          icon={<FaServer />}
        />
        <Card
          title="Data base Management"
          des="Designing and managing structured data using databases like MongoDB and MySQL. I ensure efficient data storage, retrieval, and security for backend systems."
          icon={<FaDatabase/>}
        />
        <Card
          title="Testing "
          des="Implementing unit and UI tests to ensure code reliability and performance. I follow test-driven development (TDD) principles for maintainable code."
          icon={<FaBug />}
        />
        <Card
          title="Ui Design"
          des="Designing clean, intuitive interfaces that enhance usability and visual appeal. I translate ideas into elegant layouts using tools like Figma and Tailwind."
          icon={<SiAntdesign />}
        />
        <Card
          title="Hosting Websites"
          des="Deploying applications to the web using reliable hosting platforms. I manage live environments, ensuring smooth updates and minimal downtime."
          icon={<FaCloudUploadAlt/>}
        />
      </div>
    </section>
  );
}

export default Features