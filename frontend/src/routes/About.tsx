import personalPhoto from '../assets/pix.jpg';

const About: React.FC = () => {
  return (
    <div className="w-full">
      <img className="mx-auto mt-4 mb-10" src={personalPhoto} alt="personal photo" />
      <div className="">
        <p className="mx-20 text-justify">
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
      <div className="flex justify-center mt-4">
        <button className="bg-gray-800 text-white p-2 rounded-sm">
          <a className="" href="https://app.netlify.com/teams/ekundayoso/sites" target="_blank">
            My projects
          </a>
        </button>
      </div>
    </div>
  );
};
export default About;
