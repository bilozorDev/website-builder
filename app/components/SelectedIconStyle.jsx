// components/ColorPickerButton.js
import { useState } from "react";
import { BlockPicker } from "react-color";
import { AnimatePresence, motion } from "framer-motion";
import { useColor } from "../contexts/ColorContext"; // Import the context

// Predefined Tailwind Colors
const predefinedColors = [
  "#6366F1", // Indigo
  "#8B5CF6", // Violet
  "#EC4899", // Pink
  "#14B8A6", // Teal
  "#A3E635", // Lime
  "#F59E0B", // Amber
  "#FBBF24", // Yellow
  "#78716C", // Stone
  "#525252", // Zinc
  "#334155", // Slate
];

const ColorPickerButton = ({ colorType }) => {
  const { colors, setColors } = useColor(); // Access colors and setColors from the context
  const [showPicker, setShowPicker] = useState(false);

  const handleColorChange = (selectedColor) => {
    setColors({
      ...colors,
      [colorType]: selectedColor.hex, // Update the specific color type (brand, background, or text)
    });
    setShowPicker(false); // Close the picker after selecting
  };

  return (
    <div className="relative inline-block">
      {/* Circle that shows the current color and triggers the color picker */}
      <div
        className="h-10 w-10 rounded-full cursor-pointer"
        style={{ backgroundColor: colors[colorType] }}
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
              color={colors[colorType]}npm run dev
              n
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
