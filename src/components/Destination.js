import { AiFillStar } from 'react-icons/ai';
import { PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

export default function Destination({ destination }) {
  const { title, desc, image, days, price, reviewCount, rating, _id } =
    destination;
  return (
    <div className="flex flex-col border rounded">
      <div className="relative">
        <PhotoView src={image}>
          <img src={image} alt={title} className="w-full destination-img" />
        </PhotoView>
        <p className="absolute flex justify-center items-center top-2 left-2 bg-white px-4 py-1 rounded text-teal-500">
          {days}
        </p>

        <p className="absolute flex justify-center items-center top-1 right-2 bg-teal-500 px-4 py-1 rounded text-white mt-1">
          {price}Tk
        </p>
      </div>
      <div className="p-2 relative">
        <h3 className="text-teal-500 font-medium text-xl">{title}</h3>
        <h2 className="mt-1 mb-2">{desc.substr(0, 105)}...</h2>
        <h4 className="flex items-center gap-[2px]">
          <span>
            <AiFillStar className="text-teal-500" />
          </span>
          {`${rating}(${reviewCount})`}
        </h4>
        <Link to={`/destinations/${_id}`}>
          {' '}
          <button className="outline-btn block mx-auto mt-2 w-full">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
}
