import { useContext } from 'react';
import Banner from '../components/Banner';
import DestinationsSection from '../components/DestinationsSection';
import RegisterNow from '../components/RegisterNow';
import Testimonial from '../components/Testimonial';
import { AuthContext } from '../Contexts/UserContext';

export default function Home() {
  const x = useContext(AuthContext);
  console.log(x);
  return (
    <>
      <Banner />
      <DestinationsSection />
      <Testimonial />
      <RegisterNow />
    </>
  );
}
