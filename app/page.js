"use client";

import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import SelectedFeatures from "./components/SelectedFeatures";
import SelectedHeader from "./components/SelectedHeader";
import SelectedHero from "./components/SelectedHero";
import SelectedNewsletter from "./components/SelectedNewsletter";
import SettingsSideBar from "./components/SettingsSideBar";
import { useFeatures } from "./contexts/FeaturesContext";
import { useHero } from "./contexts/HeroContext";
import { useNewsletter } from "./contexts/NewsletterContext";
import { useState } from "react";
import { useStats } from "./contexts/StatsContext";
import SelectedStats from "./components/SelectedStats";

export default function Home() {
  const { hero } = useHero();
  const { features } = useFeatures();
  const { newsletter } = useNewsletter();
  const { stats } = useStats();

  const [open, setOpen] = useState(true);
  return (
    <div className="relative">
      {/* <SelectedHeader  /> */}

      {/* Display Hero block */}
      {hero.display ? <SelectedHero /> : null}
      {/* Display Stats block */}
      {stats.display ? <SelectedStats /> : null}
      {/* Display Features block */}
      {features.display ? <SelectedFeatures /> : null}
      {/* Display Newsletter block */}
      {newsletter.display ? <SelectedNewsletter /> : null}
      

      {/* Show Settings sidebar */}
      <div
        className="bg-white absolute top-24 flex justify-end pr-7 py-2 items-center group hover:cursor-pointer "
        onClick={() => setOpen(true)}
      >
        <ArrowLeftIcon className="h-6 w-6 inline-flex group-hover:mr-2 transition-all duration-300" />
        <span className="font-thin">Settings </span>
      </div>
      <SettingsSideBar open={open} setOpen={setOpen} />
    </div>
  );
}
