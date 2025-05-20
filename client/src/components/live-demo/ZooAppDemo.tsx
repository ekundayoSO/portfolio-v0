import { useState } from 'react';
import { ImSpinner4 } from 'react-icons/im';

const ZooAppDemo: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="demo-container">
      {isLoading && (
        <div className="loading-spinner">
          {/* spinner */}
          <ImSpinner4 className="animate-spin text-yellow-400 text-4xl" />
        </div>
      )}
      <iframe
        src="https://ekundayoso-zoo-app.netlify.app/"
        title="Countries App Live Demo"
        onLoad={() => setIsLoading(false)}
        style={{ display: isLoading ? 'none' : 'block' }}
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      ></iframe>
    </div>
  );
};

export default ZooAppDemo;
