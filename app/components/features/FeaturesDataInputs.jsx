"use client";
import React from "react";
import { useState, useEffect } from "react";
import { Radio, RadioGroup } from "@headlessui/react";
import { PhotoIcon, PlusIcon } from "@heroicons/react/24/outline";
import TextInput from "../ui/TextInput";
import FeaturesEditList from "./FeaturesEditList";
import AddOrEditFeatureModal from "./AddOrEditFeatureModal";
import classNamesJoin from "@/app/utils/classNamesJoin";
import SettingsTitle from "../ui/SettingsTitle";
import { useFeatures } from "@/app/contexts/FeaturesContext";



const FeaturesDataInputs = () => {
  const { features, setFeatures } = useFeatures();
  const [openModal, setOpenModal] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState({
    name: "",
    description: "",
    icon: PhotoIcon,
  });

  // Initialize `selectedStyle`, `selectedListStyle`, and `selectedIconStyle` based on `selected: true` or fallback to the first item
  const initialSelectedStyle = features.options.styleSelections.find(style => style.selected) || features.options.styleSelections[0];
  const initialSelectedListStyle = features.options.listStyle.find(style => style.selected) || features.options.listStyle[0];
  const initialSelectedIconStyle = features.options.iconsStyle.find(iconStyle => iconStyle.selected) || features.options.iconsStyle[0];

  const [selectedStyle, setSelectedStyle] = useState(initialSelectedStyle);
  const [selectedListStyle, setSelectedListStyle] = useState(initialSelectedListStyle);
  const [selectedIconStyle, setSelectedIconStyle] = useState(initialSelectedIconStyle);

  const settings = features.options.styleSelections;
  const settingsListStyle = features.options.listStyle;
  const settingsIcon = features.options.iconsStyle;

  // Update the listStyle state in features context when `selectedListStyle` changes
  useEffect(() => {
    setFeatures({
      ...features,
      options: {
        ...features.options,
        listStyle: settingsListStyle.map((setting) => {
          return {
            ...setting,
            selected: setting.id === selectedListStyle.id,
          };
        }),
      },
    });
  }, [selectedListStyle]);

  // Update the styleSelections state in features context when `selectedStyle` changes
  useEffect(() => {
    setFeatures({
      ...features,
      options: {
        ...features.options,
        styleSelections: settings.map((setting) => {
          return {
            ...setting,
            selected: setting.id === selectedStyle.id,
          };
        }),
      },
    });
  }, [selectedStyle]);

  // // Update the iconsStyle state in features context when `selectedIconStyle` changes
  useEffect(() => {
    setFeatures({
      ...features,
      options: {
        ...features.options,
        iconsStyle: settingsIcon.map((iconStyle) => {
          return {
            ...iconStyle,
            selected: iconStyle.id === selectedIconStyle.id,
          };
        }),
      },
    });
  }, [selectedIconStyle]);

  

  
  return (
    <>
      <SettingsTitle title="Style" />
      <fieldset aria-label="Features Block Style">
        <RadioGroup
          value={selectedStyle}
          onChange={setSelectedStyle}
          className="-space-y-px rounded-md bg-white"
        >
          {features.options.styleSelections.map((setting, settingIdx) => (
            <Radio
              key={setting.name}
              value={setting}
              aria-label={setting.name}
              aria-description={setting.description}
              className={classNamesJoin(
                settingIdx === 0 ? "rounded-tl-md rounded-tr-md" : "",
                settingIdx === settings.length - 1
                  ? "rounded-bl-md rounded-br-md"
                  : "",
                "group relative flex cursor-pointer border border-gray-200 p-4 focus:outline-none data-[checked]:z-10 data-[checked]:border-indigo-200 data-[checked]:bg-indigo-50"
              )}
            >
              <span
                aria-hidden="true"
                className="mt-0.5 flex h-4 w-4 shrink-0 cursor-pointer items-center justify-center rounded-full border border-gray-300 bg-white group-data-[checked]:border-transparent group-data-[checked]:bg-indigo-600 group-data-[focus]:ring-2 group-data-[focus]:ring-indigo-600 group-data-[focus]:ring-offset-2"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
              </span>
              <span className="ml-3 flex flex-col">
                <span className="block text-sm font-medium text-gray-900 group-data-[checked]:text-indigo-900">
                  {setting.name}
                </span>
                <span className="block text-sm text-gray-500 group-data-[checked]:text-indigo-700">
                  {setting.description}
                </span>
              </span>
            </Radio>
          ))}
        </RadioGroup>
      </fieldset>

      <SettingsTitle title="List Style" />
      <fieldset aria-label="Features Block Style">
        <RadioGroup
          value={selectedListStyle}
          onChange={setSelectedListStyle}
          className="-space-y-px rounded-md bg-white"
        >
          {features.options.listStyle.map((setting, settingIdx) => (
            <Radio
              key={setting.name}
              value={setting}
              aria-label={setting.name}
              aria-description={setting.description}
              disabled={selectedStyle.id == "headline-left-and-features-list-on-right" || selectedStyle.id == "image-right"}
              className={classNamesJoin(
                settingIdx === 0 ? "rounded-tl-md rounded-tr-md" : "",
                settingIdx === settings.length - 1
                  ? "rounded-bl-md rounded-br-md"
                  : "",
                "group data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 data-[disabled]:bg-gray-50  relative flex cursor-pointer border border-gray-200 p-4 focus:outline-none data-[checked]:z-10 data-[checked]:border-indigo-200 data-[checked]:bg-indigo-50"
              )}
            >
              <span
                aria-hidden="true"
                className="mt-0.5 flex h-4 w-4 shrink-0 cursor-pointer items-center justify-center rounded-full border border-gray-300 bg-white group-data-[checked]:border-transparent group-data-[checked]:bg-indigo-600 group-data-[focus]:ring-2 group-data-[focus]:ring-indigo-600 group-data-[focus]:ring-offset-2"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
              </span>
              <span className="ml-3 flex flex-col">
                <span className="block text-sm font-medium text-gray-900 group-data-[checked]:text-indigo-900">
                  {setting.name}
                </span>
                <span className="block text-sm text-gray-500 group-data-[checked]:text-indigo-700">
                  {setting.description}
                </span>
              </span>
            </Radio>
          ))}
        </RadioGroup>
      </fieldset>


      <SettingsTitle title="Icon Style" />
      <fieldset aria-label="Features Block Style">
        <RadioGroup
          value={selectedIconStyle}
          onChange={setSelectedIconStyle}
          className="-space-y-px rounded-md bg-white"
        >
          {features.options.iconsStyle.map((setting, settingIdx) => (
            <Radio
              key={setting.name}
              value={setting}
              aria-label={setting.name}
              aria-description={setting.description}
              className={classNamesJoin(
                settingIdx === 0 ? "rounded-tl-md rounded-tr-md" : "",
                settingIdx === settings.length - 1
                  ? "rounded-bl-md rounded-br-md"
                  : "",
                "group relative flex cursor-pointer border border-gray-200 p-4 focus:outline-none data-[checked]:z-10 data-[checked]:border-indigo-200 data-[checked]:bg-indigo-50"
              )}
            >
              <span
                aria-hidden="true"
                className="mt-0.5 flex h-4 w-4 shrink-0 cursor-pointer items-center justify-center rounded-full border border-gray-300 bg-white group-data-[checked]:border-transparent group-data-[checked]:bg-indigo-600 group-data-[focus]:ring-2 group-data-[focus]:ring-indigo-600 group-data-[focus]:ring-offset-2"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
              </span>
              <span className="ml-3 flex flex-col">
                <span className="block text-sm font-medium text-gray-900 group-data-[checked]:text-indigo-900">
                  {setting.name}
                </span>
                <span className="block text-sm text-gray-500 group-data-[checked]:text-indigo-700">
                  {setting.description}
                </span>
              </span>
            </Radio>
          ))}
        </RadioGroup>
      </fieldset>

      <hr />
      <SettingsTitle title="Content" />

      <div className="space-y-5">
        <TextInput
          text="Headline"
          value={features.options.headline.text}
          onChange={(e) =>
            setFeatures({
              ...features,
              options: {
                ...features.options,
                headline: {
                  ...features.options.headline,
                  text: e.target.value,
                },
              },
            })
          }
          placeholder="Everything you need to deploy your app"
        />

        <TextInput
          text="Subtitle"
          value={features.options.subtitle.text}
          onChange={(e) =>
            setFeatures({
              ...features,
              options: {
                ...features.options,
                subtitle: {
                  ...features.options.subtitle,
                  text: e.target.value,
                },
              },
            })
          }
          placeholder="Deploy faster"
        />

        <TextInput
          text="Description"
          value={features.options.description.text}
          onChange={(e) =>
            setFeatures({
              ...features,
              options: {
                ...features.options,
                description: {
                  ...features.options.description,
                  text: e.target.value,
                },
              },
            })
          }
          placeholder="Deploy faster"
        />
        <SettingsTitle title="Features" />

        

        {features.options.featuresList.map((feature) => (
          <FeaturesEditList
          key={feature.name}
          name={feature.name}
          description={feature.description}
          Icon={feature.icon}
          onClick={() => handleEditFeature(feature)}
          link={feature.link}
          />
        ))}
        
        <div
          
          className="relative flex justify-center align-middle hover:cursor-pointer items-center space-x-3 rounded-lg border border-gray-300 group bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
        >
          Add Feature
          <PlusIcon className="h-5 w-5 ml-2 cursor-pointer  text-gray-600 z-50" />
        </div>
      </div>
      <AddOrEditFeatureModal open={openModal} setOpen={setOpenModal} />
    </>
  );
};

export default FeaturesDataInputs;
