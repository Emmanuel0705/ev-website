import { FunctionComponent } from 'react'
import logo from '../../../../assets/images/image 1.png'
import CloseIcon from '../../../../assets/icons/Close'
import DiamondDot from '../../../../assets/icons/DiamondDot'
import { NavLink } from 'react-router-dom'

interface NavigationProps {
  setOpen: () => void
}

const Navigation: FunctionComponent<NavigationProps> = ({
  setOpen
}: NavigationProps) => {
  return (
    <div className="w-full h-screen font-Poppins fixed z-40">
      <header className="fixed w-full flex justify-between items-center py-8 px-10 bg-transparent ">
        <div>
          <img
            src={logo}
            alt="logo"
            className="w-28 h-16  mix-blend-multiply"
          />
        </div>
        <div
          onClick={setOpen}
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
              <li onClick={setOpen}>
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
  )
}

export default Navigation
