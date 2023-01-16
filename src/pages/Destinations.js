import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { SyncLoader } from 'react-spinners';
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
        <SyncLoader color="#4b7ccd" />
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
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
              All Destinations
            </h1>

            <div className="mx-auto">
              <span className="inline-block w-28 h-1 bg-blue-500 rounded-full"></span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-5 mt-6 xl:mt-8 xl:gap-8">
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
