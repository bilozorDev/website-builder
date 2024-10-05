// contexts/ColorContext.js
"use client";
import { createContext, useContext, useState, useEffect } from "react";

// Create the Color Context
const ColorContext = createContext();

// Color provider component
export function ColorProvider({ children }) {
  // Initialize color values from localStorage or fallback to default values
  const [colors, setColors] = useState(() => {
    const savedColors = localStorage.getItem("colors");
    return savedColors
      ? JSON.parse(savedColors)
      : {
          brandColor: "#FF6347",
          backgroundColor: "#FFFFFF",
          textColor: "#000000",
        };
  });

  // Save the colors to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("colors", JSON.stringify(colors));
  }, [colors]);

  return (
    <ColorContext.Provider value={{ colors, setColors }}>
      {children}
    </ColorContext.Provider>
  );
}

// Custom hook to use the ColorContext
export function useColor() {
  return useContext(ColorContext);
}
