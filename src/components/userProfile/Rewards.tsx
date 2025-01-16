import React from 'react'
import { rewards } from '@/constants'
import { ClaimButton } from "@/components"

const Rewards = () => {
  return (
      <div className="bg-extra flex flex-col items-center justify-center gap-[40px] w-full min-h-[650px] p-[25px] rounded-[10px] mt-[40px]">
           <div className="w-[70%] flex items-center justify-between gap-[20px]">
            { rewards.map(reward => (
                <aside key={reward.id} className="flex min-w-[340px] h-[200px] flex-col items-center justify-center gap-[10px] bg-main p-[15px] rounded-[10px]">
                    <h4 className="font-bold text-[18px] md:text-[22px]"> { reward.title } </h4>
                    <p className="text-[12px] md:text-[14px] font-normal"> { reward.desc } </p>
                    <ClaimButton />
                </aside>
            )) }
           </div>

           <div className="w-[70%] min-h-[300px] flex flex-col gap-[20px] bg-main rounded-[10px] p-[20px] items-center">
               <h3 className="font-bold text-[18px] md:text-[25px] lg:text-[35px]"> Your total collected points </h3>
               <p className="text-[12px] md:text-[14px] lg:text-[16px]"> All of your collected points can be converted into our tokens, that later on you can withdraw into your wallet </p>
               <h1 className="text-[20px] md:text-[35px] lg:text-[45px] font-extrabold"> 2000 Points </h1>
           </div>
      </div>
  )
}

export default Rewards