import Intro from "./components/Intro";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-6 p-24">
      <Intro />
    </main>
  );
}
