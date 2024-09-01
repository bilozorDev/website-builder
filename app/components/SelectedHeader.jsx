"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import HamburgerMenuOpener from "./header/HamburgerMenuOpener";
import MobileMenuDialog from "./header/MobileMenuDialog";
import Logo from "./header/Logo";
import NavWrapper from "./header/NavWrapper";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function SelectedHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <NavWrapper>
        <div className="flex lg:flex-1">
          <Logo />
        </div>
        <HamburgerMenuOpener setMobileMenuOpen={setMobileMenuOpen} />
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </NavWrapper>
      <MobileMenuDialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        navigation={navigation}
      />
    </header>
  );
}
