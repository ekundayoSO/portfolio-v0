import personalPhoto from '../assets/pix.jpg';

const Resume: React.FC = () => {
  return (
    <div className="w-full space-y-8 px-4 py-8">
      {/* Card for Personal Info */}
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-center text-2xl font-semibold mb-2">Sulaimon Olalekan Ekundayo</h1>
        <img className="mx-auto mb-4 rounded-full w-32 h-32 object-cover" src={personalPhoto} alt="personal photo" />
        <p className="text-center text-lg text-gray-600">Full-Stack Developer/Software QA Engineer</p>
      </div>

      {/* Card for Objective */}
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-2">Objective</h2>
        <p className="text-justify text-gray-700">
          Aspiring Full Stack Developer with a strong background in software testing and a comprehensive understanding of both front-end and back-end technologies. Proficient in PHP, Symfony, JavaScript, React.js, MySQL, API integration, and cloud services such as Docker and Kubernetes. Seeking a junior full stack developer role to leverage my software development skills alongside my quality assurance experience in building scalable, high-performance applications.
        </p>
      </div>
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-2">Summary of Qualification</h2>
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li>
            Extensive experience in software tesLng, coupled with a strong understanding of the full software development lifecycle (SDLC).
          </li>
          <li>
            Strong programming skills in JavaScript (React.js), PHP, Symfony, HTML, CSS, and database management with MySQL.
          </li>
          <li>Hands-on experience with API development and integration, Docker, Kubernetes, and CI/CD pipelines.</li>
          <li>Recent academic studies in full stack development, with a focus on modern web technologies.</li>
          <li>
            Previous project experience with Druid Oy, contributing to real-world software development in collaboration with cross-functional teams.
          </li>
          <li>Expertise in test automation using Selenium, JUnit, and other testing tools.</li>
          <li>
            Familiar with Agile methodologies, especially Scrum, and possess excellent problem-solving, communication, and collaboration skills.
          </li>
        </ul>
      </div>

      {/* Card for Experience */}
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-2">Experience</h2>
        <h3 className="text-lg font-semibold text-gray-600">Full Stack Developer Trainee - Druid Oy</h3>
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li>
            Drupal Setup: Installed and configured a Drupal instance, ensuring that all necessary modules (including
            JSONAPI) were correctly set up for integration with a React frontend.
          </li>
          <li>
            Content Management: Populated the Drupal instance with content, utilizing custom content types and fields to
            structure data for seamless integration with the React app.
          </li>
          <li>
            API Integration: Utilized the JSONAPI module to expose Drupal content as a RESTful API and integrated the
            content into a React app, ensuring dynamic content fetching and rendering.
          </li>
          <li>
            Cross-functional Collaboration: Worked closely with team members to align the project with business
            requirements, ensuring smooth communication between the backend and front-end development teams.
          </li>
          <li>
            Performance Optimization: Ensured efficient API calls and minimized load times by optimizing Drupal content
            delivery to the React frontend.
          </li>
        </ul>
        <h3 className="text-lg font-semibold text-gray-600">Software QA Engineer - AutoFlow Ltd</h3>
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li>
            Collaborated with development teams to design and execute comprehensive test plans for manual and automated
            testing.
          </li>
          <li>Automated test cases using Selenium WebDriver and Java, cutting testing time by over 70%.</li>
          <li>
            Conducted various types of tesLng, including regression, system, and integration testing, ensuring stable
            software delivery.
          </li>
          <li>Mentored junior QA team members and contributed to the improvement of QA processes.</li>
        </ul>
        <h3 className="text-lg font-semibold text-gray-600">Software QA Engineer - INITS Ltd</h3>
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li>
            Executed manual test cases for web and mobile applications, reporting defects and performing compatibility
            testing.
          </li>
          <li>
            Supported developers in verifying reported issues and participated in regression testing after code changes.
          </li>
          <li>Assisted in preparing test plans and communicated testing results to stakeholders.</li>
        </ul>
      </div>

      {/* Card for Education */}
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-2">Education and Certification</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li className="text-gray-700">
            Vocational Qualification in Information Communications Technology - Business College Helsinki
          </li>
          <li className="text-gray-700">Bachelor of Business Administration - Central Ostrobothnia UAS</li>
          <li className="text-gray-700">
            Master of Science in Economics and Business Administration - University of Oulu
          </li>
        </ul>
      </div>

      {/* Card for Skills */}
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-2">Technical Skills</h2>
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li>Programming Languages: JavaScript (React.js), PHP, SQL, Python</li>
          <li>Front-end: HTML, CSS, Tailwind CSS, Bootstrap, React.js</li>
          <li>Back-end: PHP, Symfony, Node.js, Express.js</li>
          <li>Database: MySQL, SQL</li>
          <li>API: RESTful APIs, API Integration, Postman</li>
          <li>DevOps: Docker, Kubernetes, Jenkins, CI/CD pipelines, Git actions</li>
          <li>Version Control: Git, Github, Bitbucket</li>
          <li>Test Automation: Selenium WebDriver, TestNG, JUnit, Mocha, Cypress, Playwright, Robot Framework</li>
          <li>Mobile testing: Appium</li>
          <li>Testing Tools: JIRA, Zephyr, Xray, Postman, Rest Assured</li>
          <li>Agile Methodologies: Scrum</li>
        </ul>
      </div>
    </div>
  );
};

export default Resume;
