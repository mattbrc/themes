import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <h1 className="font-bold text-4xl">
        shadcn/ui themes for the themooooor
      </h1>
      <Button className="font-mono">hello</Button>
    </main>
  );
}
