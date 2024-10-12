"use client";
import React from "react";
import { availableIcons } from "../utils/availableIcons";
import { useGlobalSettings } from "../contexts/GlobalSettingsContext";
import { CheckIcon } from "@heroicons/react/24/outline";
import classNamesJoin from "../utils/classNamesJoin";

const SelectedIconStyle = ({ iconName, selectedId, className }) => {
  const { globalSettings } = useGlobalSettings();
  const { brandColor } = globalSettings.colors;

  if (selectedId == "no-background") {
    return (
      <div
        className={classNamesJoin(`flex h-10 w-10 items-center justify-center text-[${brandColor}]`, className)}
      >
        {availableIcons[`${iconName}`]}
      </div>
    );
  }
  if (selectedId == "checkmarks") {
    return (
      <div className={classNamesJoin(`flex h-10 w-10 items-center justify-center `, className)}>
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
      className={classNamesJoin(`flex h-10 w-10 items-center justify-center rounded-lg bg-[${brandColor}]  text-white`, className)}
    >
      {availableIcons[`${iconName}`]}
    </div>
  );
};

export default SelectedIconStyle;
