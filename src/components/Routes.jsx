import Home from './Home.jsx';
import ErrorPage from './ErrorPage.jsx';
import MainLayout from './MainLayout.jsx';
import Shop from './Shop.jsx';

const routes = [
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    element: <MainLayout />,
    children: [
      {
        path: 'shop',
        element: <Shop />,
      },
    ],
  },
];
export default routes;
