"use client";

import { createContext, useContext, useState, useEffect } from "react";

// Create the Footer Context
const FooterContext = createContext();

export function FooterProvider({ children }) {
  // Load initial state from localStorage or default state
  const [footer, setFooter] = useState(() => {
    const storedFooter = localStorage.getItem("footer");
    return storedFooter
      ? JSON.parse(storedFooter) // Use saved footer if available
      : {
          display: true,
          options: {
            styleSelections: [
              {
                id: "default",
                name: "Simple Copyright",
                description: "Optional sociallinks ",
                selected: true,
              },
              {
                id: "centered",
                name: "Simple centered",
                description: "Inlcudes social links and page links",
                selected: false,
              },
              {
                id: "4-columns",
                name: "4 columns",
                description:
                  "4 columns with links and social links on the bottom",
                selected: false,
              },
              {
                id: "4-columns_with_newsletter",
                name: "4 columns with newsletter form",
                description:
                  "4 columns with links and social links on the bottom and newsletter form",
                selected: false,
              },
            ],
            socialMediaLinks: [
              {
                name: "Facebook",
                href: "ss",
                id: "facebook",
                icon: "facebook",
              },
              {
                name: "Instagram",
                href: "#",
                id: "instagram",
                icon: "instagram",
              },
              {
                name: "x",
                href: null,
                id: "x",
                icon: "x",
              },
              {
                name: "GitHub",
                href: "#",
                id: "github",
                icon: "github",
              },
              {
                name: "YouTube",
                href: "#",
                id: "youtube",
                icon: "youtube",
              },
            ],
            copyright: { companyName: "Your Company Name"},
            companyMission: {text:"Making the world a better place through constructing elegant hierarchies."},
          },
        };
  });

  // Update localStorage whenever the `features` state changes
  useEffect(() => {
    localStorage.setItem("footer", JSON.stringify(footer));
  }, [footer]);

  return (
    <FooterContext.Provider value={{ footer, setFooter }}>
      {children}
    </FooterContext.Provider>
  );
}

// Custom hook to use the Features context
export function useFooter() {
  return useContext(FooterContext);
}
