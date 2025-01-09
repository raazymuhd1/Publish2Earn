import React from 'react'

const Hero = () => {
  return (
    <div 
        className="h-[400px] low_opacity_bg border-[3px] global_shadow border-line text-textMain flex flex-col justify-center items-center w-full rounded-[10px] mt-[20px]">
        <h4 className="text-secondary"> Welcome to <i className="font-semibold text-[14px] md:text-[18px] lg:text-[22px] text-extra2"> <strong> Publish2Earn </strong> </i> </h4>
        <h2 className="w-[80%] font-bold text-secondary lg:text-[45px] md:text-[30px] text-[20px] text-center"> Share your web3 knowledge with others, 
          And earn rewards </h2>
    </div>
  )
}

export default Hero