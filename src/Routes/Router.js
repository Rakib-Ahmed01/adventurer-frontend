import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import AddDestination from '../pages/AddDestination';
import Blog from '../pages/Blog';
import Destination from '../pages/Destination';
import Destinations from '../pages/Destinations';
import Error from '../pages/Error';
import Home from '../pages/Home';
import Login from '../pages/Login';
import MyReviews from '../pages/MyReviews';
import Register from '../pages/Register';
import UpdateReview from '../pages/UpdateReview';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <Error />,
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
        path: '/my-reviews',
        element: (
          <PrivateRoute>
            <MyReviews />
          </PrivateRoute>
        ),
      },
      {
        path: '/add-destination',
        element: (
          <PrivateRoute>
            <AddDestination />
          </PrivateRoute>
        ),
      },
      {
        path: '/update-review/:id',
        element: (
          <PrivateRoute>
            <UpdateReview />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/update-review/${params.id}`),
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
