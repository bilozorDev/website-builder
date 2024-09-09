"use client";

import { createContext, useContext, useState, useEffect } from "react";

// Create the Features Context
const FeaturesContext = createContext();

export function FeaturesProvider({ children }) {
  // Load initial state from localStorage or default state
  const [features, setFeatures] = useState(() => {
    const storedFeatures = localStorage.getItem("features");
    return storedFeatures
      ? JSON.parse(storedFeatures) // Use saved features if available
      : {
          display: false,
          options: {
            iconsStyle: [
              {
                id: "default",
                name: "With solid background",
                description: "Brand color as BG and white icons",
                selected: true,
              },
              {
                id: "no-background",
                name: "Solid color with no background",
                description: "Brand color as text color and no background",
                selected: false,
              },
              {
                id: "checkmarks",
                name: "Just checkmarks instead of icons",
                description:
                  "Each feature will have a checkmark instead of an icon",
                selected: false,
              },
              {
                id: "no-icons",
                name: "Icons disabled",
                description: "Feature will just have a title and description",
                selected: false,
              },
            ],
            listStyle: [
              {
                id: "default",
                name: "2 Columns",
                description: "List of features in 2 columns",
                selected: true,
              },
              {
                id: "3-columns",
                name: "3 Columns",
                description: "List of features in 3 columns",
                selected: false,
              },
              {
                id: "4-columns",
                name: "4 Columns",
                description: "List of features in 4 columns",
                selected: false,
              },
            ],
            styleSelections: [
              {
                id: "default",
                name: "Centered content",
                description: "Optional link to feature page on Title click",
                selected: false,
              },
              {
                id: "image-under-text",
                name: "Text between headline and features list",
                description: "Optional link to feature page on Title click",
                selected: false,
              },
              {
                id: "headline-left-and-features-list-on-right",
                name: "Headline left and 2 columns of features on the right",
                description: "Optional link to feature page on Title click",
                selected: false,
              },
              {
                id: "image-right",
                name: "Text & features on the left and image on the right",
                description: "Optional link to feature page on Title click",
                selected: false,
              },
            ],
            featuresList: [
              {
                name: "Analytics",
                description:
                  "Get a better understanding where your traffic is coming from",
                icon: "ChartPieIcon",
                link: "http://localhost:3000/",
              },
              {
                name: "Engagement",
                description:
                  "Speak directly to your customers with our engagement tool",
                icon: "CursorArrowRaysIcon",
                link: "",
              },
              {
                name: "Security",
                description: "Your customers’ data will be safe and secure",
                icon: "FingerPrintIcon",
                link: "",
              },
              {
                name: "Integrations",
                description: "Your customers’ data will be safe and secure",
                icon: "SquaresPlusIcon",
                link: "",
              },
            ],
            subtitle: { text: "Deploy faster" },
            headline: { text: "Everything you need to deploy your app" },
            description: {
              text: "Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.",
            },
          },
        };
  });

  // Update localStorage whenever the `features` state changes
  useEffect(() => {
    localStorage.setItem("features", JSON.stringify(features));
  }, [features]);

  return (
    <FeaturesContext.Provider value={{ features, setFeatures }}>
      {children}
    </FeaturesContext.Provider>
  );
}

// Custom hook to use the Features context
export function useFeatures() {
  return useContext(FeaturesContext);
}
