"use client";
import React, { useState } from "react";
import { useGlobalSettings } from "../contexts/GlobalSettingsContext";

const LogoSizeSlider = ({ logoUrl }) => {
  const { globalSettings, setGlobalSettings } = useGlobalSettings();
  // Define size steps based on Tailwind's `h-*` classes (e.g., h-8, h-12, h-16, etc.)
  const sizeOptions = [8, 9, 10, 11, 12, 14, 16, 20, 24, 28]; //
  const [logoSize, setLogoSize] = useState(globalSettings.logo.size); // Default to `h-20`

  // Handle the change in slider value
  const handleSliderChange = (e) => {
    const newSize = sizeOptions[parseInt(e.target.value, 10)];
    setLogoSize(newSize);
    setGlobalSettings((prev) => ({
      ...prev,
      logo: {
        ...prev.logo,
        size: newSize,
      },
    }));
  };

  return (
    <div className="flex flex-col h-full justify-between">
      {/* Logo Display */}
      <div className="mt-6 flex justify-center min-h-28">
        <img
          src={logoUrl}
          alt="Logo"
          className={`h-${logoSize} w-auto transition-all duration-200 ease-in-out`} // Tailwind dynamic height class
        />
      </div>
      {/* Slider Input */}
      <div>
        <input
          type="range"
          id="logoSizeSlider"
          min="0"
          max={sizeOptions.length - 1}
          step="1"
          value={sizeOptions.indexOf(logoSize)}
          onChange={handleSliderChange}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 "
        />

        <label
          htmlFor="logoSizeSlider"
          className="text-sm font-medium text-gray-700  text-center mt-4"
        >
          Logo Size
        </label>
      </div>
    </div>
  );
};

export default LogoSizeSlider;
