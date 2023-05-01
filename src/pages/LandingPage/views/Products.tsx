import DiamondDot from '../../../../assets/icons/DiamondDot'
import bg1 from '../../../../assets/images/Group 68.png'
import bg2 from '../../../../assets/images/Picture1 1.png'
import bg3 from '../../../../assets/images/image 2.png'
import { useLocation } from 'react-router-dom'

// interface ProductsProps {}

const Products = () => {
  const location = useLocation()
  const hash = location.hash
  return (
    <div className="w-screen md:h-screen md:overflow-hidden">
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
            <a href="#1">Products</a>
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
              <li className="inline-flex items-center">
                <a href="#4">
                  <hr
                    className={` border-2 ${
                      hash === '#4'
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
        className="w-full h-screen flex flex-col justify-center items-center bg-[#278FA7] "
      >
        <div className="w-full max-w-sm text-white">
          {' '}
          <h6 className="inline-flex justify-center items-center gap-2 text-[#24305E] font-semibold">
            <DiamondDot /> Products
          </h6>
          <h2 className="font-semibold font-Playfair text-4xl mb-4">
            Products according to your needs{' '}
          </h2>
          <p className="">
            Our experience can provide you with laminated sandwich composites,
            high performance carbon and epoxy composites to unique
            three-dimensional structural composites that are designed to
            perform.
          </p>
        </div>
      </div>
      <div id="2" className="w-screen h-screen flex ">
        <div className="w-1/2 h-screen bg-[#8EC3CF] absolute left-0 top-0 -z-20"></div>
        <div className="w-1/2 h-screen bg-[#278FA7] absolute right-0 top-0 -z-20"></div>
        <div className="w-screen h-screen flex justify-center items-center">
          <div className="w-full max-w-[880px] relative flex flex-col-reverse md:flex-row  items-end">
            <div className="absolute bg-black min-h-[280px] md:min-h-[360px] md:w-[340px] w-full -mb-5 md:right-3  md:m-0 md:bottom-3 z-10 text-transparent px-6 py-8">
              <h3 className="font-Playfair font-semibold text-2xl mb-2">
                eV Composites™
              </h3>
              <p className="text-sm">
                Our lightweight composites are specifically designed for the
                electric delivery vehicle market. Our primary feature is a
                one-piece floor that arrives ready to install. LCMI will
                collaborate with your development engineers to shape the floor
                to your design. Attachment points, stiffeners, and other
                functional elements can be added in our process so that assembly
                steps are eliminated. Innovative ideas like integral lighting
                and sensors are not out of the question. Contact us and let us
                build what you need.
              </p>
            </div>

            <div className="md:absolute bg-white min-h-fit md:min-h-[360px] md:w-[340px] w-full max-w-xl md:right-0 md:top-1/2 md:-translate-y-1/2 z-20 px-6 py-8 -mt-6 md:mt-0">
              <h3 className="font-Playfair font-semibold text-2xl mb-2">
                eV Composites™
              </h3>
              <p className="text-sm">
                Our lightweight composites are specifically designed for the
                electric delivery vehicle market. Our primary feature is a
                one-piece floor that arrives ready to install. LCMI will
                collaborate with your development engineers to shape the floor
                to your design. Attachment points, stiffeners, and other
                functional elements can be added in our process so that assembly
                steps are eliminated. Innovative ideas like integral lighting
                and sensors are not out of the question. Contact us and let us
                build what you need.
              </p>
            </div>
            <div className="md:w-4/5 w-full bg-white  md:min-h-[440px] relative flex justify-center items-center">
              <img src={bg1} alt="" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
      <div id="3" className="w-screen h-screen flex ">
        <div className="w-1/2 h-screen   bg-[#278FA7] absolute left-0 top-0 -z-20"></div>
        <div className="w-1/2 h-screen bg-[#8EC3CF] absolute right-0 top-0 -z-20"></div>
        <div className="w-screen h-screen flex justify-center items-center">
          <div className="w-full max-w-[980px] relative flex flex-col-reverse md:flex-row  items-end">
            <div className="absolute bg-black min-h-[220px] md:min-h-[360px] md:w-[340px] w-full -mb-5 md:right-3  md:m-0 md:bottom-3 z-10 text-transparent px-6 py-8">
              <h3 className="font-Playfair font-semibold text-2xl mb-2">
                Custom Composites{' '}
              </h3>
              <p className="text-sm">
                LCMI is committed to pushing the limits of rapid development &
                turnaround of custom composites by using the power of rapid
                prototyping, additive manufacturing and CAD simulation. We can
                take your design prints and build carbon fiber or glass
                composites in minimal time. We also have the ability to 3D scan
                your existing or obsolete parts to create new designs that meet
                or exceed the performance of the old.
              </p>
            </div>

            <div className="md:absolute bg-white min-h-fit md:min-h-[360px] md:w-[340px] w-full max-w-xl md:right-0 md:top-1/2 md:-translate-y-1/2 z-20 px-6 py-8 -mt-6 md:mt-0">
              <h3 className="font-Playfair font-semibold text-2xl mb-2">
                Custom Composites{' '}
              </h3>
              <p className="text-sm">
                LCMI is committed to pushing the limits of rapid development &
                turnaround of custom composites by using the power of rapid
                prototyping, additive manufacturing and CAD simulation. We can
                take your design prints and build carbon fiber or glass
                composites in minimal time. We also have the ability to 3D scan
                your existing or obsolete parts to create new designs that meet
                or exceed the performance of the old.
              </p>
            </div>
            <div className="md:w-4/5 w-full bg-white  md:min-h-[440px] relative flex justify-center items-center">
              <img src={bg2} alt="" className="w-[470px] h-[330px]" />
            </div>
          </div>
        </div>
      </div>
      <div id="4" className="w-screen h-screen flex ">
        <div className="w-1/2 h-screen bg-[#8EC3CF] absolute left-0 top-0 -z-20"></div>
        <div className="w-1/2 h-screen bg-[#278FA7] absolute right-0 top-0 -z-20"></div>
        <div className="w-screen h-screen flex justify-center items-center">
          <div className="w-full max-w-[980px] relative flex flex-col-reverse md:flex-row  items-end">
            <div className="absolute bg-black min-h-[200px] md:min-h-[360px] md:w-[340px] w-full -mb-5 md:right-3  md:m-0 md:bottom-3 z-10 text-transparent px-6 py-8">
              <h3 className="font-Playfair font-semibold text-2xl mb-2">
                Laminates{' '}
              </h3>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                ut ex at urna cursus pellentesque. Morbi tellus arcu, fringilla
                in aliquet a, ullamcorper sed mauris. Praesent aliquet elit quis
                ante mattis molestie. Fusce sed posuere sapien, ut sagittis
                arcu. Nullam eget mi et felis lobortis tincidunt et commodo
                libero.
              </p>
            </div>

            <div className="md:absolute bg-white min-h-fit md:min-h-[360px] md:w-[340px] w-full max-w-xl md:right-0 md:top-1/2 md:-translate-y-1/2 z-20 px-6 py-8 -mt-6 md:mt-0">
              <h3 className="font-Playfair font-semibold text-2xl mb-2">
                Laminates{' '}
              </h3>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                ut ex at urna cursus pellentesque. Morbi tellus arcu, fringilla
                in aliquet a, ullamcorper sed mauris. Praesent aliquet elit quis
                ante mattis molestie. Fusce sed posuere sapien, ut sagittis
                arcu. Nullam eget mi et felis lobortis tincidunt et commodo
                libero.
              </p>
            </div>
            <div className="md:w-4/5 w-full bg-white  md:min-h-[440px] relative flex justify-center items-center">
              <img src={bg3} alt="" className="w-[680px] h-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
