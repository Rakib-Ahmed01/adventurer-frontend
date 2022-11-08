import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
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
    ],
  },
]);

export default router;
