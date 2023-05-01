import landingbg from '../../../../assets/images/Group.png'

// interface LandingProps {}

const Landing = () => {
  return (
    <div className="w-screen md:h-screen md:overflow-hidden flex flex-wrap">
      <div className="w-full h-screen md:max-w-[65%] bg-[#8EC3CF] flex flex-col justify-end py-10">
        <img
          src={landingbg}
          alt="background image"
          className="w-[480px] h-auto self-center"
        />
        <div className="text-white md:px-8 px-4 mt-6">
          <h4 className="font-semibold md:text-xl text-lg">
            Lightweight Composite Materials Inc
          </h4>
          <hr className="w-8 text-white border-2 mb-2 " />
          <h3 className="font-semibold text-2xl md:text-3xl  md:max-w-[38ch]">
            We create custom composite materials designed to your specifications
          </h3>
        </div>
      </div>
      <div className="w-full md:h-screen md:max-w-[35%] font-semibold text-white ">
        <div className="bg-[#278FA7] w-full md:h-1/3 md:py-6 flex flex-col justify-end px-8 py-6">
          <h6 className="font-Poppins">Products</h6>
          <hr className="w-8 text-white border-2 mb-2 " />
          <h5 className="text-2xl font-Playfair max-w-[17ch]">
            Composites for Electric Vehicles
          </h5>
        </div>
        <div className="bg-[#16586C] md:h-1/3 md:py-6 flex flex-col justify-end px-8 py-6">
          <h6 className="font-Poppins">Products</h6>
          <hr className="w-8 text-white border-2 mb-2 " />
          <h5 className="text-2xl font-Playfair max-w-[17ch]">
            Custom Composites{' '}
          </h5>
        </div>
        <div className="bg-[#24305E] md:h-1/3 md:py-6 flex flex-col justify-end px-8 py-6">
          <h6 className="font-Poppins">Products</h6>
          <hr className="w-8 text-white border-2 mb-2 " />
          <h5 className="text-2xl font-Playfair max-w-[17ch]">
            Laminated Composites
          </h5>
        </div>
      </div>
    </div>
  )
}

export default Landing
