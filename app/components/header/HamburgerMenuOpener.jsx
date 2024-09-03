import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";

const HamburgerMenuOpener = ({setMobileMenuOpen}) => {
  return (
    <div className="flex lg:hidden">
      <button
        type="button"
        onClick={() => setMobileMenuOpen(true)}
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
      >
        <span className="sr-only">Open main menu</span>
        <Bars3Icon aria-hidden="true" className="h-6 w-6" />
      </button>
    </div>
  );
};

export default HamburgerMenuOpener;
