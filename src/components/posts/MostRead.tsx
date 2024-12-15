import React from 'react'
import Image from "next/image"
import testPost from "@/assets/images/test-post.jpg"

const MostRead = () => {
  return (
    <div className="w-full min-h-[300px] mt-[1rem+14px]">
        <Image src={testPost} alt="post" className="rounded-[10px] w-[50%] h-full" />
    </div>
  )
}

export default MostRead