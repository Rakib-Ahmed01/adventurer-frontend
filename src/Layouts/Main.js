import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { SyncLoader } from 'react-spinners';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { AuthContext } from '../Contexts/UserContext';

const Main = () => {
  const { loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <SyncLoader color="#4b7ccd" />
      </div>
    );
  }
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
