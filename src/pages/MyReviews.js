import { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';
import { HashLoader } from 'react-spinners';
import AllReviews from '../components/AllReviews';
import { AuthContext } from '../Contexts/UserContext';

export default function MyReviews() {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const { logout } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://adventurer.vercel.app/my-reviews?email=${user?.email}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access-token')}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setIsLoading(false);
          return setReviews(data.reviews);
        } else {
          toast.error('Unauthorized Access!');
          logout();
        }
      })
      .catch((err) => console.log(err));
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-[100vh] flex justify-center items-center">
        <HashLoader color="#4b7ccd" />
      </div>
    );
  }

  return (
    <div>
      <Helmet>
        <title>Adventurer - My Reviews</title>
      </Helmet>
      <div className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-8 mx-auto">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
              My Reviews
            </h1>

            <div className="mx-auto">
              <span className="inline-block w-36 h-1 bg-blue-500 rounded-full"></span>
            </div>
          </div>

          {reviews.length ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-5 mt-4 xl:mt-12 xl:gap-8">
              {reviews.map((review) => {
                return (
                  <AllReviews
                    key={review._id}
                    review={review}
                    setReviews={setReviews}
                  />
                );
              })}
            </div>
          ) : (
            <div className="mx-auto mt-4 text-center w-[90%] max-w-2xl mb-2 border rounded p-8">
              <h2>No Reviews Is Added!</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
