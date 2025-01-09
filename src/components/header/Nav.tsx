"use client"
import {useState} from 'react'
import Link from "next/link"
import Image from "next/image"
import { navLists } from '@/constants'
import { Bell, SquarePen } from "lucide-react"
import { Button } from '../ui/button'
import profileTest from "@/assets/images/profile-test.jpg"

const Nav = () => {
     const [loggedIn, setLoggedIn] = useState<boolean>(false)

  return (
    <nav className="w-[90%] flex justify-between text-textMain items-center mx-auto h-full">
        <aside className="flex items-center gap-[20px]"> 
            <Link
               href="/" 
               className="font-extrabold text-extra text-[16px] md:text-[20px] lg:text-[35px] cursor-pointer"> Publish2Earn 
            </Link>
            <div className="w-[2px] h-[20px] bg-[#f2f2f2]" />
            <div className={`flex items-center gap-[20px]`}>
               { navLists.map(list => (
                  <Link
                     className="font-bold" 
                     href={list.url} 
                     key={list.id}> { list.value } 
                  </Link>
               )) }
            </div>
        </aside>

        {/* right side of navbar */}
        <aside className="flex items-center gap-[20px]">
           <Link href="/write" className={`flex items-center gap-[10px] ${loggedIn ? "inline" : "hidden"} cursor-pointer`}>
             <SquarePen className="text-[18px] font-bold" />
             <h3 className="font-bold"> Write </h3>
           </Link>
           <Bell className={`text-[18px] font-bold ${loggedIn ? "inline" : "hidden"} `} />
           <Link href="/profile" className={`cursor-pointer ${loggedIn ? "inline" : "hidden"} `}>
              <Image src={profileTest} className="w-[40px] h-[40px] rounded-[50%]  global_img_shadow" alt="profile" />
           </Link>
           <Link href="/signin" className={`bg-main border-[2.5px] border-line h-[50px] global_shadow font-bold text-textMain min-w-[150px] ${loggedIn ? "hidden" : "inline"} hover:text-secondary hover:bg-line text-[16px] md:text-[18px] p-[10px] text-center`}> Sign In 
           </Link>
        </aside>
    </nav>
  )
}

export default Nav