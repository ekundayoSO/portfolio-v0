import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div
        className="flex-1 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
        }}
      >
        <div className="text-center bg-black bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 lobster-name">
            Hi, I'm <span className="text-blue-400">Sulaimon Ekundayo</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8">
            Full-Stack Developer | Software QA Engineer | Tech Enthusiast
          </p>
          <Link
            to="/about"
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors"
          >
            Learn More About Me
          </Link>
        </div>
      </div>

      {/* Featured Section */}
      <div className="bg-gray-900 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8">What I Do</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1: Full-Stack Development */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Full-Stack Development</h3>
              <p className="text-gray-300">
                I build scalable and high-performance web applications using modern technologies like React, Node.js,
                Express.js and PHP, Symfony.
              </p>
            </div>

            {/* Card 2: Software QA Engineering */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Software QA Engineering</h3>
              <p className="text-gray-300">
                I ensure software quality through manual and automated testing, using tools like Selenium, Java
                Cucumber, Robot Framework, Cypress, Mocha, Junit and Postman.
              </p>
            </div>

            {/* Card 3: DevOps & Cloud */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-white mb-4">DevOps & Cloud</h3>
              <p className="text-gray-300">
                I work with Docker, Kubernetes, and CI/CD pipelines to deploy and manage applications in the cloud.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-gray-800 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Let's Build Something Amazing Together</h2>
          <p className="text-lg text-gray-300 mb-8">
            Whether you need a full-stack developer, a QA engineer, or just want to chat about tech, I'd love to hear
            from you!
          </p>
          <Link
            to="/contact"
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
