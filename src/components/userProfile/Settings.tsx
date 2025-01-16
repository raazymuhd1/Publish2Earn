import React from 'react'
import InputField from "./InputField"

const Settings = () => {
  return (
    <section className="w-[70%] mx-auto h-[80vh] flex flex-col gap-[20px] justify-center">
       <h3 className="font-extrabold text-[18px] md:text-[25px] text-center"> Your profile settings </h3>
       {/* settings details */}
       <div className="w-full flex flex-col gap-[20px] bg-extra p-[30px] rounded-[10px] min-h-[500px]">

          <aside className="w-full flex items-center justify-between">
              <InputField label="Wallet address" placeholder="Wallet" />
              <InputField label="Email address" placeholder="email" />
          </aside>

          <aside className="w-full flex items-center justify-between">
              <InputField label="Username" placeholder="username" />
              <InputField label="Email address" placeholder="username" />
          </aside>

          {/* below here i can include user social medias */}
       </div>
    </section>
  )
}

export default Settings