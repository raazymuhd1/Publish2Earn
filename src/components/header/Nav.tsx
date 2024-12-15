import React from 'react'
import Link from "next/link"
import { navLists } from '@/constants'
import { Bell, SquarePen } from "lucide-react"

const Nav = () => {
  return (
    <nav className="w-[90%] flex justify-between items-center mx-auto h-full">
        <aside className="flex items-center gap-[20px]"> 
            <h2 className="text-[red] font-bold"> Publish2Earn </h2>
            <div className="w-[2px] h-[20px] bg-[#000]" />
            <div className={`flex items-center gap-[20px]`}>
               { navLists.map(list => (
                  <Link href={list.url} key={list.id}> { list.value } </Link>
               )) }
            </div>
        </aside>

        {/* right side of navbar */}
        <aside className="flex items-center gap-[20px]">
           <div className="flex items-center gap-[10px]">
             <SquarePen className="text-[18px]" />
             <h3> Write </h3>
           </div>
           <Bell className="text-[18px]" />
        </aside>
    </nav>
  )
}

export default Nav