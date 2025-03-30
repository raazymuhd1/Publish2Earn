"use client"
import { useState } from 'react'
import { Search } from 'lucide-react'
import PostTags from './PostTags'
import Posts from "./Posts"
import { postTags } from '@/constants'

const optItem = "p-[10px] bg-textMain text-secondary rounded-[8px] hover:bg-extra2"

const AllPosts = () => {
      const [searchTerm, setSearchTerm] = useState("");

  return (
    <section className="mt-[80px] w-full">
        
        <header className="flex w-full items-end gap-[25px] justify-between">
            <aside className="flex flex-col w-[85%] gap-[10px]">
                <h4 className="font-bold text-[18px] md:text-[25px] lg:text-[35px]"> Search posts </h4>
                <div className="flex h-[60px] items-center w-full gap-[10px] border-[2.5px] border-line rounded-[8px] overflow-hidden">
                    <input 
                        placeholder="Search for posts" 
                        type="text"
                        value={searchTerm} 
                        onChange={() => {}}
                        className='border-none outline-none w-[95%] h-full py-[8px] px-[10px] low_opacity_bg text-[#fff]'
                    />
                    <Search className="text-[16px] md:text-[20px] lg:text-[25px] placeholder:text-[#ffffff]" />
                </div>
            </aside>

            <aside className="flex w-[15%] flex-col gap-[10px]">
                <h4 className="font-bold text-[16px] md:text-[20px] lg:text-[25px]" > Sort By</h4>
                <select 
                    value="Sort By" 
                    className="low_opacity_bg w-full h-[60px] border-[2.5px] border-line rounded-[8px] px-[10px] cursos-pointer text-[#fff]">
                    <option className={`${optItem}`}>Asc</option>
                    <option className={`${optItem}`}>Desc</option>
                    <option className={`${optItem}`}>Latest</option>
                </select>
            </aside>
        </header>

        <h5 className="mt-[30px] font-normal"> result for <strong> #Ethereum </strong> found <strong> 100 </strong> </h5>

        <article className="mt-[40px] p-[30px]">
            <h4 className="font-bold text-[16px] md:text-[20px] lg:text-[25px]"> Post Tags: </h4>
            <aside className="flex items-center gap-[15px] flex-wrap mt-[20px]">
                { postTags.map(tags => (
                    <PostTags key={tags.id} { ...tags } />
                )) }
            </aside>

            <Posts />
        </article>

    </section>
  )
}

export default AllPosts