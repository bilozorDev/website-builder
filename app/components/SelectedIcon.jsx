import React from "react";
import { useSelectedElements } from "../contexts/SelectedElementsContext";
import useSelectedFeatureStyle from "../hooks/useSelectedFeatureStyle";
import { CheckIcon } from "@heroicons/react/24/outline";

const SelectedIcon = ({ Icon=CheckIcon }) => {
  const { features } = useSelectedElements();
  const { iconsStyle } = features.options;
  const selectedId = useSelectedFeatureStyle(iconsStyle);
  
  if (selectedId == "no-background") {
    return (
      <div className="flex h-10 w-10 items-center justify-center  bg-white">
        <Icon className="h-6 w-6 text-indigo-600" />
      </div>
    );
  }
  if (selectedId == "checkmarks"){
    return (
      <div className="flex h-10 w-10 items-center justify-center ">
        <CheckIcon aria-hidden="true" className="h-5 w-5 text-indigo-500" />
      </div>
    );
  }
  if (selectedId == "no-icons"){
    return null;
  }
    return (
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
        <Icon className="h-6 w-6 text-white" />
      </div>
    );
};

export default SelectedIcon;
