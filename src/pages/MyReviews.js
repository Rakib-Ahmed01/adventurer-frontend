import { useContext, useEffect, useState } from 'react';
import AllReviews from '../components/AllReviews';
import { AuthContext } from '../Contexts/UserContext';

export default function MyReviews() {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReviews(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-8 mx-auto">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
              Your Reviews
            </h1>

            <div className="mx-auto">
              <span className="inline-block w-36 h-1 bg-blue-500 rounded-full"></span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr courses gap-5 mt-6 xl:mt-12 xl:gap-8">
            {reviews.map((review) => {
              return <AllReviews key={review._id} review={review} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
