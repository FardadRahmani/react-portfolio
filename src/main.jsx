import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CertificatePage from './components/CertificatePage.jsx'
import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";


const router = createBrowserRouter([
  {
  path: '/',
  element: <App />,
  // errorElement: <ErrorPage />
  },
  // {
  //   path: '/:certificateId', //dynamic Paths! Dynamic Routing
  //   element: <CertificatePage />,
  // }
  // {
  //   path: '/profiles',
  //   element: <ProfilesPage />,
  //   children:[
  //     {
  //       path: '/profiles/:profileId', //dynamic Paths! Dynamic Routing
  //       element: <ProfilePage />,
  //     }
  //   ]
  // },
  

]);










createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
