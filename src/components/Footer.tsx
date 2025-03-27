import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 p-4 text-white mt-auto">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} Simple React App</p>
        <p className="text-sm mt-1">Built with React and Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;
