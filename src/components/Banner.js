import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';
import traveler from '../assets/images/traveler.json';

const Banner = () => {
  return (
    <div>
      <div className="container px-6 py-16 mx-auto">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-semibold text-gray-800 uppercase dark:text-white lg:text-5xl">
                Never Stop
                <br />
                <span className="block -ml-[2px] mt-1 font-bold text-blue-500 text-6xl">
                  Exploring
                </span>
              </h1>

              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Find the right instructor for you. Choose from many topics,
                skill levels, and languages. Shop thousands of high-quality
                on-demand online courses. Start learning today. Lifetime Access.
                Courses in 1+ Languages. Expert Instructors. Over 24+ Courses.
              </p>

              <Link to="/destinations" className="btn mt-6 inline-block">
                Start Exploring
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <Lottie animationData={traveler} loop={true} className="h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
