"use client";
import React from "react";
import { useState, useEffect, Fragment } from "react";
import { useSelectedElements } from "../contexts/SelectedElementsContext";
import { Disclosure, DisclosureButton, DisclosurePanel, Radio, RadioGroup } from "@headlessui/react";
import { ChevronDownIcon, PhotoIcon } from "@heroicons/react/24/outline";
import HeroSettings from "./hero/HeroSettings";
import HeroDataInputs from "./hero/HeroDataInputs";
import FeaturesSettings from "./features/FeaturesSettings";
import FeaturesDataInputs from "./features/FeaturesDataInputs";
import { AnimatePresence, easeOut, motion } from 'framer-motion'
import clsx from 'clsx'

const BodyOptionsSelection = () => {
  const { hero, setHero, features, setFeatures, newsletter, setNewsletter } = useSelectedElements();
  
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
     
        
        <div className="space-y-5">
          {/* Hero Settings */}
          <HeroSettings />
          {hero.display ? (
           <Disclosure as="div" className="">
           {({ open }) => (
             <>
               <DisclosureButton className="w-full border-b pb-2 text-left flex items-center" >Settings <ChevronDownIcon className={clsx('w-5 ml-4', open && 'rotate-180')} /></DisclosureButton>
               <div className="overflow-hidden py-2">
                 <AnimatePresence>
                   {open && (
                     <DisclosurePanel static as={Fragment}>
                       <motion.div
                         initial={{ opacity: 0, y: -24 }}
                         animate={{ opacity: 1, y: 0 }}
                         exit={{ opacity: 0, y: -24 }}
                         transition={{ duration: 0.2, ease: easeOut }}
                         className="origin-top"
                       >
                         <HeroDataInputs/>
                       </motion.div>
                     </DisclosurePanel>
                   )}
                 </AnimatePresence>
               </div>
             </>
           )}
         </Disclosure>
          ) : null}



          {/* Features Settings */}
          <FeaturesSettings />
          {features.display ? (
           <Disclosure as="div" className="">
           {({ open }) => (
             <>
               <DisclosureButton className="w-full border-b pb-2 text-left flex items-center" >Settings <ChevronDownIcon className={clsx('w-5 ml-4', open && 'rotate-180')} /></DisclosureButton>
               <div className="overflow-hidden py-2">
                 <AnimatePresence>
                   {open && (
                     <DisclosurePanel static as={Fragment}>
                       <motion.div
                         initial={{ opacity: 0, y: -24 }}
                         animate={{ opacity: 1, y: 0 }}
                         exit={{ opacity: 0, y: -24 }}
                         transition={{ duration: 0.2, ease: easeOut }}
                         className="origin-top"
                       >
                         <FeaturesDataInputs/>
                       </motion.div>
                     </DisclosurePanel>
                   )}
                 </AnimatePresence>
               </div>
             </>
           )}
         </Disclosure>
          ) : null}
        
        </div>
     
    </>
  );
};

export default BodyOptionsSelection;
