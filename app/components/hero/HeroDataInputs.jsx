"use client";
import React from "react";
import { useState, useEffect } from "react";
import { Radio, RadioGroup } from "@headlessui/react";
import { PhotoIcon } from "@heroicons/react/24/outline";
import TextInput from "../ui/TextInput";
import classNamesJoin from "@/app/utils/classNamesJoin";
import SettingsTitle from "../ui/SettingsTitle";
import LinkInput from "../ui/LinkInput";
import { useHero } from "@/app/contexts/HeroContext";

const HeroDataInputs = () => {
  const { hero, setHero } = useHero();
  // Find the initially selected style based on the `selected: true` property
  const initialSelected = hero.options.styleSelections.find(
    (style) => style.selected
  ) || hero.options.styleSelections[0];
  const [selected, setSelected] = useState(initialSelected);
  const settings = hero.options.styleSelections;

  //update the hero state with the selected style
  useEffect(() => {
    setHero({
      ...hero,
      options: {
        ...hero.options,
        styleSelections: settings.map((setting) => {
          return {
            ...setting,
            selected: setting.id === selected.id,
          };
        }),
      },
    });
  }, [selected]);

  return (
    <>
      <SettingsTitle title="Style" />
      <fieldset aria-label="Privacy setting">
        <RadioGroup
          value={selected}
          onChange={setSelected}
          className="-space-y-px rounded-md bg-white"
        >
          {hero.options.styleSelections.map((setting, settingIdx) => (
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

      <SettingsTitle title="Content" />
      <div className="space-y-5">
        <TextInput
          text="Headline"
          value={hero.options.headline.text}
          onChange={(e) =>
            setHero({
              ...hero,
              options: {
                ...hero.options,
                headline: { text: e.target.value },
              },
            })
          }
          placeholder="Data to enrich your online business"
        />
        <TextInput
          text="Description"
          value={hero.options.description.text}
          onChange={(e) =>
            setHero({
              ...hero,
              options: {
                ...hero.options,
                description: { text: e.target.value },
              },
            })
          }
          placeholder="Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."
        />
        <LinkInput
          text="News text"
          value={hero.options.news.text}
          onChange={(e) =>
            setHero({
              ...hero,
              options: {
                ...hero.options,
                news: { ...hero.options.news, text: e.target.value },
              },
            })
          }
          placeholder="Announcing our next round of funding."
          link={true}
          linkValue={hero.options.news.link || ""}
          linkOnChange={(e) =>
            setHero({
              ...hero,
              options: {
                ...hero.options,
                news: { ...hero.options.news, link: e.target.value },
              },
            })
          }
        />

        <LinkInput
          text="CTA button"
          value={hero.options.cta[0].text || ""}
          onChange={(e) =>
            setHero({
              ...hero,
              options: {
                ...hero.options,
                cta: [
                  {
                    text: e.target.value,
                    link: hero.options.cta[0].link,
                    style: hero.options.cta[0].style,
                  },
                  hero.options.cta[1],
                ],
              },
            })
          }
          placeholder="Announcing our next round of funding."
          link={true}
          linkValue={hero.options.cta[0].link || ""}
          linkOnChange={(e) =>
            setHero({
              ...hero,
              options: {
                ...hero.options,
                cta: [
                  {
                    text: hero.options.cta[0].text,
                    link: e.target.value,
                    style: hero.options.cta[0].style,
                  },
                  hero.options.cta[1],
                ],
              },
            })
          }
          btn={true}
          btnValue={hero.options.cta[0].style}
          btnOnChange={(e) =>
            setHero({
              ...hero,
              options: {
                ...hero.options,
                cta: [
                  {
                    text: hero.options.cta[0].text,
                    link: hero.options.cta[0].link,
                    style: e.target.value,
                  },
                  hero.options.cta[1],
                ],
              },
            })
          }
        />

        <LinkInput
          text="Secondary button"
          value={hero.options.cta[1].text || ""}
          onChange={(e) =>
            setHero({
              ...hero,
              options: {
                ...hero.options,
                cta: [
                  hero.options.cta[0],
                  {
                    text: e.target.value,
                    link: hero.options.cta[1].link,
                    style: hero.options.cta[1].style,
                  },
                ],
              },
            })
          }
          placeholder="Announcing our next round of funding."
          link={true}
          linkValue={hero.options.cta[1].link || ""}
          linkOnChange={(e) =>
            setHero({
              ...hero,
              options: {
                ...hero.options,
                cta: [
                  hero.options.cta[0],
                  {
                    text: hero.options.cta[1].text,
                    link: e.target.value,
                    style: hero.options.cta[1].style,
                  },
                ],
              },
            })
          }
          btn={true}
          btnValue={hero.options.cta[1].style}
          btnOnChange={(e) =>
            setHero({
              ...hero,
              options: {
                ...hero.options,
                cta: [
                  hero.options.cta[0],
                  {
                    text: hero.options.cta[1].text,
                    link: hero.options.cta[1].link,
                    style: e.target.value,
                  },
                ],
              },
            })
          }
        />
      </div>
      {/* <div>
        <div className="mt-2 flex items-center gap-x-3">
          <PhotoIcon aria-hidden="true" className="h-12 w-12 text-gray-300" />
          <button
            type="button"
            className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            Change
          </button>
        </div>
      </div> */}
    </>
  );
};

export default HeroDataInputs;
