"use client";
import { ChartPieIcon } from "@heroicons/react/24/outline";
import { createContext, useContext, useState } from "react";

const NewsletterContext = createContext();

export function NewsletterProvider({ children }) {
  const [newsletter, setNewsletter] = useState({
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
          description: "Each feature will have a checkmark instead of an icon",
          selected: false,
        },
        {
          id: "no-icons",
          name: "Icons disabled",
          description: "Feature will just have a title and description",
          selected: false,
        },
      ],
      bulletPoints: [
        {
          name: "Weekly articles",
          description:
            "Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo amet.",
          icon: ChartPieIcon,
          
        },
        {
            name: "No spam",
            description:
              "Officia excepteur ullamco ut sint duis proident non adipisicing. Voluptate incididunt anim.",
            icon: ChartPieIcon,
            
          },
      ],
      styleSelections: [
        {
          id: "default",
          name: "One line",
          description: "Text on left & form on right",
          selected: true,
        },
        {
          id: "stacked",
          name: "Stacked",
          description: "Text and input stacked on top of each other",
          selected: false,
        },
        {
          id: "stacked-centered",
          name: "Stacked centered",
          description: "Text and form stacked centered",
          selected: false,
        },
        {
          id: "with-bullet-points",
          name: "With bullet points",
          description: "Text and form on the left and bullet points on right",
          selected: false,
        },
      ],
      headline: {
        text: "Want product news and updates?.",
      },
      subheadline: {
        text: "Sign up for our newsletter.",
      },
      privacyNote: {
        text: " We care about your data. Read our",
        link: "#",
      },
      button: {
        text: "subscribe",
      },
    },
  });

  return (
    <NewsletterContext.Provider value={{ newsletter, setNewsletter }}>
      {children}
    </NewsletterContext.Provider>
  );
}

export function useNewsletter() {
  return useContext(NewsletterContext);
}
