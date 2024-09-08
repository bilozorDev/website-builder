"use client";
import React from "react";
import { useState, useEffect } from "react";
import { Radio, RadioGroup } from "@headlessui/react";
import { PhotoIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useSelectedElements } from "@/app/contexts/SelectedElementsContext";
import InfoInput from "../InfoInput";
import FeaturesEditList from "./FeaturesEditList";
import AddOrEditFeatureModal from "./AddOrEditFeatureModal";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const FeaturesDataInputs = () => {
  const { features, setFeatures } = useSelectedElements();
  const [openModal, setOpenModal] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState({
    name: "",
    description: "",
    icon: PhotoIcon,
  });
  const [selectedStyle, setSelectedStyle] = useState(features.options.styleSelections[0]);
  const settings = features.options.styleSelections;
  const [selectedListStyle, setSelectedListStyle] = useState(features.options.listStyle[0]);
  const settingsListStyle = features.options.listStyle;
  const [selectedIconStyle, setSelectedIconStyle] = useState(features.options.iconsStyle[0]);
  const settingsIcon = features.options.iconsStyle;

  console.log(selectedStyle)
 //update the amount of columns for the list of features
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
  



// update the selected style for entire block
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


// update the selected style for icon design
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

 


  const handleAddFeature = () => {
    setSelectedFeature({ name: "", description: "", icon: PhotoIcon });
    setOpenModal(true);
  };

  
  
  return (
    <>
      <h2 className="text-2xl my-4 font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
        Styles
      </h2>
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
              className={classNames(
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

      <h2 className="text-2xl my-4 font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
        Features List style
      </h2>
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
              className={classNames(
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


      <h2 className="text-2xl my-4 font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
        Icon styles
      </h2>
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
              className={classNames(
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
      <h2 className="text-2xl my-4 font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
        Data
      </h2>

      <div className="space-y-5">
        <InfoInput
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

        <InfoInput
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

        <InfoInput
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
        <h3 className="text-2xl my-4 font-bold leading-7 text-gray-900 sm:truncate  sm:tracking-tight">
          List of features
        </h3>

        

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
          onClick={handleAddFeature}
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

// {
//     display: true,
//     options: {
//       styleSelections: [{}],
//       featuresList: [
//         {
//           name: "Analyticsss",
//           description:
//             "Get a better understanding where your traffic is coming from",
//           icon: ChartPieIcon,
//         },
//         {
//           name: "Engagement",
//           description:
//             "Speak directly to your customers with our engagement tool",
//           icon: CursorArrowRaysIcon,
//         },
//         {
//           name: "Security",
//           description: "Your customers’ data will be safe and secure",
//           icon: FingerPrintIcon,
//         },
//         {
//           name: "Integrations",
//           description: "Your customers’ data will be safe and secure",
//           icon: SquaresPlusIcon,
//         },
//       ],

//       subtitle: {
//         text: "Announcing our next round of funding.",

//       },
//       headline: {
//         text: "Data to enrich your online business",
//       },
//       description: {
//         text: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.",
//       },
//     },
//   }
