import React from 'react'
import Title from "./Title"
import Image from "next/image"
import Link from "next/link"
import { dummyMustRead } from '@/constants'
// dummy pictures
import profilePict from "@/assets/images/profile-test.jpg"
import guerilla from "@/assets/images/guerrillabuzz.jpg"
import ugochukwu from "@/assets/images/ugochukwu.jpg"

const MustRead = () => {
  return (
    <div className="min-h-[500px] mt-[25px]">
      <Title title="Must Read" />

      {/* articles posts */}
      <article className="flex items-center gap-[20px] min-h-[250px]">
            <aside
                className="min-h-full global_shadow border-[3px] border-line flex flex-col gap-[10px]  p-[10px] w-[30%] cursor-pointer text-secondary bg-extra hover:scale-[1.2] transition-[transform_1s]">
                 <Image src={guerilla} alt="image-post" className="w-full h-[200px] object-cover rounded-[15px]" />
                 <div className="flex items-center gap-[10px]">
                    <Image src={profilePict} alt="author-iimg" className="w-[40px] h-[40px] rounded-[50%]  hover:scale-[1.1] transition-all duration-[1s]" />
                    <h4 className="font-semibold text-extra3 text-[14px] md:text-[16px] lg:text-[18px]"> Tommy Hawk </h4>
                    <div className="w-[4px] bg-secondary h-[4px] rounded-[50%]" />
                    <p className="text-[10px] md:text-[14px] lg:text-[16px]"> { new Date().toDateString() } </p>
                 </div>
                 <div className="flex flex-col gap-[10px] w-full">
                    <h1 className="font-extrabold lg:text-[22px] md:text-[18px] text-[16px] whitespace-normal w-[80%] text-main"> Unlocking the Power of AI in Blockchain </h1>
                    <p className="w-full text-[10px] md:text-[14px] lg:text-[16px] font-light"> The integration of Artificial Intelligence (AI) with blockchain technology has the potential to revolutionize various industries. AI can enhance the security, efficiency, and decision-making processes within blockchain networks. Some of the key benefits include:</p>
                 </div>
            </aside>

          <div className="h-full w-[40%]">
             <Image src={ugochukwu} alt="post-img" className="h-[80%] w-full" />
          </div>

          <aside className="flex flex-col items-center gap-[10px] h-full w-[30%]">
             { dummyMustRead.map(must => (
                  <div
                    key={must.id}
                    className="h-[30%] global_shadow border-[3px] border-line flex flex-col gap-[10px]  p-[10px] w-full cursor-pointer text-secondary bg-extra hover:scale-[1.2] transition-[transform_1s]">
                    <Image src={must.image} alt="image-post" className="w-full h-[20%] object-cover rounded-[15px]" />
                    <div className="flex items-center gap-[10px]">
                        <Image src={must.authorImg} alt="author-iimg" className="w-[40px] h-[40px] rounded-[50%]  hover:scale-[1.1] transition-all duration-[1s]" />
                        <h4 className="font-semibold text-extra3"> { must.author } </h4>
                        <div className="w-[4px] bg-secondary h-[4px] rounded-[50%]" />
                        <p> { new Date().toDateString() } </p>
                    </div>
                    <div className="flex flex-col gap-[10px] w-full">
                        <h1 className="font-extrabold lg:text-[18px] md:text-[16px] text-[14px] whitespace-normal w-[80%] text-main"> { must.title } </h1>
                    </div>
                </div>
             )) }
          </aside>
       </article>
    </div>
  )
}

export default MustRead