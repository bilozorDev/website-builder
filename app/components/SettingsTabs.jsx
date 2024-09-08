"use client";

import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useSelectedElements } from "../contexts/SelectedElementsContext";
import HeaderOptionsSelection from "./HeaderOptionsSelection";
import BodyOptionsSelection from "./BodyOptionsSelection";
import classNamesJoin from "../utils/classNamesJoin";

const tabs = [
  { name: "Header", value: "Header", count: "12" },
  { name: "Body", value: "Body", count: "6" },
  { name: "Footer", value: "Footer", count: "4" },
  { name: "Description", value: "Description" },
  { name: "Disqualified", value: "Disqualified" },
];

export default function SettingsTabs() {
  const { currentStep, setCurrentStep } = useSelectedElements();

  const handleTabClick = (tab) => {
    setCurrentStep(tab.value);
  };

  const renderContent = () => {
    switch (currentStep) {
      case "Header":
        return <HeaderOptionsSelection />;
      case "Body":
        return <BodyOptionsSelection />;
      case "Footer":
        return <div>Footer Content</div>;
      default:
        return <div>Select a tab to start customizing</div>;
    }
  };

  return (
    <>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        <select
          id="tabs"
          name="tabs"
          value={currentStep}
          onChange={(e) => setCurrentStep(e.target.value)}
          className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        >
          {tabs.map((tab) => (
            <option key={tab.value} value={tab.value}>
              {tab.name}
            </option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav aria-label="Tabs" className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <a
                key={tab.value}
                href="#"
                onClick={() => handleTabClick(tab)}
                aria-current={currentStep === tab.value ? "page" : undefined}
                className={classNamesJoin(
                  currentStep === tab.value
                    ? "border-indigo-500 text-indigo-600"
                    : "border-transparent text-gray-500 hover:border-gray-200 hover:text-gray-700",
                  "flex whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium"
                )}
              >
                {tab.name}
                {tab.count ? (
                  <span
                    className={classNamesJoin(
                      currentStep === tab.value
                        ? "bg-indigo-100 text-indigo-600"
                        : "bg-gray-100 text-gray-900",
                      "ml-3 hidden rounded-full px-2.5 py-0.5 text-xs font-medium md:inline-block"
                    )}
                  >
                    {tab.count}
                  </span>
                ) : null}
              </a>
            ))}
          </nav>
        </div>

        {/* Render the content based on the selected tab */}
        <div className="mt-6">{renderContent()}</div>
      </div>
    </>
  );
}
