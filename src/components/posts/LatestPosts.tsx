import React from 'react'
import { ChevronRight } from "lucide-react"
import { dummyPosts } from "@/constants"
import Image from "next/image"
import Title from "./Title"

const LatestPosts = () => {
  return (
    <div className="w-full mt-[25px]">
       <Title title="Latest Posts" />

        <article className="flex flex-wrap items-center lg:justify-left justify-center gap-[20px] mt-[20px]">
            { dummyPosts.map(post => (
              <div key={post.id} 
                className="min-h-[300px] max-h-[fit-content] global_shadow border-[3px] border-line flex flex-col gap-[10px] min-w-[250px] max-w-[400px] p-[10px] cursor-pointer text-secondary bg-extra hover:scale-[1.2] transition-[transform_1s]">
                 <Image src={post.image} alt="image-post" className="w-full h-[200px] object-cover rounded-[15px]" />
                 <div className="flex items-center gap-[10px]">
                    <Image src={post.authorImg} alt="author-iimg" className="w-[40px] h-[40px] rounded-[50%]  hover:scale-[1.1] transition-all duration-[1s]" />
                    <h4 className="font-semibold text-textMain"> {post.author} </h4>
                    <div className="w-[4px] bg-textMain h-[4px] rounded-[50%]" />
                    <p> {post.date.getHours()} </p>
                 </div>
                 <div className="flex flex-col gap-[10px] w-full">
                    <h1 className="font-extrabold lg:text-[30px] md:text-[25px] text-[18px] whitespace-normal w-[80%] text-main"> {post.title} </h1>
                    <p className="w-full"> {post.contents} </p>
                 </div>
              </div>
            )) }
        </article>

    </div>
  )
}

export default LatestPosts