import Home from './Home.jsx';
import ErrorPage from './ErrorPage.jsx';
import MainLayout from './MainLayout.jsx';
import Shop from './Shop.jsx';
import ProductPage from './ProductPage.jsx';

const routes = [
  {
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: 'shop',
        element: <Shop />,
      },
      {
        path: "shop/:productId",
        element: <ProductPage />,
        loader: async ({ params }) => {
          const response = await fetch(
            `https://fakestoreapi.com/products/${params.productId}`
          );
          return response.json();
        },
        hydrateFallbackElement: <p>Loading...</p>
      }
    ],
  },
];
export default routes;
