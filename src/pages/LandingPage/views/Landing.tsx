import landingbg from '../../../../assets/images/Group.png'
// import LandingImg from '../../../../assets/icons/Landing'
import { gsap } from 'gsap'
import { useEffect, useLayoutEffect, useRef } from 'react'
import FadeIn from '../../Components/FadeIn'
import { motion, useAnimation } from 'framer-motion'
import Preloader from '../../Components/Preloader'
import useOnScreen from '../../../hooks/useScreenOn'
import { useInView } from 'react-intersection-observer'

const Landing = () => {
  const pathRef = useRef(null)
  const container = useRef(null)
  // const controls = useAnimation()
  // const [ref, inView] = useInView()
  // useEffect(() => {
  //   if (inView) {
  //     controls.start('visible')
  //   }
  // }, [controls, inView])
  // const squareVariants = {
  //   visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  //   hidden: { opacity: 0, scale: 0 }
  // }

  useEffect(() => {
    // gsap.to(pathRef.current, {
    //   duration: 2,
    //   drawSVG: '0%',
    //   ease: 'power2.inOut',
    //   delay: 1
    // })
    // gsap.to(pathRef.current, {
    //   ease: 'elastic',
    //   yoyo: true,
    //   duration: 4,
    //   repeat: -1,
    //   x: 300
    // })
    // gsap.to(pathRef.current, {
    //   ease: 'elastic',
    //   yoyo: true,
    //   duration: 1,
    //   repeat: -1,
    //   x: 0
    // })
  }, [])
  // useLayoutEffect(() => {}, [])
  const Details = (props: any) => {
    const { className, body } = props
    const controls = useAnimation()
    const [ref, inView] = useInView()
    useEffect(() => {
      if (inView) {
        controls.start('visible')
      }
    }, [controls, inView])
    const squareVariants = {
      visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
      hidden: { opacity: 0, scale: 0 }
    }
    return (
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={squareVariants}
        className={className}
      >
        <h6 className="font-Poppins">Products</h6>
        <hr className="w-8 text-white border-2 mb-2 " />
        <h5 className="text-2xl font-Playfair max-w-[17ch]">{body}</h5>
      </motion.div>
    )
  }

  return (
    <div className="w-screen md:h-screen md:overflow-hidden flex flex-wrap">
      {/* <Preloader /> */}
      <div className="w-full h-screen md:max-w-[65%] bg-[#8EC3CF] flex flex-col justify-end py-10">
        {/* <motion.div
          initial={{ scale: 2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, x: 100 }}
          transition={{
            delay: 1,
            duration: 2
          }}
          className="self-center landing"
        > */}
        <img
          src={landingbg}
          alt="background image"
          className="w-[480px] h-auto self-center landing"
        />
        {/* </motion.div> */}

        <motion.div
          initial={{ scale: 2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            delay: 1,
            duration: 2
          }}
        >
          <div className="text-white md:px-8 px-4 mt-6">
            <h4 className="font-semibold md:text-xl text-lg">
              Lightweight Composite Materials Inc
            </h4>
            <hr className="w-8 text-white border-2 mb-2 " />
            <h3 className="font-semibold text-2xl md:text-3xl  md:max-w-[38ch]">
              We create custom composite materials designed to your
              specifications
            </h3>
          </div>
        </motion.div>
      </div>

      <div className="w-full md:h-screen md:max-w-[35%] font-semibold text-white ">
        <Details
          className="bg-[#278FA7] w-full md:h-1/3 md:py-6 flex flex-col justify-end px-8 py-6"
          body={' Composites for Electric Vehicles'}
        />

        <Details
          className="bg-[#16586C] md:h-1/3 md:py-6 flex flex-col justify-end px-8 py-6"
          body={' Custom Composites'}
        />
        <Details
          className="bg-[#24305E] md:h-1/3 md:py-6 flex flex-col justify-end px-8 py-6"
          body={'Laminated Composites'}
        />
      </div>
    </div>
  )
}

export default Landing
