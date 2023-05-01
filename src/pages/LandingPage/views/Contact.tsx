import { FunctionComponent } from 'react'
import DiamondDot from '../../../../assets/icons/DiamondDot'
import { NavLink } from 'react-router-dom'

interface ContactProps {
  id?: string
}

const Contact: FunctionComponent<ContactProps> = ({ id }: ContactProps) => {
  return (
    <div id={id} className="w-full h-screen font-Poppins">
      <div className="w-full h-screen flex relative">
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
          <h6 className="inline-flex justify-center items-center gap-2 text-[#24305E] font-semibold">
            <DiamondDot /> CONTACT
          </h6>
          <h2 className="font-semibold font-Playfair text-4xl text-white">
            hello@domain.com
          </h2>
          <div className="text-white mt-3 font-medium">
            <a href="">FACEBOOK</a> - <a href="">TWITTER</a> -
            <a href=""> LINKEDIN</a>{' '}
          </div>
        </div>
        <div className="w-1/3 h-screen bg-[#8EC3CF] flex flex-col justify-center items-center "></div>
        <div className="w-1/3 h-screen bg-[#278FA7] flex flex-col justify-center items-center"></div>
        <div className="w-1/3 h-screen bg-[#8EC3CF] flex flex-col justify-center items-center "></div>
        <ul className="absolute w-full bottom-10 md:flex flex-wrap hidden">
          <li className="w-1/3 inline-flex justify-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                [
                  'font-medium text-3xl font-Playfair md:text-4xl text-white',
                  isActive ? 'line-through' : ''
                ]
                  .filter(Boolean)
                  .join(' ')
              }
            >
              Home{' '}
            </NavLink>
          </li>
          <li className="w-1/3 inline-flex justify-center">
            <NavLink
              to="/products"
              className={({ isActive }) =>
                [
                  'font-medium text-3xl font-Playfair md:text-4xl text-white',
                  isActive ? 'line-through' : ''
                ]
                  .filter(Boolean)
                  .join(' ')
              }
            >
              Products{' '}
            </NavLink>
          </li>
          <li className="w-1/3 inline-flex justify-center">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                [
                  'font-medium text-3xl font-Playfair md:text-4xl text-white',
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
  )
}

export default Contact
