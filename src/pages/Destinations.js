import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { HashLoader } from 'react-spinners';
import Destination from '../components/Destination';

export default function Destinations() {
  const [destinations, setDestinations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://adventurer.vercel.app/destinations')
      .then((res) => res.json())
      .then((data) => {
        setDestinations(data);
        setIsLoading(false);
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
    <>
      <Helmet>
        <title>Adventurer - All Destinations</title>
      </Helmet>
      <div className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-8 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-5 xl:mt-12 xl:gap-8">
            {destinations.map((destination) => {
              return (
                <Destination key={destination._id} destination={destination} />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
