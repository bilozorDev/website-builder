"use client";

import { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { MapIcon, XMarkIcon } from "@heroicons/react/24/outline";

import { useSelectedElements } from "@/app/contexts/SelectedElementsContext";
import { availableIcons } from "./icons";
import SelectedIcon from "../SelectedIconStyle";
import useSelectedFeatureStyle from "@/app/hooks/useSelectedFeatureStyle";

export default function AddOrEditFeatureModal({ open, setOpen }) {
  const { features, setFeatures } = useSelectedElements();
  const { iconsStyle } = features.options;
  const selectedId = useSelectedFeatureStyle(iconsStyle);
  const { styleSelections } = features.options;
  const selectedStyleId = useSelectedFeatureStyle(styleSelections);
  const [selectedFeature, setSelectedFeature] = useState({
    name: "",
    description: "",
    icon: MapIcon,
    link: "",
  });
  const handleSave = () => {
    if (selectedFeature.name) {
      setFeatures({
        ...features,
        options: {
          ...features.options,
          featuresList: [...features.options.featuresList, selectedFeature],
        },
      });
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="sr-only">Close</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="">
              <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                <div className="mt-2">
                  <div>
                    <label
                      htmlFor="title"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Title
                    </label>
                    <div className="mt-2">
                      <input
                        id="title"
                        name="title"
                        type="text"
                        value={selectedFeature.name}
                        onChange={(e) =>
                          setSelectedFeature({
                            ...selectedFeature,
                            name: e.target.value,
                          })
                        }
                        placeholder="Integrations"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-2">
                  <div>
                    <label
                      htmlFor="description"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Description
                    </label>
                    <div className="mt-2">
                      <input
                        id="description"
                        name="description"
                        type="text"
                        value={selectedFeature.description}
                        onChange={(e) =>
                          setSelectedFeature({
                            ...selectedFeature,
                            description: e.target.value,
                          })
                        }
                        placeholder="Your customers’ data will be safe and secure"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>

                {selectedId !== "no-icons" && selectedId !== "checkmarks" ? (
                  <>
                    <label className="block text-sm font-medium leading-6 text-gray-900 my-2">
                      Icon
                    </label>

                    <div className="grid grid-cols-8 gap-5">
                      {availableIcons.map((icon, iconIdx) => (
                        <div
                          key={iconIdx}
                          onClick={() =>
                            setSelectedFeature({
                              ...selectedFeature,
                              icon: icon.icon,
                            })
                          }
                          className={`flex h-10 w-10 relative items-center hover:scale-110 justify-center overflow-hidden rounded-full bg-indigo-600 hover:cursor-pointer hover:bg-indigo-700 hover:opacity-90 ${
                            icon.icon === selectedFeature.icon
                              ? "opacity-100 ring-1 ring-offset-2 ring-indigo-700 scale-110"
                              : "opacity-45"
                          }`}
                        >
                          <SelectedIcon selectedId={selectedId} Icon={icon.icon} />
                        </div>
                      ))}
                    </div>
                  </>
                ) : null}

                <div className="mt-2">
                  <label
                    htmlFor="feature-link"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Link
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                        http://
                      </span>
                      <input
                        id="feature-link"
                        name="feature-link"
                        type="text"
                        value={selectedFeature.link}
                        onChange={(e) =>
                          setSelectedFeature({
                            ...selectedFeature,
                            link: e.target.value,
                          })
                        }
                        placeholder="www.example.com"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                onClick={handleSave}
                className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
              >
                Add
              </button>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Cancel
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
