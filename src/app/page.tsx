import { Hero, AllPosts } from "@/components"

export default function Home() {
  return (
    <div className="w-full h-full border-l-[1.5px] border-r-[2.5px] border-line p-[20px]">
      <Hero />
       <AllPosts />
    </div>
  );
}
