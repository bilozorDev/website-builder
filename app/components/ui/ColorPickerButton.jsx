// components/ColorPickerButton.js
import { useState } from "react";
import { BlockPicker } from "react-color";
import { AnimatePresence, motion } from "framer-motion";
import { useGlobalSettings } from "@/app/contexts/GlobalSettingsContext";

// Predefined Tailwind Colors
const predefinedColors = [
  "#dc2626", // red-600
  "#fafafa", // white
  "#d97706", // amber
  "#059669", // emerald
  "#0284c7", // blue
  "#6366F1", // Fuchsia
  "#e11d48", // rose
  "#0891b2", // cyan
  "#52525b", // Zinc
  "#0f172a", // Slate
];

const ColorPickerButton = ({ colorType }) => {
  const { globalSettings, setGlobalSettings } = useGlobalSettings();
  const [showPicker, setShowPicker] = useState(false);

  const handleColorChange = (selectedColor) => {
    // Update the corresponding color in globalSettings
    setGlobalSettings((prevSettings) => ({
      ...prevSettings,
      colors: {
        ...prevSettings.colors,
        [colorType]: selectedColor.hex,
      },
    }));
    setShowPicker(false); // Close the picker after selecting
  };

  return (
    <div className="relative inline-block">
      {/* Circle that shows the current color and triggers the color picker */}
      <div
        className="h-10 w-10 rounded-full cursor-pointer border-2 border-gray-200"
        style={{ backgroundColor: globalSettings.colors[colorType] }}
        onClick={() => setShowPicker(!showPicker)}
      />

      {/* BlockPicker with Framer Motion for smooth open/close */}
      <AnimatePresence>
        {showPicker && (
          <motion.div
            className="absolute z-20 top-0 left-14"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <BlockPicker
              color={globalSettings.colors[colorType]}
              onChange={handleColorChange}
              colors={predefinedColors} // Pass predefined Tailwind colors
              triangle="hide"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay to close the picker when clicking outside */}
      {showPicker && (
        <div
          className="fixed inset-0"
          onClick={() => setShowPicker(false)}
        />
      )}

      {/* CSS to hide the hex input field */}
      <style jsx>{`
        .flexbox-fix {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default ColorPickerButton;
