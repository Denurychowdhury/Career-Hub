import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Applied from './Components/Appliedes/Applied';
import Blogs from './Components/Blogs/Blogs';
import Home from './Components/Home/Home';
import Root from './Components/Root/Root';
import './index.css';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'applied',
        element: <Applied></Applied>,
      },
      {
        path: 'blog',
        element: <Blogs></Blogs>
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
