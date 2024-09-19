import Link from "next/link";
import React from "react";
import logo from "@/public/uploads/logo.png";
import { useGlobalSettings } from "@/app/contexts/GlobalSettingsContext";
const Logo = () => {
  const { globalSettings } = useGlobalSettings();
  const logoSize = globalSettings.logo.size; // Get the logo size from global settings
  return (
    <Link href="/" className="-m-1.5 p-1.5 cursor-pointer">
      <span className="sr-only">Your Company</span>
      <img className={`h-${logoSize} w-auto`} src={logo.src} alt="Logo" />
    </Link>
  );
};

export default Logo;
