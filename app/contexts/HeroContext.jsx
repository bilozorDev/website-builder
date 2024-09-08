"use client";
import { createContext, useContext, useState, useEffect } from "react";

const HeroContext = createContext();

export function HeroProvider({ children }) {
  // Load initial state from localStorage or use default state
  const [hero, setHero] = useState(() => {
    const savedHero = localStorage.getItem("hero");
    return savedHero
      ? JSON.parse(savedHero)
      : {
          display: false,
          options: {
            styleSelections: [
              {
                id: "default",
                name: "Centered text without image",
                description: "Include a headline and description",
                selected: true,
              },
              {
                id: "image_right",
                name: "Split with image",
                description: "Image on the left, text on the right",
                selected: false,
              },
              {
                id: "image_bottom",
                name: "Image on the bottom",
                description: "Text on top, image on the bottom",
                selected: false,
              },
              {
                id: "array_of_images",
                name: "Array of images",
                description: "Text on left, and array of images on right",
                selected: false,
              },
            ],
            news: {
              text: "Announcing our next round of funding.",
              link: "#",
            },
            headline: {
              text: "Data to enrich your online business",
            },
            description: {
              text: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.",
            },
            cta: [
              {
                text: "Get Started",
                link: "#",
                style: "btn",
              },
              {
                text: "Learn Morse",
                link: "#",
                style: "text",
              },
            ],
          },
        };
  });

  // Persist hero state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("hero", JSON.stringify(hero));
  }, [hero]);

  return (
    <HeroContext.Provider value={{ hero, setHero }}>
      {children}
    </HeroContext.Provider>
  );
}

// Custom hook to use the HeroContext
export function useHero() {
  return useContext(HeroContext);
}
