import React, { createContext, useContext, useState, useEffect } from "react";

type ThemeColors = {
  "--background": string;
  "--foreground": string;
  "--primary": string;
  "--primary-foreground": string;
  // Add other color variables as needed
};

export type ThemeNames = "Basic" | "Emerald" | "Garden" | "Corporate" | "Acid";

const themes: Record<ThemeNames, ThemeColors> = {
  Basic: {
    "--background": "255 255 255",
    "--foreground": "51 51 51",
    "--primary": "37 99 235",
    "--primary-foreground": "255 255 255",
  },
  Emerald: {
    "--background": "255 255 255",
    "--foreground": "51 51 51",
    "--primary": "16 185 129",
    "--primary-foreground": "255 255 255",
  },
  Garden: {
    "--background": "240 244 245",
    "--foreground": "26 31 28",
    "--primary": "92 127 103",
    "--primary-foreground": "236 252 203",
  },
  Corporate: {
    "--background": "255 255 255",
    "--foreground": "49 50 68",
    "--primary": "75 107 251",
    "--primary-foreground": "123 146 178",
  },
  Acid: {
    "--background": "250 250 250",
    "--foreground": "15 15 15",
    "--primary": "255 0 245",
    "--primary-foreground": "0 255 159",
  },
};

type ThemeContextType = {
  activeTheme: ThemeNames;
  setActiveTheme: (theme: ThemeNames) => void;
  themeColors: ThemeColors;
};

const ThemeContext = createContext<ThemeContextType>({
  activeTheme: "Basic",
  setActiveTheme: () => {},
  themeColors: themes.Basic,
});

// export type ThemeNames = "Basic" | "Emerald" | "Garden" | "Corporate" | "Acid";

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [activeTheme, setActiveTheme] = useState<ThemeNames>("Basic");
  const [themeColors, setThemeColors] = useState<ThemeColors>(themes.Basic);

  useEffect(() => {
    setThemeColors(themes[activeTheme]);
    Object.entries(themes[activeTheme]).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
  }, [activeTheme]);

  return (
    <ThemeContext.Provider value={{ activeTheme, setActiveTheme, themeColors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
