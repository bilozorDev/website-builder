"use client";

import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import SelectedHeader from "./components/SelectedHeader";
import SettingsSideBar from "./components/SettingsSideBar";
import { useSelectedElements } from "./contexts/SelectedElementsContext";
import { useState } from "react";
import SelectedHero from "./components/SelectedHero";
import SelectedFeatures from "./components/SelectedFeatures";
import SelectedNewsletter from "./components/SelectedNewsletter";

export default function Home() {
  const { header, hero, features, newsletter } = useSelectedElements();
  const [open, setOpen] = useState(false);
  return (
    <>
      <SelectedHeader config={header} />

     {/* Display Hero block */}
      {hero.display ? <SelectedHero /> : null}
      {/* Display Features block */}
      {features.display ? <SelectedFeatures /> : null}
      {/* Display Newsletter block */}
      {newsletter.display ? <SelectedNewsletter /> : null}
      {/* Show Settings sidebar */}
      <div
        className="bg-white flex justify-end pr-7 py-2 items-center group hover:cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <ArrowLeftIcon className="h-6 w-6 inline-flex group-hover:mr-2 transition-all duration-300" />
        <span className="font-thin">Settings </span>
      </div>
      <SettingsSideBar open={open} setOpen={setOpen} />
    </>
  );
}
