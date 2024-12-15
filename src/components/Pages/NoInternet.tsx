import React from 'react';
import Loader from '../ui/Loader';

const NoInternet: React.FC = () => {
  const handleRetry = () => {
    window.location.reload(); // Refresh the page to check for a connection again
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      {/* Icon or Image */}
      <div className="mb-8">
        <Loader/>
      </div>

      {/* Heading */}
      <h1 className="text-3xl font-semibold mb-4">No Internet Connection</h1>

      {/* Description */}
      <p className="text-lg text-center mb-6 max-w-md">
        It seems you're offline. Please check your internet connection and try again.
      </p>

      {/* Retry Button */}
      <button
        onClick={handleRetry}
        className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-500 transition duration-300"
      >
        Retry Connection
      </button>
    </section>
  );
};

export default NoInternet;
