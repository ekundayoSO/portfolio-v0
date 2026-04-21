import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import personalPhoto from '../assets/pix.jpg';

const About: React.FC = () => {
  return (
    <div className="w-full bg-gray-900 text-white py-8">
      {/* Responsive image sizing and spacing */}
      <img
        className="mx-auto mt-4 mb-6 md:mb-10 w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-blue-400"
        src={personalPhoto}
        alt="personal photo"
      />

      {/* Responsive text container */}
      <div className="px-4 md:px-20 lg:px-40">
        <p className="text-justify text-sm md:text-base leading-relaxed text-gray-300">
          Hi, I'm <b className="text-blue-400">Sulaimon Olalekan Ekundayo</b>. I come from a diverse academic background
          in Accounting, Business Management, and Finance, and I have successfully transitioned into the field of
          Information Technology, where I continue to grow as a well-rounded engineer.
          <br />
          <br />
          My journey in tech began in Software Quality Assurance, where I gained over three years of experience in
          manual and automated testing, working with tools such as Selenium, Robot Framework, and API testing
          frameworks. This experience gave me a strong foundation in software quality, debugging, and system
          reliability, and shaped my attention to detail and problem-solving mindset. 
          <br />
          <br />
          Driven by curiosity and a desire to build better systems, I expanded into Full Stack Development, working with
          technologies such as React, Node.js, Express, PHP, Strapi, and MySQL. I have contributed to real-world
          projects where I not only developed applications but also introduced test automation practices, improved
          workflows, and collaborated closely with cross-functional teams. 
          <br />
          <br />
          Currently, I am working as a Data/Cloud Engineer, where I focus on designing and building scalable data
          pipelines and cloud-based solutions using tools like Python, SQL, and cloud platforms (Azure, AWS, GCP). I
          enjoy transforming raw data into meaningful insights that support decision-making and drive business value.
          <br />
          <br />
          What sets me apart is my ability to work across the entire technology stack—from data and backend systems to
          frontend development and quality assurance—allowing me to build solutions that are not only functional but
          also reliable, scalable, and efficient. 
          <br />
          <br />
          Beyond technology, I have a strong passion for agriculture, particularly in crop production and animal
          husbandry. I enjoy reading and learning about the agricultural sector, which fuels my curiosity and long-term
          interest in applying technology to real-world challenges. 
          <br />
          <br />
          I am continuously learning, building, and exploring new opportunities to grow. Feel free to explore my
          portfolio to see the projects I’ve worked on and how I bring together data, development, and quality
          engineering to create impactful solutions.
        </p>
      </div>

      {/* Responsive button container */}
      <div className="flex justify-center mt-6 md:mt-8">
        <Link to="/projects">
          {' '}
          {/* Link to the Projects page */}
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
            My projects
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
