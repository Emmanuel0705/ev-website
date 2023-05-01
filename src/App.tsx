import React, { ReactElement, useState } from 'react'
import LandingPage from './pages/LandingPage'
import Navigation from './pages/LandingPage/views/Navigaion'
import About from './pages/LandingPage/views/About'
import Products from './pages/LandingPage/views/Products'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import logo from '../assets/images/image 1.png'

import MenuHambuger from '../assets/icons/MenuHambuger'
import Contact from './pages/LandingPage/views/Contact'

const Layout = () => {
  const [nav, setNav] = useState(false)
  return (
    <div className="w-screen md:max-h-screen overflow-hidden">
      <div className="w-full md:h-screen h-full flex flex-col md:overflow-hidden font-Poppins">
        {nav && <Navigation setOpen={() => setNav(false)} />}
        <header className="absolute top-0 left-0 w-full flex justify-between items-center py-8 px-10 bg-transparent z-30 ">
          <div>
            <img
              src={logo}
              alt="logo"
              className="w-28 h-16  mix-blend-multiply contrast-100"
            />
          </div>
          <div
            onClick={() => setNav(true)}
            className="w-11 h-11 fixed top-10 right-10  bg-white inline-flex justify-center items-center rounded-full hover:scale-110 duration-300"
          >
            <MenuHambuger />
          </div>
        </header>
        <Outlet />
      </div>
      <Contact id="contact" />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <LandingPage />
      },
      {
        path: '/products',
        element: <Products />
      },
      {
        path: '/about',
        element: <About />
      }
    ]
  }
])

function App(): ReactElement {
  return <RouterProvider router={router} />
}

export default App
