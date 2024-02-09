import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Services",
    link: "/services",
  },
  {
    id: 3,
    name: "About",
    link: "/about",
  },
];

const Navbar = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    // Navigate to the "Login" page
    navigate('/login');
  };

  return (
    <>
      <nav className="bg-gray-100 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img className="h-8 w-auto" src="image/education.png" alt="Your Company" />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {Menu.map((menuItem) => (
                    <Link key={menuItem.id} to={menuItem.link} className="text-black dark:text-gray-400 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                      {menuItem.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div>
                <DarkMode />
              </div>
              <div className="relative ml-1">
                <div>
                  
                <button
  type="button"
  className="relative flex bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 "
  id="login-button" // Updated id for accessibility
  onClick={handleLoginClick} // Assuming you have a function to handle login click
>
  <span className="absolute -inset-1.5"></span>
  <span className="sr-only">Open login menu</span>
  Login
</button>
                </div>
                
              </div>
            </div>
          </div>
        </div>

        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {Menu.map((menuItem) => (
              <Link key={menuItem.id} to={menuItem.link} className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">
                {menuItem.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
