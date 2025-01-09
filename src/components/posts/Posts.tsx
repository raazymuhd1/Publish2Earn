import React from 'react'
import { ChevronRight } from "lucide-react"
import { dummyPosts } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Title from "./Title"

const Posts = () => {
  return (
    <div className="w-full mt-[35px]">

        <article className="flex flex-wrap items-center lg:justify-start justify-center gap-[20px] mt-[20px]">
            { dummyPosts.map(post => (

              <Link href="/post-details/1" key={post.id} 
                className="min-h-[200px] max-h-[fit-content] global_shadow border-[3px] border-line flex flex-col gap-[10px] min-w-[250px] max-w-[350px] p-[10px] cursor-pointer text-secondary bg-extra hover:scale-[1] transition-[transform] duration-500 rounded-[15px]">
                 <Image src={post.image} alt="image-post" className="w-full h-[20%] object-cover rounded-[15px]" />
                 <div className="flex items-center gap-[10px]">
                    <Image src={post.authorImg} alt="author-img" className="w-[40px] h-[40px] rounded-[50%]  hover:scale-[1.1] transition-all duration-[1s]" />
                    <h4 className="font-bold text-[14px] md:text-[16px] lg:text-[18px] text-extra3"> {post.author} </h4>
                    <div className="w-[4px] bg-secondary h-[4px] rounded-[50%]" />
                    <p className="text-secondary"> {post.date.getHours()} </p>
                 </div>
                 <div className="flex flex-col gap-[10px] w-full">
                    <h1 className="font-extrabold lg:text-[20px] md:text-[18px] text-[16px] whitespace-normal w-[80%] text-main"> {post.title} </h1>
                    <p className="w-full lg:text-[16px] text-[14px]"> {post.contents} </p>
                 </div>
              </Link>

            )) }
        </article>

    </div>
  )
}

export default Posts