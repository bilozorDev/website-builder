"use client";
import { createContext, useContext, useState, useEffect } from "react";

// Create the Stats Context
const StatsContext = createContext();

export function StatsProvider({ children }) {
  // Load initial state from localStorage or fallback to default state
  const [stats, setStats] = useState(() => {
    const storedStats = localStorage.getItem("stats");
    return storedStats
      ? JSON.parse(storedStats) // Use stored stats if available
      : {
          display: false,
          options: {
            styleSelections: [
              { id: "default", name: "Centered stats", description: "Plain and Simple", selected: true },
              { id: "with_title", name: "Title and description", description: "Title and description stacked with stats underneath", selected: false },
              { id: "image_background_with_text", name: "Image on background", description: "Title, subtitle and description stacked with stats under", selected: false },
              { id: "image_on_left", name: "Image on the left", description: "Image on the left with title, subtitle and description on the right", selected: false },
            ],
            statsList: [
              { name: "44 million", description: "Transactions every 24 hours" },
              { name: "$119 trillion", description: "Assets under holding" },
              { name: "46,000", description: "New users annually" },
              { name: "8,000+", description: "Creators on the platform" },
            ],
            headline: { text: "Data to enrich your online business" },
            subtitle: { text: "Deploy faster" },
            description: { text: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua." },
          },
        };
  });

  // Persist stats to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("stats", JSON.stringify(stats));
  }, [stats]);

  return (
    <StatsContext.Provider value={{ stats, setStats }}>
      {children}
    </StatsContext.Provider>
  );
}

// Custom hook to use the Stats context
export function useStats() {
  return useContext(StatsContext);
}
