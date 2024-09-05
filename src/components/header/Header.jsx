import React, { useState, useEffect } from 'react';
import { TailwindFlow_AppTheme, TailwindFlow_HeaderItems } from '../../constants/constants';
import { FaGithub } from 'react-icons/fa';
import { MdLightMode, MdDarkMode } from 'react-icons/md';

const Header = ({ headerLabel }) => {
  const [theme, setTheme] = useState('system');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    // Load theme from localStorage or default to system
    const savedTheme = localStorage.getItem('theme') || 'system';
    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (theme) => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  };

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    applyTheme(newTheme);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleGitHubClick = () => {
    window.open('https://github.com/JacobBananalDev/TailwindFlow', '_blank'); // Replace with your GitHub profile URL
  };

  return (
    <div className="flex justify-between items-center w-full h-16 bg-primaryLight text-white px-4">
      <div className="text-xl font-bold">{headerLabel}</div>

      <div className='flex flex-row items-center'>
        <nav>
          <ul className='flex flex-row items-center'>
            {TailwindFlow_HeaderItems.map((item) =>
              <li key={item} className="p-5 cursor-pointer">{item}</li>
            )}
          </ul>
        </nav>

        <div className='relative flex flex-row items-center gap-2 border-l p-1'>
          <div onClick={toggleDropdown} className="cursor-pointer flex items-center">
            {theme === 'dark' ? (
              <MdDarkMode className='h-5 w-5 ml-2 hover:text-red-100' />
            ) : (
              <MdLightMode className='h-5 w-5 ml-2 hover:text-red-100' />
            )}
          </div>
          {dropdownOpen && (
            <div className="absolute top-full right-0 mt-2 bg-white text-black dark:bg-gray-800 dark:text-white border rounded shadow-lg z-10 p-2">
              {
                TailwindFlow_AppTheme.map(({ icon: Icon, text, value }) =>
                  <div key={value} className="flex flex-row gap-2 items-center p-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600" onClick={() => handleThemeChange(value)}>
                    <Icon className="h-5 w-5" />
                    <span>{text}</span>
                  </div>
                )}
            </div>
          )}
          <FaGithub className='h-5 w-5 ml-2 hover:text-red-100 cursor-pointer' onClick={handleGitHubClick} />
        </div>
      </div>
    </div>
  );
};

export default Header;
