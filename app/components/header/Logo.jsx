import Link from "next/link";
import React from "react";
import logo from "@/public/uploads/logo.png"; 
const Logo = () => {
  return (
    <Link href="/" className="-m-1.5 p-1.5 cursor-pointer">
      <span className="sr-only">Your Company</span>
      <img
        className="h-10"
        src={logo.src}
        alt="Logo"
      />
    </Link>
  );
};

export default Logo;
