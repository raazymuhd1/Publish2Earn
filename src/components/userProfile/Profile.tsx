"use client"
import { useState } from 'react'
import Image from "next/image"
import profile from "@/assets/images/profile-test.jpg"
import { profileTabs } from "@/constants"

const Profile = () => {
      const [isActive, setIsActive] = useState<boolean>(false)

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
        <div className="w-[90%] mx-auto mt-[30px] flex flex-col gap-[40px]">
             { profileTabs.map(profile => (
                <div className="cursor-pointer hover:bg-extra3" key={profile.id}>
                  <h4 className="font-semibold"> { profile.title } </h4>
                </div>
             )) }
        </div>
    </section>
  )
}

export default Profile