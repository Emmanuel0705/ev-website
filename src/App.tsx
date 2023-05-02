import React, {
  ReactElement,
  Suspense,
  useEffect,
  useRef,
  useState
} from 'react'
// import LandingPage from './pages/LandingPage'
const LandingPage = React.lazy(() => import('./pages/LandingPage'))
const About = React.lazy(() => import('./pages/LandingPage/views/About'))
const Products = React.lazy(() => import('./pages/LandingPage/views/Products'))
import Navigation from './pages/LandingPage/views/Navigaion'

// import About from './pages/LandingPage/views/About'
// import Products from './pages/LandingPage/views/Products'

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useLocation
} from 'react-router-dom'
import logo from '../assets/images/image 1.png'
import { gsap } from 'gsap'
import MenuHambuger from '../assets/icons/MenuHambuger'
import Contact from './pages/LandingPage/views/Contact'
import { AnimatePresence, motion } from 'framer-motion'
import Preloader from './pages/Components/Preloader'

const Layout = () => {
  const [nav, setNav] = useState(false)
  const el = useRef<any>()
  const tl = useRef<any>()
  const location = useLocation()

  useEffect(() => {
    // tl.current = gsap.timeline({
    //   paused: true
    // })
    // tl.current.to(el.current, {
    //   duration: 0.8,
    //   opacity: 0.2,
    //   scale: 0,
    //   y: 80,
    //   rotationX: 90,
    //   transformOrigin: '0% 50% -50',
    //   ease: 'back',
    //   stagger: 0.01,
    //   delay: 0.04
    // })
    // tl.current.reverse()
    // tl.current.play()
  }, [])
  // useEffect(() => {
  //   console.log({ nav })
  //   // tl.current.play()
  //   !nav ? tl.current.play() : tl.current.reverse()
  // }, [nav])
  return (
    <AnimatePresence
      key={location.pathname}
      initial={true}
      mode="popLayout"
      presenceAffectsLayout={true}
    >
      <motion.main
        variants={{
          hidden: { opacity: 0, x: -200, y: 0 },
          enter: { opacity: 1, x: 0, y: 0 },
          exit: { opacity: 0, x: 0, y: -100 }
        }} // Pass the variant object into Framer Motion
        initial="hidden" // Set the initial state to variants.hidden
        animate="enter" // Animated state to variants.enter
        exit="exit" // Exit state (used later) to variants.exit
        transition={{ type: 'linear', duration: 2 }} // Set the transition to linear
        className=""
      >
        <div
          className="w-screen md:max-h-screen overflow-hidden"
          key={location.pathname}
        >
          <div className="w-full md:h-screen h-full flex flex-col md:overflow-hidden font-Poppins">
            <div ref={el}>
              {nav && <Navigation setOpen={() => setNav(!nav)} />}
            </div>
            <header className="absolute top-0 left-0 w-full flex justify-between items-center py-8 px-10 bg-transparent z-30 ">
              <div>
                <img
                  src={logo}
                  alt="logo"
                  className="w-28 h-16  mix-blend-multiply contrast-100"
                />
              </div>
              <div
                onClick={() => setNav(!nav)}
                className="w-11 h-11 fixed top-10 right-10  bg-white inline-flex justify-center items-center rounded-full hover:scale-110 duration-300"
              >
                <MenuHambuger />
              </div>
            </header>
            <Outlet />
          </div>
          <Contact id="contact" />
        </div>
      </motion.main>
    </AnimatePresence>
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
  return (
    <Suspense fallback={<Preloader />}>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default App
