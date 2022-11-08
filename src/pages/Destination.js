import { AiFillStar } from 'react-icons/ai';
import { useLoaderData } from 'react-router-dom';
import reviews from '../assets/data/student-reviews';
import Review from '../components/Review';

export default function Destination() {
  const [destination] = useLoaderData();
  const { title, desc, image, days, price, rating, _id } = destination;
  return (
    <div className=" flex-col rounded flex items-center justify-between mx-auto max-w-2xl mb-2 gap-5 px-6 py-8">
      <div className="border rounded">
        <div className="relative w-full">
          <img src={image} alt={title} className="w-full destination-img" />
          <p className="absolute flex justify-center items-center top-2 left-2 bg-white px-4 py-1 rounded text-blue-500">
            {days}
          </p>

          <p className="absolute flex justify-center items-center top-1 right-2 bg-blue-500 px-4 py-1 rounded text-white mt-1">
            {price}Tk
          </p>
        </div>
        <div className="p-2 relative">
          <h3 className="text-blue-400 font-medium text-xl">{title}</h3>
          <h2 className="mt-1 mb-2">{desc}</h2>
          <h4 className="flex items-center gap-[2px]">
            <span>
              <AiFillStar className="text-blue-500" />
            </span>
            {`${rating}(0)`}
          </h4>
        </div>
      </div>
      <div className="w-full">
        <h2 className="text-center text-xl border-blue-500">Reviews</h2>
        <div className="w-24 h-[3px] rounded-full bg-blue-500 mx-auto"></div>
        <div className="border p-2 mt-4 rounded space-y-4">
          <form>
            <textarea
              name="review"
              className="w-full border rounded resize-none h-36 placeholder:p-2"
              placeholder="Your Review..."
            ></textarea>
            <div className="flex justify-end">
              <button type="submit" className="btn ">
                Add A Review
              </button>
            </div>
          </form>
          <div className="flex flex-col gap-4">
            {reviews.map((review) => {
              return <Review key={Math.random()} review={review} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
