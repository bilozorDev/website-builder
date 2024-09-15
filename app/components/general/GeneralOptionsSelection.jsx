import React from "react";
import SettingsTitle from "../ui/SettingsTitle";
import {
  BugAntIcon,
  ChatBubbleLeftRightIcon,
  ComputerDesktopIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";
import ColorPickerButton, { ColorPicker } from "../ui/ColorPickerButton";
import { BlockPicker } from "react-color";
import { useColor } from "@/app/contexts/ColorContext";

const GeneralOptionsSelection = () => {
    const { colors } = useColor(); // Make sure you access colors here
  return (
    <>
      <SettingsTitle title="Website identity" />
      <div className="isolate -space-y-px rounded-md shadow-sm">
        <div className="relative rounded-md rounded-b-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-indigo-600">
          <label
            htmlFor="name"
            className="block text-xs font-medium text-gray-900"
          >
            Website name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Website builder"
            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          />
        </div>
        <div className="relative rounded-md rounded-t-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-indigo-600">
          <label
            htmlFor="desc"
            className="block text-xs font-medium text-gray-900"
          >
            Website Description
          </label>
          <input
            id="desc"
            name="desc"
            type="text"
            placeholder="Awesome website to build your own website"
            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <hr className="my-5" />
      <SettingsTitle title="Logo" />
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative">
          <div className=" tracking-tighter absolute w-full text-center top-0">
            Current logo:
          </div>
          <div className="flex items-center h-full justify-center ">
            <img
              alt="Your Company"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              className="h-8 w-auto"
            />
          </div>
          <div className=" tracking-tighter absolute w-full text-center bottom-0 text-gray-400">
            Recommended ratio 1:1{" "}
          </div>
        </div>
        <button
          type="button"
          className="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <PhotoIcon className="mx-auto h-12 w-12 text-gray-400" />

          <span className="mt-2 block text-sm font-semibold text-gray-900">
            Upload new logo
          </span>
        </button>
      </div>
      <hr className="my-5" />
      <SettingsTitle title="Colors" />

      <div className="grid auto-cols-max pl-8 grid-cols-2 gap-y-5 ">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Brand color:
        </h2>
        <ColorPickerButton colorType="brandColor" />

        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Background color:
        </h2>
        <ColorPickerButton colorType="backgroundColor" />

        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Text color:
        </h2>
        <ColorPickerButton colorType="textColor" />
      </div>

      {/* Example Section */}
      <div>
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Example:
        </h2>
        <div
          className="isolate bg-gray-800 rounded-3xl px-6 py-24 sm:py-32 lg:px-8 mt-8"
          style={{ backgroundColor: colors.backgroundColor }} // Apply background color
        >
          <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-base font-semibold leading-8"  style={{ color: colors.brandColor }}>Our track record</h2>
            <h2
              className="text-3xl font-bold tracking-tight sm:text-4xl"
              style={{ color: colors.textColor }} // Apply text color
            >
              Contact sales
            </h2>
            <p
              className="mt-2 text-lg leading-8"
              style={{ color: colors.textColor }}
            >
              Aute magna irure deserunt veniam aliqua magna enim voluptate.
            </p>
          </div>
          <div className="mx-auto mt-20 max-w-lg space-y-16">
            <div className="flex gap-x-6">
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                style={{ backgroundColor: colors.brandColor }} // Apply brand color
              >
                <ChatBubbleLeftRightIcon
                  aria-hidden="true"
                  className="h-6 w-6 text-white"
                />
              </div>
              <div>
                <h3
                  className="text-base font-semibold leading-7"
                  style={{ color: colors.textColor }}
                >
                  Sales support
                </h3>
                <p
                  className="mt-2 leading-7"
                  style={{ color: colors.textColor }}
                >
                  Ut cursus est ut amet. Lobortis eget egestas leo vitae eget
                  porttitor risus blandit. Nunc a in lorem vel iaculis
                  porttitor.
                </p>
                <p className="mt-4">
                  <a
                    href="#"
                    className="text-sm font-semibold leading-6"
                    style={{ color: colors.brandColor }} // Apply brand color to link
                  >
                    Contact us <span aria-hidden="true">&rarr;</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GeneralOptionsSelection;
