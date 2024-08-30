"use client";

import { ThemeProvider } from "@/context/ThemeContext";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import CopyThemeModal from "@/components/CopyThemeModal";
import { ModeToggle } from "@/components/mode-toggle";
import { Dashboard } from "@/components/dashboard";
import Footer from "@/components/Footer";

export default function Home() {
  const [color, setColor] = useState("zinc");
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ThemeProvider>
      <main className="flex min-h-screen flex-col items-center p-8">
        <h1 className="font-mono font-bold text-2xl mb-8">fancy themes</h1>

        <div className="flex items-center space-x-4 mb-8">
          <ModeToggle />
          <Button onClick={() => setIsModalOpen(true)}>Copy Theme</Button>
        </div>

        <CopyThemeModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          color={color}
        />
        <Dashboard />
        <Footer />
      </main>
    </ThemeProvider>
  );
}
