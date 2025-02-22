import personalPhoto from '../assets/pix.jpg';

const About: React.FC = () => {
  return (
    <div className="w-full">
      {/* Responsive image sizing and spacing */}
      <img
        className="mx-auto mt-4 mb-6 md:mb-10 w-48 h-48 md:w-64 md:h-64 rounded-full object-cover"
        src={personalPhoto}
        alt="personal photo"
      />

      {/* Responsive text container */}
      <div className="px-4 md:px-20 lg:px-40">
        <p className="text-justify text-sm md:text-base leading-relaxed">
          Hi, I'm <b>Sulaimon Olalekan Ekundayo</b>. I have a diverse background, starting with studies in Accounting,
          Business Management, and Finance, before making a transition into the world of IT. Initially, I worked as a
          Software QA Engineer, where I gained a strong understanding of quality assurance practices and testing
          methodologies. <br />
          <br />
          Currently, I am focused on my journey to become a full-stack developer, diving deep into technologies like
          Node.js, Express.js, React, and more. I enjoy blending my analytical skills with coding to solve complex
          problems, and I’m always eager to learn and grow in the ever-evolving tech landscape. My unique journey has
          equipped me with a broad perspective, which I apply to both development and problem-solving.
          <br />
          <br />
          In addition to my technical interests, I have a strong passion for agriculture, particularly in crops and
          animal husbandry. I enjoy reading and learning more about the agricultural industry, which often inspires my
          creativity and drive for continuous learning. Explore my portfolio to see the projects I’ve worked on as I
          continue my transition into the world of full-stack development.
        </p>
      </div>

      {/* Responsive button container */}
      <div className="flex justify-center mt-6 md:mt-8">
        <button className="bg-gray-800 text-white px-4 py-2 rounded-sm hover:bg-gray-700 transition-colors">
          <a href="https://app.netlify.com/teams/ekundayoso/sites" target="_blank" rel="noreferrer">
            My projects
          </a>
        </button>
      </div>
    </div>
  );
};

export default About;
