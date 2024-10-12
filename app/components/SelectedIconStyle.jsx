"use client";
import React from "react";
import { availableIcons } from "../utils/availableIcons";
import { useGlobalSettings } from "../contexts/GlobalSettingsContext";
import { CheckIcon } from "@heroicons/react/24/outline";

const SelectedIconStyle = ({ iconName, selectedId }) => {
  const { globalSettings } = useGlobalSettings();
  const { brandColor } = globalSettings.colors;

  if (selectedId == "no-background") {
    return (
      <div
        className={`flex h-10 w-10 items-center justify-center text-[${brandColor}]`}
      >
        {availableIcons[`${iconName}`]}
      </div>
    );
  }
  if (selectedId == "checkmarks") {
    return (
      <div className="flex h-10 w-10 items-center justify-center ">
        <CheckIcon
          aria-hidden="true"
          className={`h-5 w-5 text-[${brandColor}]`}
        />
      </div>
    );
  }
  if (selectedId == "no-icons") {
    return null;
  }

  return (
    <div
      className={`flex h-10 w-10 items-center justify-center rounded-lg bg-[${brandColor}]  text-white`}
    >
      {availableIcons[`${iconName}`]}
    </div>
  );
};

export default SelectedIconStyle;
