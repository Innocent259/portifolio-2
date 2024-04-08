import About from "@/components/About";
import Intro from "@/components/Intro";

export default function Home() { 
  return (
    <main className="flex flex-col items-center gap-6 p-12 h-[66rem]">
      <Intro />
      <About />
    </main>
  );
}
