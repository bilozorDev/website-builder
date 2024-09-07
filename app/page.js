"use client";

import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import SelectedHeader from "./components/SelectedHeader";
import SettingsSideBar from "./components/SettingsSideBar";
import { useSelectedElements } from "./contexts/SelectedElementsContext";
import { useState } from "react";
import SelectedHero from "./components/SelectedHero";

export default function Home() {
  const { header, hero } = useSelectedElements();
  const [open, setOpen] = useState(true);
  return (
    <>
      <SelectedHeader config={header} />
      {hero.display ? <SelectedHero config={hero.config} /> : null}
      
      {/* <div
        className="bg-white flex justify-end pr-7 py-2 items-center group hover:cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <ArrowLeftIcon className="h-6 w-6 inline-flex group-hover:mr-2 transition-all duration-300" />
        <span className="font-thin">Settings </span>
      </div> */}
      <SettingsSideBar open={open} setOpen={setOpen} />
    </>
  );
}
