import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import AboutMe from './pages/AboutMe.jsx'
import Contacts from './pages/Contacts.jsx'
import MySkills from './pages/MySkills.jsx'
import MyProjects from './pages/MyProjects.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "aboutME",
        element: <AboutMe />,
      }, 
      {
        path: "contacts",
        element: <Contacts />,
      },
      {
        path: "mySkills",
        element: <MySkills />,
      },
      {
        path: "myProjects",
        element: <MyProjects />,
      },
      
      
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />

  </StrictMode>,
)
