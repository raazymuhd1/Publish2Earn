import React from 'react'
import Link from "next/link"
import Image from "next/image"
import { navLists } from '@/constants'
import { Bell, SquarePen } from "lucide-react"
import profileTest from "@/assets/images/profile-test.jpg"

const Nav = () => {
  return (
    <nav className="w-[90%] flex justify-between text-[#f2f2f2] items-center mx-auto h-full">
        <aside className="flex items-center gap-[20px]"> 
            <Link
               href="/" 
               className="text-main font-bold text-[16px] md:text-[20px] lg:text-[1rem+1rem] cursor-pointer"> Publish2Earn </Link>
            <div className="w-[2px] h-[20px] bg-[#f2f2f2]" />
            <div className={`flex items-center gap-[20px]`}>
               { navLists.map(list => (
                  <Link
                     className="font-semibold" 
                     href={list.url} 
                     key={list.id}> { list.value } 
                  </Link>
               )) }
            </div>
        </aside>

        {/* right side of navbar */}
        <aside className="flex items-center gap-[20px]">
           <Link href="/write" className="flex items-center gap-[10px] cursor-pointer">
             <SquarePen className="text-[18px]" />
             <h3> Write </h3>
           </Link>
           <Bell className="text-[18px]" />
           <Link href="/profile" className="cursor-pointer">
              <Image src={profileTest} className="w-[40px] h-[40px] rounded-[50%]" alt="profile" />
           </Link>
        </aside>
    </nav>
  )
}

export default Nav