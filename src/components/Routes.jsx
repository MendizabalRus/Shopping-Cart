import Home from './Home.jsx';
import ErrorPage from './ErrorPage.jsx';
import MainLayout from './MainLayout.jsx';
import Shop from './Shop.jsx';
import ProductPage from './ProductPage.jsx';
import About from "./About.jsx"
import Account from "./Account.jsx"
import Cart from "./Cart.jsx"

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
        hydrateFallbackElement: <p>Loading...</p>,
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "account",
        element: <Account />
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
];
export default routes;
