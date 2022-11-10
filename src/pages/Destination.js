import { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';
import { AiFillStar } from 'react-icons/ai';
import { PhotoView } from 'react-photo-view';
import { Link, useLoaderData } from 'react-router-dom';
import Review from '../components/Review';
import { AuthContext } from '../Contexts/UserContext';

export default function Destination() {
  const [review, setReview] = useState('');
  const { destination, reviews } = useLoaderData();
  const [allReviews, setAllReviews] = useState(reviews);
  const [reviewCount, setReviewCount] = useState(destination?.reviewCount);

  const { title, desc, image, days, price, rating, _id } = destination;
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const userReview = {
      serviceId: _id,
      serviceName: title,
      serviceDesc: desc,
      serviceImg: image,
      email: user.email,
      userName: user.displayName,
      userPic: user.photoURL,
      reviewText: review,
      servicePrice: price,
      serviceDays: days,
      time: new Date(),
    };

    fetch(`https://adventurer.vercel.app/reviews/${_id}`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(userReview),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setAllReviews((prevReviews) => [userReview, ...prevReviews]);
          setReviewCount((prevCount) => prevCount + 1);
          toast.success('Review Added');
        }
      })
      .catch((err) => console.log(err));

    e.target.reset();
  };

  return (
    <>
      <Helmet>
        <title>Adventurer - {title}</title>
      </Helmet>
      <div className=" flex-col rounded flex items-center justify-between mx-auto max-w-2xl mb-2 gap-5 px-6 py-8">
        <div className="border rounded">
          <div className="relative w-full">
            <PhotoView src={image}>
              <img src={image} alt={title} className="w-full destination-img" />
            </PhotoView>
            <p className="absolute flex justify-center items-center top-2 left-2 bg-white px-4 py-1 rounded text-blue-500">
              {days}
            </p>

            <p className="absolute flex justify-center items-center top-1 right-2 bg-blue-500 px-4 py-1 rounded text-white mt-1">
              {price}Tk
            </p>
          </div>
          <div className="p-2 relative">
            <h3 className="text-blue-500 font-medium text-xl">{title}</h3>
            <h2 className="mt-1 mb-2">{desc}</h2>
            <h4 className="flex items-center gap-[2px]">
              <span>
                <AiFillStar className="text-blue-500" />
              </span>
              {`${rating}(${reviewCount})`}
            </h4>
          </div>
        </div>
        <div className="w-full">
          <h2 className="text-center text-xl border-blue-500">Reviews</h2>
          <div className="w-24 h-[3px] rounded-full bg-blue-500 mx-auto"></div>
          <div className="border p-2 mt-4 rounded space-y-4">
            <form onSubmit={handleSubmit}>
              <textarea
                name="review"
                className="w-full border rounded resize-none h-36 placeholder:p-2 p-1"
                placeholder="Your Review..."
                onBlur={(e) => setReview(e.target.value)}
              ></textarea>
              <div className="flex justify-end">
                {user ? (
                  <button type="submit" className="btn ">
                    Add A Review
                  </button>
                ) : (
                  <Link to="/login">
                    <button className="btn ">Login To Review</button>
                  </Link>
                )}
              </div>
            </form>
            {allReviews.length ? (
              <div className="flex flex-col gap-4">
                {allReviews.map((review) => {
                  return <Review key={Math.random()} review={review} />;
                })}
              </div>
            ) : (
              <div className="border text-center py-8 rounded">
                <h3 className="text-lg">No Review!</h3>
                <p>Be The First One To Review This Destination.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
