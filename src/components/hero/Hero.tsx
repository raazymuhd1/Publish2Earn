import React from 'react'

const Hero = () => {
  return (
    <div 
        className="h-[400px] bg-main border-[3px] global_shadow border-line text-textMain flex flex-col justify-center items-center w-full rounded-[10px] mt-[20px]">
        <h4> Welcome to <i className="font-semibold text-extra2"> <strong> Publish2Earn </strong> </i> </h4>
        <h2 className="font-bold lg:text-[25px] md:text-[18px] text-[16px]"> Share your web3 knowledge with others, And earn rewards </h2>
    </div>
  )
}

export default Hero