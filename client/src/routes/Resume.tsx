import personalPhoto from '../assets/pix.jpg';

const Resume: React.FC = () => {
  return (
    <div className="w-full space-y-8 px-4 sm:px-8 py-8 mt-16 bg-gray-900 text-white">
      {/* Card for Personal Info */}
      <div className="max-w-4xl mx-auto bg-gray-800 shadow-lg rounded-lg p-6">
        <h1 className="text-center text-2xl sm:text-3xl font-bold mb-2 text-blue-400">Sulaimon Olalekan Ekundayo</h1>
        <img
          className="mx-auto mb-4 rounded-full w-32 h-32 sm:w-40 sm:h-40 object-cover border-4 border-blue-400"
          src={personalPhoto}
          alt="personal photo"
        />
        <p className="text-center text-lg sm:text-xl text-gray-300">Full-Stack Developer/Software QA Engineer</p>
      </div>

      {/* Card for Objective */}
      <div className="max-w-4xl mx-auto bg-gray-800 shadow-lg rounded-lg p-6">
        <h2 className="text-xl sm:text-2xl font-bold text-blue-400 mb-4">Objective</h2>
        <p className="text-justify text-sm sm:text-base text-gray-300">
          Aspiring Full Stack Developer with a strong background in software testing and a comprehensive understanding
          of both front-end and back-end technologies. Proficient in PHP, Symfony, JavaScript, React.js, MySQL, API
          integration, and cloud services such as Docker and Kubernetes. Seeking a junior full stack developer role to
          leverage my software development skills alongside my quality assurance experience in building scalable,
          high-performance applications.
        </p>
      </div>

      {/* Card for Summary of Qualification */}
      <div className="max-w-4xl mx-auto bg-gray-800 shadow-lg rounded-lg p-6">
        <h2 className="text-xl sm:text-2xl font-bold text-blue-400 mb-4">Summary of Qualification</h2>
        <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-gray-300">
          <li>
            Extensive experience in software testing, coupled with a strong understanding of the full software
            development lifecycle (SDLC).
          </li>
          <li>
            Strong programming skills in JavaScript (React.js), PHP, Symfony, HTML, CSS, and database management with
            MySQL.
          </li>
          <li>Hands-on experience with API development and integration, Docker, Kubernetes, and CI/CD pipelines.</li>
          <li>Recent academic studies in full stack development, with a focus on modern web technologies.</li>
          <li>
            Previous project experience with Druid Oy, contributing to real-world software development in collaboration
            with cross-functional teams.
          </li>
          <li>Expertise in test automation using Selenium, JUnit, and other testing tools.</li>
          <li>
            Familiar with Agile methodologies, especially Scrum, and possess excellent problem-solving, communication,
            and collaboration skills.
          </li>
        </ul>
      </div>

      {/* Card for Experience */}
      <div className="max-w-5xl mx-auto bg-gray-800 shadow-lg rounded-lg p-6">
        <h2 className="text-xl sm:text-2xl font-bold text-blue-400 mb-4">Experience</h2>

        {/* Grid Container for Experience Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Experience Card for Tutors Finland Oy */}
          <div className="flip-card h-96">
            <div className="flip-card-inner">
              {/* Front Side */}
              <div className="text-center flip-card-front bg-gray-700 p-6 rounded-lg">
                <h3 className="mt-32 text-lg sm:text-xl font-semibold text-blue-400">Full Stack Developer Trainee</h3>
                <h4 className="text-gray-300">Tutors Finland Oy</h4>
                <h4 className="text-gray-300">February 2025 - present</h4>
              </div>

              {/* Back Side */}
              <div className="flip-card-back bg-gray-600 p-6 rounded-lg overflow-y-auto">
                <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-gray-300">
                  <li>
                    Engineered a Strapi CMS project, streamlining content management through effective design and
                    content type creation.
                  </li>
                  <li>
                    Developed a dynamic React + Vite frontend that improved content delivery by fetching and displaying
                    data efficiently via API
                  </li>
                  <li>
                    Drove a 100% shift from manual to automated testing practices by implementing Python and Robot
                    Framework, significantly improving testing efficiency.
                  </li>
                  <li>Boosted code efficiency and maintainability by developing reusable React components.</li>
                  <li>
                    Successfully deployed the application on Render and Netlify, enabling broader access for
                    demonstrations and testing.
                  </li>
                  <li>
                    Ensured project alignment with business and technical objectives through close collaboration with
                    the Product Owner.
                  </li>
                  <li>
                    Accelerated team onboarding and development by providing crucial support in configuring local Strapi
                    environments.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Experience Card for Druid Oy */}
          <div className="flip-card h-96">
            <div className="flip-card-inner">
              {/* Front Side */}
              <div className="text-center flip-card-front bg-gray-700 p-6 rounded-lg">
                <h3 className="mt-32 text-lg sm:text-xl font-semibold text-blue-400">Full Stack Developer Trainee</h3>
                <h4 className="text-gray-300">Druid Oy</h4>
                <h4 className="text-gray-300">October 2024 - December 2024</h4>
              </div>

              {/* Back Side */}
              <div className="flip-card-back bg-gray-600 p-6 rounded-lg overflow-y-auto">
                <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-gray-300">
                  <li>
                    Successfully integrated Drupal with a React frontend by installing and configuring a Drupal instance
                    with essential modules like JSONAPI.
                  </li>
                  <li>
                    Optimized data structuring for seamless React app integration by populating Drupal with content
                    using custom content types and fields.
                  </li>
                  <li>
                    Enabled dynamic content fetching and rendering in a React app by leveraging the JSONAPI module to
                    expose Drupal content as a RESTful API.
                  </li>
                  <li>
                    Fostered smooth communication and project alignment between backend and frontend teams through
                    cross-functional collaboration.
                  </li>
                  <li>
                    Minimized load times and ensured efficient content delivery by optimizing Drupal content for the
                    React frontend.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Experience Card for AutoFlow Ltd */}
          <div className="flip-card h-96">
            <div className="flip-card-inner">
              {/* Front Side */}
              <div className="text-center flip-card-front bg-gray-700 p-6 rounded-lg">
                <h3 className="mt-32 text-lg sm:text-xl font-semibold text-blue-400">Software QA Engineer</h3>
                <h4 className="text-gray-300">AutoFlow Ltd</h4>
                <h4 className="text-gray-300">January 2022 - July 2023</h4>
              </div>

              {/* Back Side */}
              <div className="flip-card-back bg-gray-600 p-6 rounded-lg overflow-y-auto">
                <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-gray-300">
                  <li>
                    Streamlined testing processes by collaborating with development teams to design and execute
                    comprehensive manual and automated test plans.
                  </li>
                  <li>
                    Reduced testing time by over 70% through the automation of test cases using Selenium WebDriver and
                    Java Cucumber.
                  </li>
                  <li>
                    Ensured stable software releases by conducting thorough regression, system, and integration testing.
                  </li>
                  <li>
                    Contributed to significant improvements in QA processes and team capabilities by mentoring junior QA
                    members.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Experience Card for INITS Ltd */}
          <div className="flip-card h-96">
            <div className="flip-card-inner">
              {/* Front Side */}
              <div className="text-center flip-card-front bg-gray-700 p-6 rounded-lg">
                <h3 className="mt-32 text-lg sm:text-xl font-semibold text-blue-400">Software QA Engineer</h3>
                <h4 className="text-gray-300">INITS Ltd</h4>
                <h4 className="text-gray-300">September 2020 - December 2021</h4>
              </div>

              {/* Back Side */}
              <div className="flip-card-back bg-gray-600 p-6 rounded-lg overflow-y-auto">
                <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-gray-300">
                  <li>
                    Improved application stability by executing manual test cases for web and mobile applications,
                    accurately reporting defects, and performing compatibility testing.
                  </li>
                  <li>
                    Facilitated quicker resolution of issues by supporting developers in verifying reported problems and
                    participating in regression testing after code changes.
                  </li>
                  <li>
                    Contributed to informed decision-making by assisting in test plan preparation and effectively
                    communicating testing results to stakeholders
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card for Education */}
      <div className="max-w-4xl mx-auto bg-gray-800 shadow-lg rounded-lg p-6">
        <h2 className="text-xl sm:text-2xl font-bold text-blue-400 mb-4">Education and Certification</h2>
        <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-gray-300">
          <li>
            Vocational Qualification in Information and Communications Technology - Business College Helsinki, Finland
          </li>
          <li>Certified Tester, Foundation Level (CTFL) – ISTQB, December 2022</li>
          <li>Master of Science in Economics and Business Administration - University of Oulu, Finland</li>
          <li>Bachelor of Business Administration - Central Ostrobothnia UAS, Finland</li>
          <li>
            Advanced Diploma in Accounting and Business - Association of Chartered Certified Accountants (ACCA) United
            Kingdom
          </li>
          <li>
            Diploma in Accounting and Business - Association of Chartered Certified Accountants (ACCA) United Kingdom
          </li>
          <li>Associate Accounting Technician - Institute of Chartered Accountants of Nigeria (ICAN)</li>
        </ul>
      </div>

      {/* Card for Skills */}
      <div className="max-w-4xl mx-auto bg-gray-800 shadow-lg rounded-lg p-6">
        <h2 className="text-xl sm:text-2xl font-bold text-blue-400 mb-4">Technical Skills</h2>
        <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-gray-300">
          <li>Programming Languages: JavaScript (React.js), PHP, SQL, Python</li>
          <li>Front-end: HTML, CSS, Tailwind CSS, Bootstrap, React.js</li>
          <li>Back-end: PHP, Symfony, Node.js, Express.js</li>
          <li>CMS: Drupal, Strapi</li>
          <li>Database: MySQL, SQL, PostgreSQL</li>
          <li>API: RESTful APIs, API Integration, Postman</li>
          <li>DevOps: Docker, Kubernetes, Jenkins, CI/CD pipelines, Git actions</li>
          <li>Version Control: Git, Github, Bitbucket</li>
          <li>
            Test Automation: Selenium WebDriver, TestNG, JUnit, Mocha, Cypress, Playwright, Robot Framework, Java
            Cucumber
          </li>
          <li>Mobile testing: Appium</li>
          <li>Testing Tools: JIRA, Zephyr, Xray, Postman, Rest Assured</li>
          <li>Agile Methodologies: Scrum</li>
        </ul>
      </div>
    </div>
  );
};

export default Resume;
