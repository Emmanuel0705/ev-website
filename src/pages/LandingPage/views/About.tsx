import DiamondDot from '../../../../assets/icons/DiamondDot'
import { useLocation } from 'react-router-dom'

// interface AboutProps {}

const About = () => {
  const location = useLocation()
  const hash = location.hash

  return (
    <div className="w-screen md:h-screen md:overflow-hidden font-Poppins">
      <nav className="fixed top-24 right-10 hidden md:block z-30">
        <ul
          className={`flex flex-col justify-end items-end text-white font-semibold text-lg  ${
            hash !== '#contact' ? ' gap-y-2 ' : ' '
          } `}
        >
          <li
            className={`  ${
              hash !== '#contact' ? ' text-white ' : ' text-[#131F4A]'
            }  `}
          >
            <a href="#1">About</a>
          </li>
          {hash !== '#contact' && (
            <>
              <li className="inline-flex items-center">
                <a href="#1">
                  <hr
                    className={` border-2 ${
                      hash === '#1'
                        ? 'w-7 border-white'
                        : 'w-5 border-[#131F4A]'
                    }  `}
                  />
                </a>{' '}
              </li>
              <li className="inline-flex items-center">
                <a href="#2">
                  <hr
                    className={` border-2 ${
                      hash === '#2'
                        ? 'w-7 border-white'
                        : 'w-5 border-[#131F4A]'
                    }  `}
                  />
                </a>{' '}
              </li>
              <li className="inline-flex items-center">
                <a href="#3">
                  <hr
                    className={` border-2 ${
                      hash === '#3'
                        ? 'w-7 border-white'
                        : 'w-5 border-[#131F4A]'
                    }  `}
                  />
                </a>{' '}
              </li>
            </>
          )}
          <li className="inline-flex items-center">
            <a
              href="#contact"
              className={`  ${
                hash === '#contact' ? ' text-white ' : ' text-[#131F4A]'
              }  `}
            >
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
      <div
        id="1"
        className="w-full h-screen flex flex-col justify-center items-center bg-[#24305E] "
      >
        <div className="w-full max-w-sm text-white p-4">
          {' '}
          <h6 className="inline-flex justify-center items-center gap-2 text-[#8EC3CF] font-semibold">
            <DiamondDot /> About
          </h6>
          <h2 className="font-semibold font-Playfair text-4xl mb-4">
            10 years of industry experience creating together
          </h2>
          <p className="">
            Lightweight Composite Materials was created to deliver custom
            products tailored to your designs. We partner with you early in the
            design phase so that our composites are delivered as 'ready to use'
            as possible. Advances in technologies coupled with our philosophy
            mean that you don't have to settle for off the shelf solutions.
          </p>
        </div>
      </div>
      <div
        id="2"
        className="w-full h-screen flex flex-col justify-center items-center bg-[#8EC3CF] p-4"
      >
        <div className="w-full max-w-xl text-white">
          {' '}
          <p className="text-[#24305E]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut ex
            at urna cursus pellentesque. Morbi tellus arcu, fringilla in aliquet
            a, ullamcorper sed mauris. Praesent aliquet elit quis ante mattis
            molestie. Fusce sed posuere sapien, ut sagittis arcu. Nullam eget mi
            et felis lobortis tincidunt et commodo libero. Nam ac maximus velit,
            id tristique nisi. Fusce eget aliquet dui.
          </p>
        </div>
      </div>
      <div
        id="3"
        className="w-full h-screen flex flex-col justify-center items-center bg-[#24305E] p-4 "
      >
        <div className="w-full max-w-xl text-white">
          {' '}
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut ex
            at urna cursus pellentesque. Morbi tellus arcu, fringilla in aliquet
            a, ullamcorper sed mauris. Praesent aliquet elit quis ante mattis
            molestie. Fusce sed posuere sapien, ut sagittis arcu. Nullam eget mi
            et felis lobortis tincidunt et commodo libero. Nam ac maximus velit,
            id tristique nisi. Fusce eget aliquet dui.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
