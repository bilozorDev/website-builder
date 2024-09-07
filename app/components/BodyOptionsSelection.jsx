"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useSelectedElements } from "../contexts/SelectedElementsContext";
import { Radio, RadioGroup } from "@headlessui/react";
import { PhotoIcon } from "@heroicons/react/24/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const BodyOptionsSelection = () => {
  const { hero, setHero, features, setFeatures } = useSelectedElements();

  const [selected, setSelected] = useState(hero.options.styleSelections[0]);
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
      <fieldset>
        <legend className="sr-only">Notifications</legend>
        <div className="space-y-5">
          <div className="relative flex items-start">
            <div className="flex h-6 items-center">
              <input
                id="comments"
                name="comments"
                type="checkbox"
                aria-describedby="comments-description"
                checked={hero.display}
                onChange={() => setHero({ ...hero, display: !hero.display })}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
            </div>

            <div className="ml-3 text-sm leading-6">
              <label htmlFor="comments" className="font-medium text-gray-900">
                Add Hero
              </label>
              <p id="comments-description" className="text-gray-500">
                Add hero section
              </p>
            </div>
          </div>
          {hero.display ? (
            <>
              <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                Styles
              </h2>
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
                      className={classNames(
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
              <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                Data
              </h2>
              <div className="isolate -space-y-px rounded-md shadow-sm">
                <div className="relative rounded-md rounded-b-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-indigo-600">
                  <label
                    htmlFor="headline"
                    className="block text-xs font-medium text-gray-900"
                  >
                    Headline
                  </label>
                  <input
                    id="headline"
                    name="headline"
                    type="text"
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
                    className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="isolate -space-y-px rounded-md shadow-sm">
                <div className="relative rounded-md rounded-b-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-indigo-600">
                  <label
                    htmlFor="headline"
                    className="block text-xs font-medium text-gray-900"
                  >
                    Description
                  </label>
                  <input
                    id="description"
                    name="description"
                    type="text"
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
                    placeholder="Data to enrich your online business"
                    className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="isolate -space-y-px rounded-md shadow-sm">
                <div className="relative rounded-md rounded-b-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-indigo-600">
                  <label
                    htmlFor="news"
                    className="block text-xs font-medium text-gray-900"
                  >
                    News text
                  </label>
                  <input
                    id="news"
                    name="news"
                    value={hero.options.news.text || ""}
                    onChange={(e) =>
                      setHero({
                        ...hero,
                        options: {
                          ...hero.options,
                          news: { text: e.target.value },
                        },
                      })
                    }
                    type="text"
                    placeholder="Announcing our next round of funding."
                    className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="relative rounded-md rounded-t-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-indigo-600">
                  <label
                    htmlFor="news-link"
                    className="block text-xs font-medium text-gray-900"
                  >
                    News link
                  </label>
                  <input
                    id="news-link"
                    value={hero.options.news.link || ""}
                    onChange={(e) =>
                      setHero({
                        ...hero,
                        options: {
                          ...hero.options,
                          news: { ...hero.options.news, link: e.target.value },
                        },
                      })
                    }
                    name="news-link"
                    type="text"
                    placeholder="https://example.com"
                    className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="isolate -space-y-px rounded-md shadow-sm">
                <div className="relative rounded-md rounded-b-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-indigo-600">
                  <label
                    htmlFor="news"
                    className="block text-xs font-medium text-gray-900"
                  >
                    CTA button
                  </label>
                  <input
                    id="news"
                    name="news"
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
                    type="text"
                    placeholder="Announcing our next round of funding."
                    className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="relative rounded-md rounded-t-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-indigo-600">
                  <label
                    htmlFor="news-link"
                    className="block text-xs font-medium text-gray-900"
                  >
                    CTA link
                  </label>
                  <input
                    id="news-link"
                    value={hero.options.cta[0].link || ""}
                    onChange={(e) =>
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
                    name="news-link"
                    type="text"
                    placeholder="https://example.com"
                    className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="relative rounded-md rounded-t-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-indigo-600">
                  <div>
                    <label
                      htmlFor="btn-style"
                      className="block text-xs font-medium text-gray-900"
                    >
                      Button style
                    </label>
                    <select
                      id="btn-style"
                      name="btn-style"
                      value={hero.options.cta[0].style}
                      onChange={(e) =>
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
                      className="relative block w-full rounded-none rounded-t-md border-0 bg-transparent py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      <option value="btn">button</option>
                      <option value="text">text</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="isolate -space-y-px rounded-md shadow-sm">
                <div className="relative rounded-md rounded-b-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-indigo-600">
                  <label
                    htmlFor="news"
                    className="block text-xs font-medium text-gray-900"
                  >
                    Secondary button
                  </label>
                  <input
                    id="news"
                    name="news"
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
                    type="text"
                    placeholder="Announcing our next round of funding."
                    className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="relative rounded-md rounded-t-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-indigo-600">
                  <label
                    htmlFor="news-link"
                    className="block text-xs font-medium text-gray-900"
                  >
                    Secondary button link
                  </label>
                  <input
                    id="news-link"
                    value={hero.options.cta[1].link || ""}
                    onChange={(e) =>
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
                    name="news-link"
                    type="text"
                    placeholder="https://example.com"
                    className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="relative rounded-md rounded-t-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-indigo-600">
                  <div>
                    <label
                      htmlFor="btn-style"
                      className="block text-xs font-medium text-gray-900"
                    >
                      Button style
                    </label>
                    <select
                      id="btn-style"
                      name="btn-style"
                      value={hero.options.cta[1].style}
                      onChange={(e) =>
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
                      className="relative block w-full rounded-none rounded-t-md border-0 bg-transparent py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      <option value="btn">button</option>
                      <option value="text">text</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <div className="mt-2 flex items-center gap-x-3">
                  <PhotoIcon
                    aria-hidden="true"
                    className="h-12 w-12 text-gray-300"
                  />
                  <button
                    type="button"
                    className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  >
                    Change
                  </button>
                </div>
              </div>
            </>
          ) : null}
          <div className="relative flex items-start">
            <div className="flex h-6 items-center">
              <input
                id="features"
                name="features"
                type="checkbox"
                checked={features.display}
                onChange={() => setFeatures({ ...features, display: !features.display })}
                aria-describedby="features-description"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
            </div>
            <div className="ml-3 text-sm leading-6">
              <label htmlFor="features" className="font-medium text-gray-900">
                Feautures
              </label>
              <p id="features-description" className="text-gray-500">
                Add features section
              </p>
            </div>
          </div>
          <div className="relative flex items-start">
            <div className="flex h-6 items-center">
              <input
                id="offers"
                name="offers"
                type="checkbox"
                aria-describedby="offers-description"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
            </div>
            <div className="ml-3 text-sm leading-6">
              <label htmlFor="offers" className="font-medium text-gray-900">
                Offers
              </label>
              <p id="offers-description" className="text-gray-500">
                Get notified when a candidate accepts or rejects an offer.
              </p>
            </div>
          </div>
        </div>
      </fieldset>
    </>
  );
};

export default BodyOptionsSelection;
