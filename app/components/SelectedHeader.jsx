"use client";
import { useState } from "react";
import HamburgerMenuOpener from "./header/HamburgerMenuOpener";
import MobileMenuDialog from "./header/MobileMenuDialog";
import Logo from "./header/Logo";
import NavWrapper from "./header/NavWrapper";
import { useSelectedElements } from "../contexts/SelectedElementsContext";

// Utility function to convert hex color to RGB
function hexToRgb(hex) {
  // Expand shorthand hex notation (e.g. "03F") to full form (e.g. "0033FF")
  const fullHex = hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (m, r, g, b) =>
    r + r + g + g + b + b
  );

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(fullHex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

// Utility function to determine if the color is light or dark
function colourIsLight(r, g, b) {
  const a = 1 - (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return a < 0.5;
}

// Main function to determine if text color should be black or white
function getTextColorForBackground(hexColor) {
  const rgb = hexToRgb(hexColor);
  if (!rgb) return "black"; // Fallback color
  const { r, g, b } = rgb;
  return colourIsLight(r, g, b) ? "black" : "white";
}

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function SelectedHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { header } = useSelectedElements();

  // Determine text color based on background color
  const textColor = getTextColorForBackground(header?.bgColor || "#ffffff");

  return (
    <header style={{ backgroundColor: header?.bgColor || "white" }}>
      <NavWrapper>
        <div className="flex-none">
          <Logo />
        </div>
        <HamburgerMenuOpener setMobileMenuOpen={setMobileMenuOpen} />
        <div
          className={`hidden lg:flex lg:flex-grow lg:justify-${header?.alignment?.selected} lg:gap-x-12`}
        >
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6"
              style={{ color: textColor }}
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-none">
          <a
            href="#"
            className="text-sm font-semibold leading-6"
            style={{ color: textColor }}
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </NavWrapper>
      <MobileMenuDialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        navigation={navigation}
      />
    </header>
  );
}
