import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-4 mt-auto">
      <div className="flex justify-center space-x-4">
        <a
          href="https://twitter.com/acidgambit_"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-blue-400 transition-colors"
        >
          X
        </a>
        <a
          href="https://github.com/mattbrc"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900 transition-colors"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;
