import { Hero, MostRead, LatestPosts } from "@/components"

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      {/* most read posts */}
      <MostRead />
      <LatestPosts />
      {/* story could be place it here */}
      {/* must read */}
    </div>
  );
}
