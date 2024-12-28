import { Hero, MostRead, LatestPosts, MustRead, EditorsPick } from "@/components"

export default function Home() {
  return (
    <div className="w-full  border-l-[1.5px] border-r-[2.5px] border-line p-[20px]">
      <Hero />
      {/* most read posts */}
      <MostRead />
      <LatestPosts />
      {/* story could be place it here */}
      {/* must read */}
      <MustRead />
      <EditorsPick />
    </div>
  );
}
