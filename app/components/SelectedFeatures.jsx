import Link from "next/link";
import { LinkIcon } from "@heroicons/react/24/outline";
import SelectedIcon from "./SelectedIconStyle";
import useSelectedFeatureStyle from "../hooks/useGetSelectedStyleId";
import FeaturesWrapper from "./features/FeaturesWrapper";
import { useFeatures } from "../contexts/FeaturesContext";

export default function SelectedFeatures() {
  const { features } = useFeatures();
  const { styleSelections } = features.options;
  const selectedId = useSelectedFeatureStyle(styleSelections);
  const { iconsStyle } = features.options;
  const selectedIconsId = useSelectedFeatureStyle(iconsStyle);
  const { listStyle } = features.options;
  const selectedIdForList = useSelectedFeatureStyle(listStyle);

  const {
    subtitle = "Deploy faster",
    headline = "Everything you need to deploy your app",
    description = "Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum    pulvinar et feugiat blandit at. In mi viverra elit nunc.",
    featuresList = [],
  } = features.options;
  if (selectedId === "headline-left-and-features-list-on-right") {
    return (
      <>
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 vertical gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              <div>
                <h2 className="text-base font-semibold leading-7 text-indigo-600">
                  {subtitle.text}
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  {headline.text}
                </p>
                <p className="mt-6 text-base leading-7 text-gray-600">
                  {description.text}
                </p>
              </div>
              <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
                {featuresList.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="font-semibold text-gray-900">
                      <SelectedIcon selectedId={selectedId} Icon={feature.icon} />
                      <div className="mt-2">{feature.name}</div>
                    </dt>
                    <dd className="mt-2">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </>
    );
  }
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
        <div
          className={`mx-auto mt-12 max-w-7xl sm:mt-20  ${
            selectedIdForList == "default" ? "lg:max-w-4xl" : null
          }`}
        >
          {selectedId === "image-right" ? (
            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
              {featuresList.map((feature) => (
                <div key={feature.name} className="relative pl-9 flex flex-row">
                  <SelectedIcon selectedId={selectedId} Icon={feature.icon} />

                  <dd className="flex-inline ml-4">
                    <span className="font-semibold text-gray-900 ">
                      {" "}
                      {feature.name}
                    </span>{" "}
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          ) : (
            <dl
              className={`grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none ${
                selectedIdForList == "3-columns"
                  ? "lg:grid-cols-3"
                  : selectedIdForList == "4-columns"
                  ? "lg:grid-cols-4"
                  : "lg:grid-cols-2"
              }  lg:gap-y-16`}
            >
              {featuresList.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 ">
                      <SelectedIcon selectedId={selectedIconsId} Icon={feature.icon} />
                    </div>
                    {feature.link ? (
                      <a href={feature.link} className="text-blue-800">
                        {feature.name}{" "}
                        <LinkIcon className="w-3 -top-1 relative inline-block" />
                      </a>
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
