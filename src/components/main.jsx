import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';

import '../style/main.css';
import '../style/reset.css';
import '../style/reset.css';

import App from './App.jsx';
import Shop from './Shop.jsx';
import About from './About.jsx';
import Cart from './Cart.jsx';
import ErrorPage from './ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: 'shop',
    element: <Shop />,
    children: [
      {
        path: 'path1',
      },
      {
        path: 'path2',
      },
    ],
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: 'cart',
    element: <Cart />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
