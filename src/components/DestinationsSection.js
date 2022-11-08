import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Destination from './Destination';

export default function DestinationsSection() {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/destinations-for-home')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDestinations(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-8 mx-auto">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
              Our Popular Destinations
            </h1>

            <div className="mx-auto">
              <span className="inline-block w-48 h-1 bg-blue-500 rounded-full"></span>
            </div>
          </div>

          <p className="max-w-2xl mx-auto mt-4 text-center text-gray-500 xl:mt-6 dark:text-gray-300">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias quas
            magni libero consequuntur voluptatum velit amet id repudiandae ea,
            deleniti laborum in neque eveniet.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr courses gap-5 mt-6 xl:mt-12 xl:gap-8">
            {destinations.map((destination) => {
              console.log(destination.title);
              return (
                <Destination key={destination._id} destination={destination} />
              );
            })}
          </div>
          <Link to="/destinations">
            {' '}
            <button className="btn block mx-auto mt-6">
              View All Destinations
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
