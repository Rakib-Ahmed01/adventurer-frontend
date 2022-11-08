import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Footer = () => {
  return (
    <div>
      <footer className="bg-white dark:bg-gray-900">
        <div className="container py-8 mx-auto">
          <hr className="my-10 border-gray-200 dark:border-gray-700" />
          <div className="text-center">
            <div className="flex gap-1 justify-center items-center">
              <img src={logo} className="h-8 w-8 lg:w-10 lg:h-10" alt="logo" />
              <Link
                className="website-name -ml-[1px] mt-1 text-2xl font-bold  transition-colors duration-300 transform dark:text-white lg:text-3xl border-blue-500 hover:text-gray-700 dark:hover:text-gray-300 text-blue-500"
                to="/"
              >
                Adventurer
              </Link>
            </div>

            <p className="max-w-md mx-auto mt-2 text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              iure dolor incidunt quis sapiente sequi nostrum eos exercitationem
              aspernatur expedita!
            </p>
          </div>

          <hr className="my-10 border-gray-200 dark:border-gray-700" />

          <div className="flex flex-col items-center sm:flex-row sm:justify-between">
            <h5 className="text-sm text-gray-400">
              © Copyright 2022. All Rights Reserved.
            </h5>

            <div className="flex mt-3 -mx-2 sm:mt-0">
              <Link
                href="/destinations"
                className="mx-2 text-sm text-gray-400 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
                aria-label="Reddit"
              >
                {' '}
                Destinations{' '}
              </Link>

              <Link
                href="/blog"
                className="mx-2 text-sm text-gray-400 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
                aria-label="Reddit"
              >
                {' '}
                Blog{' '}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
