import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Destination from '../pages/Destination';
import Destinations from '../pages/Destinations';
import Home from '../pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/home',
        element: <Home />,
      },
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/destinations',
        element: <Destinations />,
      },
      {
        path: '/destinations/:id',
        element: <Destination />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/destinations/${params.id}`),
      },
    ],
  },
]);

export default router;
