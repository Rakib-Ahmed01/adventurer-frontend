import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function Destination({ destination }) {
  console.log(destination);
  const { title, desc, image, days, price, rating, _id } = destination;
  return (
    <div className="destination flex flex-col border rounded">
      <div className="relative">
        <img src={image} alt={title} className="w-full" />
        <p className="absolute flex justify-center items-center top-2 left-2 bg-white px-4 py-1 rounded text-blue-500">
          {days}
        </p>

        <p className="absolute flex justify-center items-center top-1 right-2 bg-blue-500 px-4 py-1 rounded text-white mt-1">
          {price}Tk
        </p>
      </div>
      <div className="p-2 relative">
        <h3 className="text-blue-400 font-medium text-xl">{title}</h3>
        <h2 className="mt-1 mb-2">{desc.substr(0, 120)}...</h2>
        <h4 className="flex items-center gap-[2px]">
          <span>
            <AiFillStar className="text-blue-500" />
          </span>
          {`${rating}(5)`}
        </h4>
        {/* <h5 className="text-[17px] font-bold flex mt-1">
          {price}{' '}
          <TbCurrencyTaka className="w-5 h-5 -ml-[4px] transform rotate-[15deg]" />
        </h5> */}
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
