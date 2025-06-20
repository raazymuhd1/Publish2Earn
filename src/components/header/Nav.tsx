"use client"
import {useState} from 'react'
import Link from "next/link"
import Image from "next/image"
import { navLists, userDetailTabs } from '@/constants'
import { Bell, SquarePen } from "lucide-react"
import { Button } from '../ui/button'
import profileTest from "@/assets/images/profile-test.jpg"


const Nav = () => {
     const [loggedIn, setLoggedIn] = useState<boolean>(true)

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
           <div className="flex min-h-[150px] flex-col relative top-[100px]">
               <Image src={profileTest} className="w-[40px]  h-[40px] rounded-[50%] cursor-pointer global_img_shadow bg-[red]" alt="profile" />
               <aside className="w-[150px] h-[150px] flex flex-col gap-[10px] items-center justify-center bg-extra absolute top-0 p-[10px] rounded-[10px]"> 
                   { userDetailTabs.map(menu => (
                     <Link
                        className="font-semibold text-[#fff] text-[18px]" href={menu.url} key={menu.id}> {menu.title} </Link>
                   )) }
               </aside>
            </div>
           <Link href="/signin" className={`bg-main border-[2.5px] border-line h-[50px] global_shadow font-bold text-textMain min-w-[150px] ${loggedIn ? "hidden" : "inline"} hover:text-secondary hover:bg-line text-[16px] md:text-[18px] p-[10px] text-center`}> Sign In 
           </Link>
        </aside>
    </nav>
  )
}

export default Nav