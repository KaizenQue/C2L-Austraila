/* eslint-disable no-undef */
import 'leaflet/dist/leaflet.css';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "leaflet/dist/leaflet.css";
import React from "react";
import HomePage from "./Components/Home/HomePage"
import Footer from "./Components/Footer"
import Thankyou from "./Components/Thankyou"
import PrivacyPolicy from "./Components/PrivacyPolicy"
import Disclaimer from "./Components/Disclaimer"
import Service from "./Components/ServiceOverview/ServiceOverview"
import SubService from './Components/SubService/SubService';
import About from './Components/AboutUs/About';
import ContactUs from "./Components/ContactUs/ContactUs"
import MassTort from './Components/MassTort/MassTort';
import PIService from './Components/PersonalInjury/PIService';
import ClassService from './Components/ClassAction/ClassService';
import { ParallaxProvider } from 'react-scroll-parallax';
import './index.css'; 
import ChatInterface from './Components/ChatBot/ChatInterface';

function App() {


  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/chat',
      element: <ChatInterface />,
    },
    {
      path: '/service',
      element:
        <ParallaxProvider>
          <Service />
        </ParallaxProvider>
      ,
    },
    {
      path: '/sub-service',
      element: <SubService />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/contact',
      element: <ContactUs />
    },
    {
      path: '/mass-tort',
      element: <MassTort />
    },
    {
      path: '/personal-injury',
      element: <PIService />,
    },
    {
      path: '/thank-you',
      element: <Thankyou />,
    },
    {
      path: '/disclaimer',
      element: <Disclaimer />,
    },
    {
      path: '/privacy-policy',
      element: <PrivacyPolicy />,
    },
    {
      path: '/class-action',
      element: <ClassService />,
    },
    {
      path: '*',
      element: <h1>404 - Page Not Found</h1>,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
