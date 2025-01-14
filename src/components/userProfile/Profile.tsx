"use client"
import { useState, useReducer } from 'react'
import Image from "next/image"
import profile from "@/assets/images/profile-test.jpg"
import { profileTabs } from "@/constants"

interface Tabs {
  id: number;
  title: string;
  isActive: boolean;
}

function tabsReducer(state, action) {
    
     switch (action.type) {
          case "setActiveTabs": 
            console.log(`state size are ${state}`)
            break;
          default: 
            console.log(state)  
            break;
     }
}

const Profile = () => {
      const [tabs, setTabs] = useState(profileTabs)
      const [state, dispatch] = useReducer(tabsReducer, profileTabs)


    function handleTabsSelection(idx: number) {
        console.log(idx);
        // setTabs(tab => {
        //    return [...tab, {...tab[idx], isActive: true} ]
        //   })
        //   console.log(tabs[0])
       dispatch({ type: "setActiveTabs" })
    }

  return (
    <section className="w-full">

        <div className="w-full">
            <div className="h-[400px] w-full profile_banner" />
            <div className="w-full flex flex-col items-center gap-[10px] translate-y-[-100px]">
                <Image src={profile} alt="profile-img" className="rounded-[50%] h-[200px] w-[200px]" />
                <div className="flex items-start gap-[10px]">
                    <h2 className="font-bold lg:text-[22px]"> Izdihaar Ariiba <sup className="font-normal"> Trader </sup> </h2>
                </div>

                <p className="w-[40%] indent-10"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio reiciendis, amet earum blanditiis tempora soluta, voluptas, placeat error id quam dolor. Nam ab, assumenda quam, laboriosam consequatur quo quia magni voluptates placeat, adipisci quae et earum ratione sapiente porro ea dignissimos libero ut pariatur error! Cum adipisci sint consequuntur optio? </p>
            </div>
        </div>

        {/* make 3 tabs below here (posts, rewards, edit profile) */}
        <div className="w-[90%] mx-auto mt-[-20px] border-t-[1.5px] border-line bg-extra rounded-[10px] min-h-[300px] p-[20px]">

           <div className="w-full flex items-center justify-center gap-[60px]">
             { tabs.length > 0 && tabs.map((tab, idx) => (
                <div 
                  onClick={() => handleTabsSelection(idx)}
                  className={`cursor-pointer bg-extra2 hover:bg-extra3 hover:text-[#fff] p-[10px] ${tab.isActive && "bg-[red]"} rounded-[8px]`} key={tab.id}>
                  <h4 className="font-semibold"> { tab.title } </h4>
                </div>
             )) }
           </div>

           <div className="mt-[40px] w-full h-[fit-content]">
             <h4 className="text-[#fff] font-semibold md:text-[18px] text-center text-[16px]"> No post yet </h4>
           </div>
        </div>
    </section>
  )
}

export default Profile