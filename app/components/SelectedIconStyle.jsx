import React from "react";
import * as HeroIcons from "@heroicons/react/24/outline"; // Import all icons

const SelectedIconStyle = ({ iconName = "CheckIcon", selectedId }) => {
  // Use the iconName prop to dynamically access the correct Heroicon component
  const Icon = HeroIcons[iconName];
console.log(JSON.stringify(Icon));
  if (!Icon) {
    console.error(`Icon ${iconName} does not exist in Heroicons.`);
    return null; // Return null if the icon name doesn't match any Heroicon
  }

  if (selectedId === "no-background") {
    return (
      <div className="flex h-10 w-10 items-center justify-center bg-white">
        <Icon className="h-6 w-6 text-indigo-600" />
      </div>
    );
  }

  if (selectedId === "checkmarks") {
    return (
      <div className="flex h-10 w-10 items-center justify-center">
        <HeroIcons.CheckIcon aria-hidden="true" className="h-5 w-5 text-indigo-500" />
      </div>
    );
  }

  if (selectedId === "no-icons") {
    return null;
  }

  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
      <Icon className="h-6 w-6 text-white" />
    </div>
  );
};

export default SelectedIconStyle;
