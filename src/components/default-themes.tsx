import React from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/context/ThemeContext"; // We'll create this context
import { ThemeNames } from "@/context/ThemeContext"; // Import ThemeNames type

const themes: { name: ThemeNames; colors: string[] }[] = [
  { name: "Basic", colors: ["#ffffff", "#333333", "#2563eb", "#3b82f6"] },
  { name: "Emerald", colors: ["#ffffff", "#333333", "#10b981", "#34d399"] },
  { name: "Garden", colors: ["#f0f4f5", "#1a1f1c", "#5c7f67", "#ecfccb"] },
  { name: "Corporate", colors: ["#ffffff", "#313244", "#4b6bfb", "#7b92b2"] },
  { name: "Acid", colors: ["#fafafa", "#0f0f0f", "#ff00f5", "#00ff9f"] },
];

const ThemeCard: React.FC<{
  theme: (typeof themes)[0];
  isActive: boolean;
  onClick: () => void;
}> = ({ theme, isActive, onClick }) => (
  <button
    className={`flex flex-col items-center p-3 border rounded-lg shadow-sm transition-all duration-200 ${
      isActive
        ? "ring-2 ring-primary ring-offset-2"
        : "hover:shadow-md hover:-translate-y-1"
    }`}
    onClick={onClick}
  >
    <div className="flex space-x-1 mb-2">
      {theme.colors.map((color, index) => (
        <div
          key={index}
          className="w-5 h-5 flex items-center justify-center text-xs font-bold"
          style={{ backgroundColor: color, color: getContrastColor(color) }}
        >
          A
        </div>
      ))}
    </div>
    <h3 className="text-sm font-semibold">{theme.name}</h3>
  </button>
);

export function DefaultThemes() {
  const { activeTheme, setActiveTheme } = useTheme();

  return (
    <div className="w-full mb-8">
      <h2 className="text-2xl font-bold mb-4">Default Themes</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {themes.map((theme, index) => (
          <ThemeCard
            key={index}
            theme={theme}
            isActive={activeTheme === theme.name}
            onClick={() => setActiveTheme(theme.name)}
          />
        ))}
      </div>
    </div>
  );
}

// Helper function to determine contrasting text color
function getContrastColor(hexColor: string) {
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? "#000000" : "#ffffff";
}
