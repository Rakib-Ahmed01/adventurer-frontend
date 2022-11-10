import { Helmet } from 'react-helmet';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Router';

function App() {
  return (
    <>
      <Helmet>
        <title>Adventurer</title>
      </Helmet>
      <Toaster />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
