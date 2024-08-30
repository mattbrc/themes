"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import CopyThemeModal from "@/components/CopyThemeModal";
import { ModeToggle } from "@/components/mode-toggle";
import { Dashboard } from "@/components/block";

export default function Home() {
  const [color, setColor] = useState("zinc");
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <h1 className="font-bold text-4xl mb-8">Theme Customizer</h1>
      <ModeToggle />

      <Button className="mt-8" onClick={() => setIsModalOpen(true)}>
        Copy Theme
      </Button>

      <CopyThemeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        color={color}
      />
      <Dashboard />
    </main>
  );
}
