import React from 'react'
import Title from "./Title"
import Image from "next/image"
import Link from "next/link"
import PostInfo from "./PostInfo"
import { dummyMustRead } from '@/constants'
// dummy pictures
import profilePict from "@/assets/images/profile-test.jpg"
import guerilla from "@/assets/images/guerrillabuzz.jpg"
import ugochukwu from "@/assets/images/ugochukwu.jpg"

const MustRead = () => {
  return (
    <div className="min-h-[500px] mt-[45px]">
      <Title title="Must Read" />

      {/* articles posts */}
      <article className="flex items-center justify-center gap-[20px] mt-[25px] h-[550px]">
            <aside
                className="min-h-full global_shadow border-[3px] border-line flex flex-col gap-[10px]  p-[10px] w-[25%] cursor-pointer text-secondary bg-extra hover:scale-[1.1] transition-[transform] duration-500">
                 <Image src={guerilla} alt="image-post" className="w-full h-[200px] object-cover rounded-[15px]" />
                <PostInfo 
                  { ...{ authorName: "Tommy hawk", authorPic: profilePict, postDate: new Date(), title: "How to leverage the benefits of AI ?", description: "Leveraging the benefits of AI can revolutionize various aspects of your business. From automating mundane tasks to making data-driven decisions, AI can help you streamline processes, increase efficiency, and drive innovation. Learn how to harness the power of AI to take your business to the next level.", customStyle: false, textStyle: "text-secondary" } } 
                  />
            </aside>

          <div className="h-full w-[40%]">
             <Image src={ugochukwu} alt="post-img" className="h-full w-full bg-textMain" />
             <PostInfo 
                 { ...{ authorName: "Tommy hawk", authorPic: profilePict, postDate: new Date(), title: "How to leverage the benefits of AI ?", description: "Leveraging the benefits of AI can revolutionize various aspects of your business. From automating mundane tasks to making data-driven decisions, AI can help you streamline processes, increase efficiency, and drive innovation. Learn how to harness the power of AI to take your business to the next level.", customStyle: true, textStyle: "text-secondary" } } 
              />
          </div>

          <aside className="flex flex-col items-center gap-[10px] h-full w-[25%]">
             { dummyMustRead.map(must => (
                  <div
                    key={must.id}
                    className="h-[50%] global_shadow border-[3px] border-line flex flex-col gap-[10px]  p-[10px] w-full cursor-pointer text-secondary bg-extra hover:scale-[1.1] transition-transform duration-500">
                    <Image src={must.image} alt="image-post" className="w-full h-[50%] object-cover rounded-[15px]" />
                    <div className=" w-full">
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
                </div>
             )) }
          </aside>
       </article>
    </div>
  )
}

export default MustRead