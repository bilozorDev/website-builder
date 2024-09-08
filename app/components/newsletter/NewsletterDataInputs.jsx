import { useSelectedElements } from "@/app/contexts/SelectedElementsContext";
import { Radio, RadioGroup } from "@headlessui/react";
import React from "react";
import { useState, useEffect } from "react";
import InfoInput from "../InfoInput";
import FeaturesEditList from "../features/FeaturesEditList";
import useSelectedHeroStyle from "@/app/hooks/useSelectedHeroStyle";
import classNamesJoin from "@/app/utils/classNamesJoin";

function NewsletterDataInputs() {
  const { newsletter, setNewsletter } = useSelectedElements();
  const [selectedIconStyle, setSelectedIconStyle] = useState(
    newsletter.options.iconsStyle[0]
  );
  const settingsIcon = newsletter.options.iconsStyle;
  const [selectedStyle, setSelectedStyle] = useState(
    newsletter.options.styleSelections[0]
  );
  const settings = newsletter.options.styleSelections;
  const { styleSelections } = newsletter.options;
  const selectedId = useSelectedHeroStyle(styleSelections);

  // update the selected style for icon design
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

  // update the selected style for entire block
  useEffect(() => {
    setNewsletter({
      ...newsletter,
      options: {
        ...newsletter.options,
        styleSelections: newsletter.options.styleSelections.map((setting) => ({
          ...setting,
          selected: setting.name === selectedStyle.name,
        })),
      },
    });
  }, [selectedStyle]);

  return (
    <>
      <h2 className="text-2xl my-4 font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
        Styles
      </h2>
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
          <h3 className="text-2xl my-4 font-bold leading-7 text-gray-900 sm:truncate  sm:tracking-tight">
            Bullet points
          </h3>
          <div className="space-y-4">
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

          <h2 className="text-2xl my-4 font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Icon styles
          </h2>
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
      <h2 className="text-2xl my-4 font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
        Data
      </h2>

      <div className="space-y-5">
        <InfoInput
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

        <InfoInput
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

        <InfoInput
          text="Privacy notice"
          value={newsletter.options.privacyNote.text}
          onChange={(e) =>
            setNewsletter({
              ...newsletter,
              options: {
                ...newsletter.options,
                privacyNote: { text: e.target.value },
              },
            })
          }
          placeholder="We care about your data"
          link={true}
          linkValue={newsletter.options.privacyNote.link || ""}
          linkOnChange={(e) =>
            setNewsletter({
              ...newsletter,
              options: {
                ...newsletter.options,
                privacyNote: { link: e.target.value },
              },
            })
          }
        />

        <InfoInput
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
