import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-500 p-4 text-white">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold">Simple React App</h1>
        <p>A demonstration of React with Tailwind CSS</p>
      </div>
    </header>
  );
};

export default Header;
