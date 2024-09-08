import { useSelectedElements } from "@/app/contexts/SelectedElementsContext";
import useSelectedFeatureStyle from "@/app/hooks/useSelectedFeatureStyle";
import React from "react";

const FeaturesWrapper = ({ children }) => {
  const { features, setFeatures } = useSelectedElements();
  const { styleSelections } = features.options;
  const selectedId = useSelectedFeatureStyle(styleSelections);

 
    
 
  if (selectedId === "image-right") {
    return (
      <div className="bg-white py-24 sm:py-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid  max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div>
            {children}
            </div>
            <div>
            <img
            alt="Product screenshot"
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
          </div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-white py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">{children}</div>
    </div>
  );
};

export default FeaturesWrapper;
