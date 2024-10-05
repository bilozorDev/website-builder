"use client";

import { useStats } from "@/app/contexts/StatsContext";
import { useState, useEffect } from "react";
import SettingsTitle from "../ui/SettingsTitle";
import { Radio, RadioGroup } from "@headlessui/react";
import TextInput from "../ui/TextInput";
import FeaturesEditList from "../features/FeaturesEditList";
import classNamesJoin from "@/app/utils/classNamesJoin";
import useGetSelectedStyleId from "@/app/hooks/useGetSelectedStyleId";
const StatsDataInput = () => {
  const { stats, setStats } = useStats();
  const [selectedStyle, setSelectedStyle] = useState(
    stats.options.styleSelections[0]
  );
  const selectedId = useGetSelectedStyleId(stats.options.styleSelections);

  useEffect(() => {
    setStats({
      ...stats,
      options: {
        ...stats.options,
        styleSelections: settings.map((setting) => {
          return {
            ...setting,
            selected: setting.id === selectedStyle.id,
          };
        }),
      },
    });
  }, [selectedStyle]);

  const settings = stats.options.styleSelections;
  return (
    <>
      <SettingsTitle title="Style" />
      <fieldset aria-label="Features Block Style">
        <RadioGroup
          value={selectedStyle}
          onChange={setSelectedStyle}
          className="-space-y-px rounded-md bg-white"
        >
          {stats.options.styleSelections.map((setting, settingIdx) => (
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

      {selectedId === "default" ? null : (
        <>
          <SettingsTitle title="Content" />

          <div className="space-y-5">
            <TextInput
              text="Headline"
              value={stats.options.headline.text}
              onChange={(e) =>
                setStats({
                  ...stats,
                  options: {
                    ...stats.options,
                    headline: { text: e.target.value },
                  },
                })
              }
              placeholder="Everything you need to deploy your app"
            />
            <TextInput
              text="Subtitle"
              value={stats.options.subtitle.text}
              onChange={(e) =>
                setStats({
                  ...stats,
                  options: {
                    ...stats.options,
                    subtitle: { text: e.target.value },
                  },
                })
              }
              placeholder="Deploy faster"
            />
            <TextInput
              text="Description"
              value={stats.options.description.text}
              onChange={(e) =>
                setStats({
                  ...stats,
                  options: {
                    ...stats.options,
                    description: { text: e.target.value },
                  },
                })
              }
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>
        </>
      )}
      <SettingsTitle title="Stats" />
      <div className="space-y-5">
        {stats.options.statsList.map((stat) => (
          <FeaturesEditList
            key={stat.name}
            name={stat.name}
            description={stat.description}
            onClick={() => handleEditFeature(stat)}
          />
        ))}
      </div>
    </>
  );
};

export default StatsDataInput;
