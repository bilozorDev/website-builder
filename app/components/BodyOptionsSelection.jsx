"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useSelectedElements } from "../contexts/SelectedElementsContext";
import { Radio, RadioGroup } from "@headlessui/react";
import { PhotoIcon } from "@heroicons/react/24/outline";
import HeroSettings from "./hero/HeroSettings";
import HeroDataInputs from "./hero/HeroDataInputs";

const BodyOptionsSelection = () => {
  const { hero, setHero, features, setFeatures } = useSelectedElements();

  const [selected, setSelected] = useState(hero.options.styleSelections[0]);
  const settings = hero.options.styleSelections;

  //update the hero state with the selected style
  useEffect(() => {
    setHero({
      ...hero,
      options: {
        ...hero.options,
        styleSelections: settings.map((setting) => {
          return {
            ...setting,
            selected: setting.id === selected.id,
          };
        }),
      },
    });
  }, [selected]);

  return (
    <>
      <fieldset>
        <legend className="sr-only">Notifications</legend>
        <div className="space-y-5">
          <HeroSettings/>
          {hero.display ? <HeroDataInputs/> : null}
          
          <div className="relative flex items-start">
            <div className="flex h-6 items-center">
              <input
                id="features"
                name="features"
                type="checkbox"
                checked={features.display}
                onChange={() => setFeatures({ ...features, display: !features.display })}
                aria-describedby="features-description"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
            </div>
            <div className="ml-3 text-sm leading-6">
              <label htmlFor="features" className="font-medium text-gray-900">
                Feautures
              </label>
              <p id="features-description" className="text-gray-500">
                Add features section
              </p>
            </div>
          </div>
          <div className="relative flex items-start">
            <div className="flex h-6 items-center">
              <input
                id="offers"
                name="offers"
                type="checkbox"
                aria-describedby="offers-description"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
            </div>
            <div className="ml-3 text-sm leading-6">
              <label htmlFor="offers" className="font-medium text-gray-900">
                Offers
              </label>
              <p id="offers-description" className="text-gray-500">
                Get notified when a candidate accepts or rejects an offer.
              </p>
            </div>
          </div>
        </div>
      </fieldset>
    </>
  );
};

export default BodyOptionsSelection;
