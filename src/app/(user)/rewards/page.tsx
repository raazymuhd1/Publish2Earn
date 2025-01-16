import React from 'react'
import { ClaimButton } from "@/components"

const Rewards = () => {
  return (
    <div className="w-[90%] mx-auto p-[20px]">
        <div className="bg-extra flex items-center gap-[20px] w-full min-h-[400px] p-[15px] rounded-[10px] basis-[250px]">
            <aside className="flex w-[200px] flex-col items-center gap-[10px] bg-main p-[15px] rounded-[10px]">
                <h4 className="font-bold text-[18px] md:text-[22px]"> Daily Login </h4>
                <p className="text-[12px] md:text-[14px] font-normal"> Collect a 100 points daily </p>
                <ClaimButton />
            </aside>

            <div>
               
            </div>
        </div>
    </div>
  )
}

export default Rewards