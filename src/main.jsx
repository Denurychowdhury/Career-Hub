import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Applied from './Components/Appliedes/Applied';
import Blogs from './Components/Blogs/Blogs';
import Categories from './Components/Categories/Categories';
import Home from './Components/Home/Home';
import Jobbs from './Components/Jobbs/Jobbs';
import JobDetails from './Components/JobDetails/JobDetails';
import Root from './Components/Root/Root';
import './index.css';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        // loader: () => fetch('jobs.json'),
        element: <Home></Home>,
        loader: () => fetch('/jobs.json'),
      },
      {
        path: 'jobs',
        element: <Jobbs></Jobbs>,
        loader: () => fetch('../jobs.json')
      },
      {
        path: 'details/:id',
        loader: () => fetch('../jobs.json'),
        element: <JobDetails></JobDetails>
      },
      {
        path: 'categories',
        element: <Categories></Categories>,
      },
      {
        path: '/applied',
        element: <Applied></Applied>,
        loader: () => fetch('/jobs.json'),
      },
      // {
      //   path: 'applied/:id',
      //   element: <Applied></Applied>,
      //   loader: () => fetch('../jobs.json')
      // },
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
