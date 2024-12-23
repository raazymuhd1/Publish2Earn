import React from 'react'
import { ChevronRight } from "lucide-react"
import { dummyPosts } from "@/constants"
import Image from "next/image"
import Link from "next/link"

const LatestPosts = () => {
  return (
    <div className="w-full mt-[25px]">
        <div className="flex items-center justify-between">
            <h2 className="font-bold text-textMain lg:text-[25px] md:text-[20px] text-[18px]"> Latest Posts </h2>
            <Link href="/posts" className="flex items-center gap-[10px]">
                <h4 className="text-[16px] md:text-[20px] text-main font-bold"> See All </h4>
                <ChevronRight className="text-main" />
            </Link>
        </div>

        <article className="flex flex-wrap items-center gap-[20px] mt-[20px]">
            { dummyPosts.map(post => (
              <div key={post.id} className="min-h-[300px] max-h-[400px] flex flex-col gap-[10px] min-w-[300px] max-w-[400px] p-[10px] cursor-pointer text-textMain">
                 <Image src={post.image} alt="image-post" className="w-full h-[200px] object-cover rounded-[15px]" />
                 <div className="flex items-center gap-[10px]">
                    <Image src={post.authorImg} alt="author-iimg" className="w-[40px] h-[40px] rounded-[50%]" />
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