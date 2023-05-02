import { FunctionComponent, useEffect, useState } from 'react'
import logo from '../../../../assets/images/image 1.png'
import CloseIcon from '../../../../assets/icons/Close'
import DiamondDot from '../../../../assets/icons/DiamondDot'
import { NavLink } from 'react-router-dom'
import FadeIn from '../../Components/FadeIn'
import { easeIn, motion } from 'framer-motion'

interface NavigationProps {
  setOpen: () => void
  ref?: any
}

const Navigation: FunctionComponent<NavigationProps> = ({
  setOpen,
  ref
}: NavigationProps) => {
  const [toggle, setToggle] = useState<boolean>(true)
  const setClose = () => {
    setToggle(!toggle)
    setTimeout(() => {
      setOpen()
    }, 1000)
  }
  return (
    // <FadeIn
    //   toggle={toggle}
    //   vars={{
    //     duration: 0.8,
    //     opacity: 0.2,
    //     scale: 0,
    //     y: 80,
    //     rotationX: 90,
    //     transformOrigin: '0% 50% -50',
    //     ease: 'back',
    //     stagger: 0.01,
    //     delay: 0.04
    //   }}
    // >
    <motion.main
      variants={{
        hidden: { opacity: 0, x: toggle ? -200 : 0, y: 0 },
        enter: {
          opacity: toggle ? 1 : 0,
          x: toggle ? 0 : -100,
          y: toggle ? 0 : 1
        },
        exit: { opacity: 0, x: -200, y: 0 }
      }} // Pass the variant object into Framer Motion
      initial="hidden" // Set the initial state to variants.hidden
      animate="enter" // Animated state to variants.enter
      exit="exit" // Exit state (used later) to variants.exit
      transition={{ type: 'linear', duration: toggle ? 1 : 2 }} // Set the transition to linear
      className=""
    >
      <div ref={ref} className="w-full h-screen font-Poppins fixed z-40">
        <header className="fixed w-full flex justify-between items-center py-8 px-10 bg-transparent ">
          <div>
            <img
              src={logo}
              alt="logo"
              className="w-28 h-16  mix-blend-multiply"
            />
          </div>
          <div
            onClick={setClose}
            className="w-11 h-11 bg-white inline-flex justify-center items-center rounded-full hover:scale-110 duration-300"
          >
            <CloseIcon />
          </div>
        </header>

        <div className="w-full h-screen flex flex-col-reverse md:flex-row ">
          <div className="md:w-1/2 w-full h-1/3 md:h-screen bg-[#278FA7] flex flex-col justify-center items-center">
            <div>
              <h6 className="inline-flex justify-center items-center gap-2 text-[#24305E] font-semibold">
                <DiamondDot /> CONTACT
              </h6>
              <h2 className="font-semibold font-Playfair text-4xl text-white">
                hello@domain.com
              </h2>
              <div className="text-white mt-3 font-medium">
                <a href="">FACEBOOK</a> - <a href="">TWITTER</a> -
                <a href=""> LINKEDIN</a>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 w-full h-2/3 md:h-screen bg-[#8EC3CF] flex flex-col justify-center items-center">
            <div>
              <h6 className="inline-flex justify-center items-center gap-2 text-[#24305E] font-semibold">
                <DiamondDot /> NAVIGATION
              </h6>
              <ul className="flex flex-col gap-y-3">
                <li onClick={setClose}>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      [
                        'font-semibold font-Playfair text-4xl text-white',
                        isActive ? 'line-through' : ''
                      ]
                        .filter(Boolean)
                        .join(' ')
                    }
                  >
                    Home{' '}
                  </NavLink>
                </li>
                <li onClick={setOpen}>
                  <NavLink
                    to="/products"
                    className={({ isActive }) =>
                      [
                        'font-semibold font-Playfair text-4xl text-white',
                        isActive ? 'line-through' : ''
                      ]
                        .filter(Boolean)
                        .join(' ')
                    }
                  >
                    Products{' '}
                  </NavLink>
                </li>
                <li onClick={setOpen}>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      [
                        'font-semibold font-Playfair text-4xl text-white',
                        isActive ? 'line-through' : ''
                      ]
                        .filter(Boolean)
                        .join(' ')
                    }
                  >
                    About Us{' '}
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  )
}

export default Navigation
