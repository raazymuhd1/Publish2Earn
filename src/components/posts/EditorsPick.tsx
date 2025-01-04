import React from 'react'
import Image from "next/image"
import Title from "./Title"
import { dummyEditorsPick } from '@/constants'
import guerilla from "@/assets/images/guerrillabuzz.jpg"

const EditorsPick = () => {
  return (
    <section className='mt-[40px]'>
        <Title title="Editor's Pick" />

        <article className="min-h-[450px] flex flex-col gap-[15px]">
            <div className="w-full h-[50%]">
               <Image src={guerilla} alt="img" className="w-full" />
            </div>

            <div className="flex items-center gap-[20px]">
              { dummyEditorsPick.map(editor => (
                 <aside 
                  key={editor.id} className="">
                      <Image src={editor.image} alt="img" className="" />
                 </aside>
              )) }
            </div>
        </article>

    </section>
  )
}

export default EditorsPick