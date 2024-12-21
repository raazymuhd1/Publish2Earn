import React from 'react'
import { ChevronRight } from "lucide-react"
import { dummyPosts } from "@/constants"
import Image from "next/image"
import Link from "next/link"

const LatestPosts = () => {
  return (
    <div className="w-full mt-[25px]">
        <div className="flex items-center justify-between">
            <h2 className="font-bold lg:text-[25px] md:text-[20px] text-[18px]"> Latest Posts </h2>
            <aside className="flex items-center gap-[10px]">
                <h4 className="text-[16px] text-main font-semibold"> See All </h4>
                <ChevronRight className="text-main" />
            </aside>
        </div>

        <article className="flex flex-wrap items-center gap-[20px]">
            { dummyPosts.map(post => (
              <div key={post.id} className="min-h-[300px] flex flex-col gap-[10px] w-[300px] p-[10px]">
                 <Image src={post.image} alt="image-post" className="w-full h-[200px] object-cover rounded-[15px]" />
                 <div className="flex items-center gap-[10px]">
                    <Image src={post.authorImg} alt="author-iimg" className="w-[40px] h-[40px] rounded-[50%]" />
                    <h4 className="text-secondary font-medium"> {post.author} </h4>
                    <p> {post.date.getHours()} </p>
                 </div>
                 <div className="flex flex-col gap-[10px] ">
                    <h1 className="font-bold lg:text-[30px] md:text-[25px] text-[18px] "> {post.title} </h1>
                    <p> {post.contents} </p>
                 </div>
              </div>
            )) }
        </article>

    </div>
  )
}

export default LatestPosts