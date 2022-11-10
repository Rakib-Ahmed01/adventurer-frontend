import { useEffect, useState } from 'react';
import { HashLoader } from 'react-spinners';

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://adventurer.vercel.app/all-reviews')
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const increaseIndex = () => {
    const newIndex = checkNumber(index + 1);
    setIndex(newIndex);
  };

  const decreaseIndex = () => {
    const newIndex = checkNumber(index + 1);
    setIndex(newIndex);
  };

  const checkNumber = (number) => {
    if (number > reviews.length - 1 || number < 0) {
      return 0;
    } else {
      return number;
    }
  };

  if (reviews[index]?.reviewText.length < 50) {
    increaseIndex();
  }

  setTimeout(() => {
    const newIndex = checkNumber(index + 1);
    setIndex(newIndex);
  }, 5000);

  if (isLoading) {
    return (
      <div className="w-full h-[100vh] flex justify-center items-center">
        <HashLoader color="#4b7ccd" />
      </div>
    );
  }

  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize xl:text-5xl lg:text-4xl dark:text-white">
            What our adventurers say{' '}
          </h1>

          <div className="flex justify-center mx-auto mt-4">
            <span className="inline-block w-48 h-1 bg-blue-500 rounded-full"></span>
          </div>

          <div className="flex items-start max-w-6xl mx-auto mt-16">
            <button
              className="animate-pulse hidden p-2 text-blue-600 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:block hover:bg-blue-200"
              onClick={increaseIndex}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <div>
              <p className="flex items-center text-[17px] text-center text-gray-500 lg:mx-8">
                {reviews[index]?.reviewText}
              </p>

              <div className="flex flex-col items-center justify-center mt-8">
                <img
                  className="object-cover rounded-full w-14 h-14"
                  src={reviews[index]?.userPic}
                  alt=""
                />

                <div className="mt-4 text-center">
                  <h1 className="font-semibold text-gray-800 dark:text-white">
                    {reviews[index]?.userName}
                  </h1>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {`${new Date(
                      reviews[index]?.time
                    ).toDateString()}  ${new Date(
                      reviews[index]?.time
                    ).toLocaleTimeString()}`}
                  </span>
                </div>
              </div>
            </div>

            <button
              className="animate-pulse hidden p-2 text-blue-600 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:block hover:bg-blue-200"
              onClick={decreaseIndex}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
