import React from 'react'
import Image from "next/image"
import testPost from "@/assets/images/test-post.jpg"
import profileTest from "@/assets/images/profile-test.jpg"

const MostRead = () => {
  return (
    <div className="w-full flex items-center gap-[10px] min-h-[200px] mt-[30px]">
        <Image src={testPost} alt="post" className="rounded-[10px] w-[50%]" />
        {/* post detail */}
        <aside className="p-[15px] flex flex-col gap-[25px]">
            <article className="flex items-center gap-[15px]">
                <div className="flex items-center gap-[10px]"> 
                    <Image src={profileTest} alt="profile-small" className="w-[30px] h-[30px] rounded-[50%]" />
                    <h4> 0xOpBytes </h4>
                </div>
                <div className="w-[4px] bg-[#000] h-[4px] rounded-[50%]" />
                <p> 12 minutes ago </p>
            </article>
            <article className="flex flex-col gap-[10px]">
                  <h2 className="text-[18px] md:text-[25px] lg:text-[35px] font-bold"> What is web3 ? </h2>
                  <p> Web3 refers to the next generation of the internet, where decentralized technologies like blockchain and cryptocurrencies enable users to have more control over their data and interactions. It aims to create a more transparent, secure, and democratic online environment. </p>
              </article>
              <div className="flex items-center gap-[15px]">
                 <h4> Web3 </h4>
                 <div className="w-[4px] bg-[#000] h-[4px] rounded-[50%]" />
                 <p> 4 mins read </p>
              </div>
        </aside>
    </div>
  )
}

export default MostRead