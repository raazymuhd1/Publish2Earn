import React from 'react'
import Link from "next/link"
import { footerMenuList } from "@/constants"

const Footer = () => {
  return (
    <div className="h-[150px] w-full mt-[40px] bg-extra p-[20px]">

        <div className="w-[90%] mx-auto h-full flex items-center justify-between">
          <h2 className="text-[20px] md:text-[30px] font-extrabold text-main"> Publish2Earn </h2>
          <p className="text-extra3"> @copyright P2E | 2025 </p>
          <aside className="flex items-center gap-[20px]">
              { footerMenuList.map(menu => (
                <Link
                  className="font-normal text-[16px] md:text-[18px] text-main lowercase underline" 
                  href={menu.url} key={menu.id}> {menu.title} </Link>
              )) 
              }
          </aside>
        </div>

    </div>
  )
}

export default Footer