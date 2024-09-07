"use client";
import { useState } from "react";
import HamburgerMenuOpener from "./header/HamburgerMenuOpener";
import MobileMenuDialog from "./header/MobileMenuDialog";
import Logo from "./header/Logo";
import NavWrapper from "./header/NavWrapper";
import { useSelectedElements } from "../contexts/SelectedElementsContext";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
// Utility function to convert hex color to RGB
function hexToRgb(hex) {
  // Expand shorthand hex notation (e.g. "03F") to full form (e.g. "0033FF")
  const fullHex = hex.replace(
    /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
    (m, r, g, b) => r + r + g + g + b + b
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

export default function SelectedHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { header } = useSelectedElements();
  // console.log(header.alignment.selected)
  // Determine text color based on background color
  const textColor = getTextColorForBackground(header?.bgColor || "#ffffff");
  // console.log(header.menuItems)
  return (
    <header style={{ backgroundColor: header?.bgColor || "white" }}>
      <NavWrapper>
        <div className="flex-none">
          <Logo />
        </div>
        <HamburgerMenuOpener setMobileMenuOpen={setMobileMenuOpen} />
        <PopoverGroup>
          <div
            className={`hidden lg:flex lg:flex-grow lg:justify-start lg:gap-x-12`}
          >
            {header?.menuItems?.regularItems.map((item) => {
              // console.log(item);
              return item.megaMenu ? (
                <Popover key={item.name}>
                  <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                    {item.name}
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none text-gray-400"
                    />
                  </PopoverButton>

                  <PopoverPanel
                    transition
                    className="absolute inset-x-0 top-0 -z-10 bg-white pt-14 shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:-translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    <div className="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
                      {item?.megaMenu?.menuItems.map((item) => (
                        <div
                          key={item.name}
                          className="group relative rounded-lg p-6 text-sm leading-6 hover:bg-gray-50"
                        >
                          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                            <item.icon
                              aria-hidden="true"
                              className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                            />
                          </div>
                          <a
                            href={item.href}
                            className="mt-6 block font-semibold text-gray-900"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1 text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="bg-gray-50">
                      <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="grid grid-cols-3 divide-x divide-gray-900/5 border-x border-gray-900/5">
                          {item?.megaMenu?.callsToAction.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                            >
                              <item.icon
                                aria-hidden="true"
                                className="h-5 w-5 flex-none text-gray-400"
                              />
                              {item.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </PopoverPanel>
                </Popover>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-semibold leading-6"
                  style={{ color: textColor }}
                >
                  {item.name}
                </a>
              );
            })}
          </div>
        </PopoverGroup>
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
        navigation={header?.menuItems}
      />
    </header>
  );
}
