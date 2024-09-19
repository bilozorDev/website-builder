import { useColor } from "@/app/contexts/ColorContext";
import { useGlobalSettings } from "@/app/contexts/GlobalSettingsContext";
import Link from "next/link";
import React from "react";
const StyledButton = ({ style = "text", text = "Get Started", link = "#" }) => {
  const { globalSettings } = useGlobalSettings();

  if (style == "btn") {
    return (
      <Link
        href={link}
        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        style={{ color: globalSettings.colors.textColor, backgroundColor: globalSettings.colors.brandColor }}
      >
        {text}
      </Link>
    );
  }
  if (style == "text") {
    return (
      <Link
        href={link}
        className="text-sm font-semibold leading-6 text-gray-900"
        style={{ color: globalSettings.colors.textColor }}
      >
        {text} <span aria-hidden="true">→</span>
      </Link>
    );
  }
};

export default StyledButton;
