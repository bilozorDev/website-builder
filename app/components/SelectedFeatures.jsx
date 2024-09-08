import Link from "next/link";
import { useSelectedElements } from "../contexts/SelectedElementsContext";
import { LinkIcon } from "@heroicons/react/24/outline";
import SelectedIcon from "./SelectedIconStyle";
import useSelectedFeatureStyle from "../hooks/useSelectedFeatureStyle";
import FeaturesWrapper from "./features/FeaturesWrapper";

export default function SelectedFeatures() {
  const { features } = useSelectedElements();
  const { styleSelections } = features.options;
  const selectedId = useSelectedFeatureStyle(styleSelections);
  const {
    subtitle = "Deploy faster",
    headline = "Everything you need to deploy your app",
    description = "Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum    pulvinar et feugiat blandit at. In mi viverra elit nunc.",
    featuresList = [],
  } = features.options;

  return (
    <>
      <FeaturesWrapper>
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            {subtitle.text}
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {headline.text}
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {description.text}
          </p>
        </div>
        {selectedId == "image-under-text" ? (
          <div className="relative overflow-hidden pt-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <img
                alt="App screenshot"
                src="https://tailwindui.com/img/component-images/project-app-screenshot.png"
                width={2432}
                height={1442}
                className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
              />
              <div aria-hidden="true" className="relative">
                <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
              </div>
            </div>
          </div>
        ) : null}
        <div className="mx-auto mt-12 max-w-2xl sm:mt-20  lg:max-w-4xl">
          {selectedId === "image-right" ? (
            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
              {featuresList.map((feature) => (
                <div key={feature.name} className="relative pl-9 flex flex-row">
                  <SelectedIcon Icon={feature.icon} />
                  
                  <dd className="flex-inline ml-4"><span className="font-semibold text-gray-900 "> {feature.name}</span> {feature.description}</dd>
                </div>
              ))}
            </dl>
          ) : (
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {featuresList.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 ">
                      <SelectedIcon Icon={feature.icon} />
                    </div>
                    {feature.link ? (
                      <Link href={feature.link} className="text-blue-800">
                        {feature.name}{" "}
                        <LinkIcon className="w-3 -top-1 relative inline-block" />
                      </Link>
                    ) : (
                      feature.name
                    )}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </FeaturesWrapper>
    </>
  );
}
