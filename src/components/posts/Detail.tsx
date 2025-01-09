"use client"
import React from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import ugocukwo from "@/assets/images/ugochukwu.jpg"

const Detail = () => {
     const params = useParams();

     console.log(params)

  return (
    <div>
        {/* top info */}
        <aside className="flex w-full h-[50px] items-center bg-line gap-[10px] p-[15px]">
           <h4 className="text-[14px] w-[90%] mx-auto md:text-[16px] lg:text-[18px] text-secondary"> Home <strong className="font-bold text-main"> {">"} </strong> Post <strong className="font-bold text-main"> {">"} </strong>  Defi </h4>
        </aside>
        {/* post banner */}
        <Image src={ugocukwo} alt="post-banner" className="w-full min-h-[100px]" />
    </div>
  )
}

export default Detail