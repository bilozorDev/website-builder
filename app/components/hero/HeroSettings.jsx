import { useSelectedElements } from "@/app/contexts/SelectedElementsContext";
import { Fragment } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Radio,
  RadioGroup,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, easeOut, motion } from "framer-motion";
import clsx from "clsx";
import HeroDataInputs from "./HeroDataInputs";
import CheckBox from "../CheckBox";
import AccordionPanel from "../AccordionPanel";

const HeroSettings = () => {
  const { hero, setHero } = useSelectedElements();
  return (
    <>
      {/* Toggle the display of the hero section */}
      <CheckBox
        value={hero.display}
        onChange={() => setHero({ ...hero, display: !hero.display })}
        title="Add Hero"
        description="Add hero section"
      />

      {/* Display the hero settings only if the hero section is displayed */}
      {hero.display ? (
        <AccordionPanel title="Settings">
          <HeroDataInputs />
        </AccordionPanel>
      ) : null}
    </>
  );
};

export default HeroSettings;
