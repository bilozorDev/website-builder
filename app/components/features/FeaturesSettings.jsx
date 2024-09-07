import { useSelectedElements } from "@/app/contexts/SelectedElementsContext";
import React from "react";

const FeaturesSettings = () => {
  const { features, setFeatures } = useSelectedElements();
  return (
    <div className="relative flex items-start">
      <div className="flex h-6 items-center">
        <input
          id="features"
          name="features"
          type="checkbox"
          aria-describedby="features-description"
          checked={features.display}
          onChange={() => setFeatures({ ...features, display: !features.display })}
          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
        />
      </div>

      <div className="ml-3 text-sm leading-6">
        <label htmlFor="features" className="font-medium text-gray-900">
          Add Features
        </label>
        <p id="features-description" className="text-gray-500">
          Add features section
        </p>
      </div>
    </div>
  );
};

export default FeaturesSettings;
