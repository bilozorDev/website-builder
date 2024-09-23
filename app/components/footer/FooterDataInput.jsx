import { useFooter } from "@/app/contexts/FooterContext";
import React, { useEffect, useState } from "react";
import SettingsTitle from "../ui/SettingsTitle";
import { Radio, RadioGroup } from "@headlessui/react";
import classNamesJoin from "@/app/utils/classNamesJoin";
import TextInput from "../ui/TextInput";
import { SocialMediaIcon } from "./SocialMediaIcons";
import { Reorder } from "framer-motion";
import DraggableList from "../ui/DraggableList";

const FooterDataInput = () => {
  const { footer, setFooter } = useFooter();
  const initialSelectedStyle =
    footer.options.styleSelections.find((style) => style.selected) ||
    footer.options.styleSelections[0];

  const settings = footer.options.styleSelections;
  const [selectedStyle, setSelectedStyle] = useState(initialSelectedStyle);

  // Update footer style selection when `selectedStyle` changes
  useEffect(() => {
    setFooter((prev) => ({
      ...prev,
      options: {
        ...prev.options,
        styleSelections: settings.map((style) => ({
          ...style,
          selected: style.id === selectedStyle.id,
        })),
      },
    }));
  }, [selectedStyle]);

  const handleReorder = (newOrder) => {
    setFooter((prev) => ({
      ...prev,
      options: {
        ...prev.options,
        socialMediaLinks: newOrder,
      },
    }));
  };

  return (
    <>
      <SettingsTitle title="Style" />
      <fieldset aria-label="Footer Block Style">
        <RadioGroup
          value={selectedStyle}
          onChange={setSelectedStyle}
          className="-space-y-px rounded-md bg-white"
        >
          {footer.options.styleSelections.map((setting, settingIdx) => (
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
      <SettingsTitle title="Content" />

      <TextInput
        text="Company Name for Copyright"
        value={footer.options.copyright.companyName}
        onChange={(e) =>
          setFooter((prev) => ({
            ...prev,
            options: {
              ...prev.options,
              copyright: { companyName: e.target.value },
            },
          }))
        }
        placeholder="Apple, Inc."
      />
      <div className="mt-5">
        <TextInput
          text="Company Mission"
          value={footer.options.companyMission.text}
          onChange={(e) =>
            setFooter((prev) => ({
              ...prev,
              options: {
                ...prev.options,
                companyMission: { text: e.target.value },
              },
            }))
          }
          disabled={
            selectedStyle.id !== "4-columns" &&
            selectedStyle.id !== "4-columns_with_newsletter"
          }
          placeholder="Apple, Inc."
        />

        <span
          className={`text-sm ${
            selectedStyle.id === "4-columns" ||
            selectedStyle.id === "4-columns_with_newsletter"
              ? "text-transparent"
              : "text-gray-400"
          }`}
        >
          Only available in 4 column design
        </span>
      </div>

      <hr className="mb-5" />
      <SettingsTitle title="Social Media Links" />

      <DraggableList
        items={footer.options.socialMediaLinks}
        onReorder={handleReorder}
        renderItem={(item) => (
          <div className="relative mt-3 ">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <SocialMediaIcon name={item.icon} className="h-6 w-6" />
            </div>
            <input
              id={item.name}
              name={item.name}
              type="text"
              value={item.href}
              onChange={(e) =>
                setFooter((prev) => ({
                  ...prev,
                  options: {
                    ...prev.options,
                    socialMediaLinks: prev.options.socialMediaLinks.map((link) =>
                      link.name === item.name
                        ? { ...link, href: e.target.value }
                        : link
                    ),
                  },
                }))
              }
              placeholder={`${item.name} URL`}
              className="block w-full rounded-md border-0 py-1.5 pl-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        )}
      />
    </>
  );
};

export default FooterDataInput;
