import { Radio, RadioGroup } from "@headlessui/react";
import React from "react";
import { useState, useEffect } from "react";
import TextInput from "../ui/TextInput";
import FeaturesEditList from "../features/FeaturesEditList";
import classNamesJoin from "@/app/utils/classNamesJoin";
import SettingsTitle from "../ui/SettingsTitle";
import LinkInput from "../ui/LinkInput";
import { useNewsletter } from "@/app/contexts/NewsletterContext";
import useGetSelectedStyleId from "@/app/hooks/useGetSelectedStyleId";

function NewsletterDataInputs() {
  const { newsletter, setNewsletter } = useNewsletter();

// Find the initially selected icon style based on the `selected: true` property
const initialSelectedIconStyle = newsletter.options.iconsStyle.find(
  (style) => style.selected
) || newsletter.options.iconsStyle[0]; // Fallback to the first if none are selected

// Find the initially selected style based on the `selected: true` property
const initialSelectedStyle = newsletter.options.styleSelections.find(
  (style) => style.selected
) || newsletter.options.styleSelections[0]; // Fallback to the first if none are selected

// Use the selected styles for state initialization
const [selectedIconStyle, setSelectedIconStyle] = useState(initialSelectedIconStyle);
const settingsIcon = newsletter.options.iconsStyle;

const [selectedStyle, setSelectedStyle] = useState(initialSelectedStyle);
const settings = newsletter.options.styleSelections;

const { styleSelections } = newsletter.options;
const selectedId = useGetSelectedStyleId(styleSelections);

// Update the selected style for icon design
useEffect(() => {
  setNewsletter({
    ...newsletter,
    options: {
      ...newsletter.options,
      iconsStyle: settingsIcon.map((iconStyle) => {
        return {
          ...iconStyle,
          selected: iconStyle.id === selectedIconStyle.id,
        };
      }),
    },
  });
}, [selectedIconStyle]);

// Update the selected style for the entire block
useEffect(() => {
  setNewsletter({
    ...newsletter,
    options: {
      ...newsletter.options,
      styleSelections: newsletter.options.styleSelections.map((setting) => ({
        ...setting,
        selected: setting.id === selectedStyle.id,
      })),
    },
  });
}, [selectedStyle]);
  return (
    <>
      <SettingsTitle title="Style" />
      <fieldset aria-label="Features Block Style">
        <RadioGroup
          value={selectedStyle}
          onChange={setSelectedStyle}
          className="-space-y-px rounded-md bg-white"
        >
          {newsletter.options.styleSelections.map((setting, settingIdx) => (
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

      {selectedId === "with-bullet-points" ? (
        <>
          <SettingsTitle title="Features" />
          <div className="space-y-4 pl-8">
            {newsletter.options.bulletPoints.map((feature) => (
              <FeaturesEditList
                key={feature.name}
                name={feature.name}
                description={feature.description}
                Icon={feature.icon}
                onClick={() => handleEditFeature(feature)}
                link={feature.link}
              />
            ))}
          </div>

          <SettingsTitle title="Icon Style" />
          <fieldset aria-label="Features Block Style">
            <RadioGroup
              value={selectedIconStyle}
              onChange={setSelectedIconStyle}
              className="-space-y-px rounded-md bg-white"
            >
              {newsletter.options.iconsStyle.map((setting, settingIdx) => (
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
        </>
      ) : null}
      <hr />
      <SettingsTitle title="Content" />

      <div className="space-y-5">
        <TextInput
          text="Description"
          value={newsletter.options.headline.text}
          onChange={(e) =>
            setNewsletter({
              ...newsletter,
              options: {
                ...newsletter.options,
                headline: { text: e.target.value },
              },
            })
          }
          placeholder="Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."
        />

        <TextInput
          text="Description"
          value={newsletter.options.subheadline.text}
          onChange={(e) =>
            setNewsletter({
              ...newsletter,
              options: {
                ...newsletter.options,
                subheadline: { text: e.target.value },
              },
            })
          }
          placeholder="Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."
        />

        <LinkInput
          text="Privacy notice"
          value={newsletter.options.privacyNote.text}
          onChange={(e) =>
            setNewsletter({
              ...newsletter,
              options: {
                ...newsletter.options,
                privacyNote: { ...newsletter.options.privacyNote, text: e.target.value },
              },
            })
          }
          placeholder="We care about your data"
          linkValue={newsletter.options.privacyNote.link}
          linkOnChange={(e) =>
            setNewsletter({
              ...newsletter,
              options: {
                ...newsletter.options,
                privacyNote: { ...newsletter.options.privacyNote, link: e.target.value },
              },
            })
          }
        />

        <TextInput
          text="Button text"
          value={newsletter.options.button.text}
          onChange={(e) =>
            setNewsletter({
              ...newsletter,
              options: {
                ...newsletter.options,
                button: { text: e.target.value },
              },
            })
          }
          placeholder="subscribe"
        />
      </div>
    </>
  );
}

export default NewsletterDataInputs;
