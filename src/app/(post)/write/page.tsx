"use client"
import {useState} from 'react'
import { Editor } from 'primereact/editor';

const WritePage = () => {
    const [text, setText] = useState("")

  return (
    <section className="h-full w-[90%] mx-auto">
       <Editor 
          className="bg-textMain h-screen rounded-[10px] text-[#fff]"
          value={text} 
          onTextChange={(e) => {
            console.log(e.htmlValue!)
            setText(e?.htmlValue!)
          }} 
          style={{ height: '320px' }} />
    </section>
  )
}

export default WritePage