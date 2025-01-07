import React from 'react'
import { Search } from 'lucide-react'

const optItem = "p-[10px] bg-textMain text-secondary rounded-[8px] hover:bg-extra2"

const AllPosts = () => {
  return (
    <section className="mt-[80px] w-full">
        
        <header className="flex w-full items-center gap-[25px] justify-between">
            <aside className="flex flex-col w-[85%] gap-[10px]">
                <h4 className="font-bold text-[16px] md:text-[20px] lg:text-[25px]"> Search posts </h4>
                <div className="flex h-[60px] items-center w-full gap-[10px] border-[2.5px] border-line rounded-[8px]">
                    <input 
                        placeholder="Search for posts" 
                        type="text" 
                        className='border-none outline-none w-[90%] h-full py-[8px] px-[10px] bg-transparent'
                    />
                    <Search className="text-[16px] md:text-[20px] lg:text-[25px] placeholder:text-[#ffffff]" />
                </div>
            </aside>
            <aside className="flex w-[15%] flex-col gap-[10px]">
                <h4 className="font-bold text-[16px] md:text-[20px] lg:text-[25px]" > Sort By</h4>
                <select 
                    value="Sort By" 
                    className="bg-transparent w-full h-[60px] border-[2.5px] border-line rounded-[8px] px-[10px] cursos-pointer">
                    <option className={`${optItem}`}>Asc</option>
                    <option className={`${optItem}`}>Desc</option>
                    <option className={`${optItem}`}>Latest</option>
                </select>
            </aside>
        </header>

    </section>
  )
}

export default AllPosts