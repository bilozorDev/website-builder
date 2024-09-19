"use client";
import { createContext, useContext, useState, useEffect } from "react";

const GlobalSettingsContext = createContext();

export function GlobalSettingsProvider({ children }) {
  // Load initial state from localStorage or use default state
  const [globalSettings, setGlobalSettings] = useState(() => {
    const savedSettings = localStorage.getItem("globalSettings");
    return savedSettings
      ? JSON.parse(savedSettings)
      : {
          title: "My Awesome Website",
          description: "Welcome to my website, the best place for awesome content.",
          colors: {
            brandColor: "#6366F1",  // Tailwind Indigo
            backgroundColor: "#FFFFFF", // Default white
            textColor: "#000000",       // Default black
          },
          logo: {
            size: 20, // Default size
          }
        };
  });

  // Persist globalSettings state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("globalSettings", JSON.stringify(globalSettings));
  }, [globalSettings]);


  return (
    <GlobalSettingsContext.Provider value={{ globalSettings, setGlobalSettings }}>
      {children}
    </GlobalSettingsContext.Provider>
  );
}

// Custom hook to use the GlobalSettingsContext
export function useGlobalSettings() {
  return useContext(GlobalSettingsContext);
}
