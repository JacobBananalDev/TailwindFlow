// src/Header.jsx
import React from 'react';

const Header = ({headerLabel}) => {
  return (
    <div className="w-full h-16 bg-blue-700 text-white flex items-center justify-between px-4">
      <div className="text-xl font-bold">{headerLabel}</div>
      <nav>
        <ul className='flex flex-row items-center'>
          <li className="p-4 hover:bg-gray-700 cursor-pointer">Home</li>
          <li className="p-4 hover:bg-gray-700 cursor-pointer">About</li>
          <li className="p-4 hover:bg-gray-700 cursor-pointer">Services</li>
          <li className="p-4 hover:bg-gray-700 cursor-pointer">Contact</li>
        </ul>
      </nav>
      <div>Profile</div>
    </div>
  );
};

export default Header;