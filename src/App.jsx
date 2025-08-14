import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import "@fortawesome/fontawesome-free/css/all.min.css"
import Home from './Components/Home/Home.jsx'
import Portofolio from './Components/Portofolio/Portofolio.jsx'
import Layout from './Components/Layout/Layout.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Notfound from './Components/Notfound/Notfound.jsx'

function App() {

  const router = createBrowserRouter([
    {

      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: '/about', element: <About /> },
        { path: '/contact', element: <Contact /> },
        { path: '/portofolio', element: <Portofolio /> },
        { path: '*', element: <Notfound /> }

      ]
    },

  ]);

  return <RouterProvider router={router} />;
}

export default App
