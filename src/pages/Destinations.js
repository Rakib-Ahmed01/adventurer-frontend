import { useEffect, useState } from 'react';
import Destination from '../components/Destination';

export default function Destinations() {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/destinations')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDestinations(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-5 xl:mt-12 xl:gap-8">
          {destinations.map((destination) => {
            console.log(destination.title);
            return (
              <Destination key={destination._id} destination={destination} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
