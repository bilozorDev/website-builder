import Link from "next/link";
import { useSelectedElements } from "../contexts/SelectedElementsContext";
import { LinkIcon } from "@heroicons/react/24/outline";

export default function SelectedFeatures() {
  const { features } = useSelectedElements();
  const {
    subtitle = "Deploy faster",
    headline = "Everything you need to deploy your app",
    description = "Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum    pulvinar et feugiat blandit at. In mi viverra elit nunc.",
    featuresList = [],
  } = features.options;
 
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {featuresList.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      aria-hidden="true"
                      className="h-6 w-6 text-white"
                    />
                  </div>
                 {feature.link? <Link href={feature.link} className="text-blue-800" >{feature.name} <LinkIcon className="w-3 -top-1 relative inline-block" /></Link> : feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
