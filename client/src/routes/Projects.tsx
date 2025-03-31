import CountriesAppDemo from '../components/live-demo/CountriesAppDemo';
import ZooAppDemo from '../components/live-demo/ZooAppDemo';
import SearchImagesAppDemo from '../components/live-demo/SearchImagesAppDemo';

const Projects = () => {
  return (
    <div className="bg-gray-900 text-white py-8">
      {/* Page Title */}
      <h1 className="text-center text-3xl sm:text-4xl font-bold text-blue-400 mb-8">My Projects</h1>

      {/* Countries App */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h2 className="text-2xl font-bold text-blue-400 mb-4">Countries App</h2>
        <div className="bg-gray-800 shadow-lg rounded-lg p-6">
          <CountriesAppDemo />
        </div>
      </div>

      {/* Zoo App */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h2 className="text-2xl font-bold text-blue-400 mb-4">Zoo App</h2>
        <div className="bg-gray-800 shadow-lg rounded-lg p-6">
          <ZooAppDemo />
        </div>
      </div>

      {/* Unsplash Images App */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h2 className="text-2xl font-bold text-blue-400 mb-4">Unsplash Images App</h2>
        <div className="bg-gray-800 shadow-lg rounded-lg p-6">
          <SearchImagesAppDemo />
        </div>
      </div>
    </div>
  );
};

export default Projects;
