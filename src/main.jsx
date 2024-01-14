import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './layout/Layout';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Portfolio from './components/portfolio/Portfolio';
import ContactUs from './components/contact_us/ContactUs';
import Home from './components/home/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/skills",
        element: <Skills />
      },
      {
        path: "/portfolio",
        element: <Portfolio />
      },
      {
        path: "/contactUs",
        element: <ContactUs />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
