import { Fragment } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, easeOut, motion } from "framer-motion";
import clsx from "clsx";

const AccordionPanel = ({ children, title = "Settings" }) => {
  return (
    <Disclosure as="div" className="" defaultOpen={true}>
      {({ open }) => (
        <>
          <DisclosureButton className="w-full border-b pb-2 text-left flex items-center">
            {title}{" "}
            <ChevronUpIcon className={clsx("w-5 ml-4", open && "rotate-180")} />
          </DisclosureButton>
          <div className="overflow-hidden py-2">
            <AnimatePresence>
              {open && (
                <DisclosurePanel static as={Fragment} >
                  <motion.div
                    initial={{ opacity: 0, y: -24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -24 }}
                    transition={{ duration: 0.2, ease: easeOut }}
                    className="origin-top"
                  >
                    {children}
                    
                  </motion.div>
                </DisclosurePanel>
              )}
            </AnimatePresence>
          </div>
        </>
      )}
    </Disclosure>
  );
};

export default AccordionPanel;
