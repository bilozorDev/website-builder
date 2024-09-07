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

  const handleAddFeature = () => {
    setSelectedFeature({ name: "", description: "", icon: PhotoIcon });
    setOpenModal(true);
  };

  const handleEditFeature = (feature) => {
    setSelectedFeature(feature);
    setOpenModal(true);
  };

  const addNewFeature = (selectedFeature) => {
    setFeatures({
      ...features,
      options: {
        ...features.options,
        featuresList: [...features.options.featuresList, selectedFeature],
      },
    });
  };

  return (
    <>
      <h2 className="text-2xl my-4 font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
        Styles
      </h2>

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
