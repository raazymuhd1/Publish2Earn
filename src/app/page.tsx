import { Hero, MostRead } from "@/components"

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      {/* most read posts */}
      <MostRead />
    </div>
  );
}
