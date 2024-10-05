import React, { useContext } from "react";
import Logo from "../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/Auth";
import './Header.css';

function Header() {
  const navigate = useNavigate();

  const { auth, userInfo } = useContext(AuthContext);
  console.log(auth);
  const handleLogout = () => {
    const removeToken = localStorage.removeItem("token");
    setAuth(false);
    if (!removeToken) {
      console.log("token not found");
    }
    navigate("/login");
  };
  return (
    <>
      <header>
        <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
          <div class="flex justify-between items-center mx-auto md:max-w-screen-xl w-full lg:w-auto header" >
            <Link href="/" class="flex items-center mx-8">
              <img src={Logo} class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
              <span class="self-center text-xl font-semibold whitespace-nowrap text-black">
                LamaEstate
              </span>
            </Link>
            <div class="flex items-center lg:order-2">
              {auth ? (
                <>
                <div className="hidden md:block">
                  <Link
                    to={`/profile/${userInfo._id}`}
                    class=" hidden capitalize md:block py-2 pr-6 pl-3 text-black border-b border-gray-100 lg:border-0 lg:hover:text-primary-700 lg:p-2 "
                  >
                    Welcome, {userInfo.username}
                  </Link>

                  <Link
                    onClick={handleLogout}
                    class="text-gray-800 dark:text-black bg-[#fece51] p-2 focus:ring-4 focus:ring-primary-300 font-medium  text-sm px-6 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-[#fece51] focus:outline-none dark:focus:ring-primary-800 "
                  >
                    Logout
                  </Link>
                  </div>
                </>
              ) : (
                <>
                <div className="hidden md:block">
                  <Link
                    to="/login"
                    class="text-gray-800 dark:text-black  p-2 focus:ring-4 focus:ring-primary-300 font-medium  text-sm px-6 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-[#fece51] focus:outline-none dark:focus:ring-primary-800 "
                  >
                    Log in
                  </Link>
                  <Link
                    to="/register"
                    class="text-gray-800 dark:text-black bg-[#fece51] p-2 focus:ring-4 focus:ring-primary-300 font-medium  text-sm px-6 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                  >
                    Sign Up
                  </Link>
                  </div>
                </>
              )}
              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                class="inline-flex items-center px-4 ml-12 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span class="sr-only">Open main menu</span>
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <svg
                  class="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <Link
                    to={"/"}
                    class="block py-2 pr-4 pl-3 font-medium text-black rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-2"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/list"}
                    class="block py-2 pr-4 pl-3 text-black border-b border-gray-100 lg:border-0 lg:hover:text-primary-700 lg:p-2 "
                  >
                    Listings
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    class="block py-2 pr-4 pl-3 text-black border-b border-gray-100  lg:border-0 lg:hover:text-primary-700 lg:p-2 "
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 pr-4 pl-3 text-black border-b border-gray-100  lg:border-0 lg:hover:text-primary-700 lg:p-2 "
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
