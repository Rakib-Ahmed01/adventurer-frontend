import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Blog from '../pages/Blog';
import Destination from '../pages/Destination';
import Destinations from '../pages/Destinations';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';

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
        loader: async ({ params }) => {
          const destinationRes = await fetch(
            `http://localhost:5000/destinations/${params.id}`
          );
          const reviewsRes = await fetch(
            `http://localhost:5000/reviews/${params.id}`
          );
          const [destination] = await destinationRes.json();
          const reviews = await reviewsRes.json();
          return { destination, reviews };
        },
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
    ],
  },
]);

export default router;
