import { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/UserContext';

export default function UpdateReview() {
  const review = useLoaderData();
  const [text, setText] = useState('');
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  if (!localStorage.getItem('access-token')) {
    toast.error('Unauthorized Access!');
    return logout();
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`https://adventurer.vercel.app/reviews/${review._id}`, {
      method: 'PATCH',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ text }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success('Review Updated');
          navigate('/my-reviews');
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="bg-white dark:bg-gray-900">
      <Helmet>
        <title>Adventurer - Update Review</title>
      </Helmet>
      <div className="container px-6 py-8 mx-auto">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
            Update Review
          </h1>

          <div className="mx-auto">
            <span className="inline-block w-36 h-1 bg-teal-500 rounded-full"></span>
          </div>
        </div>
      </div>
      <form
        className="mx-auto mt-4 text-center w-[90%] max-w-2xl mb-2 border rounded p-2"
        onSubmit={handleSubmit}
      >
        <textarea
          name="review"
          className="w-full border rounded resize-none h-36 placeholder:p-2 p-2"
          placeholder="Your Review..."
          onBlur={(e) => setText(e.target.value)}
          defaultValue={review.reviewText}
        ></textarea>
        <div className="flex justify-end">
          <button type="submit" className="btn ">
            Update Review
          </button>
        </div>
      </form>
    </div>
  );
}
