"use client";
import React, { useEffect } from "react";
import { useSelectedElements } from "../contexts/SelectedElementsContext";
import { useState } from "react";
import { Description, Field, Label, Switch } from "@headlessui/react";
import { HexColorPicker } from "react-colorful";
import MenuItemsEditor from "./MenuItemsEditor";

const HeaderOptionsSelection = () => {
  const { setHeader, header } = useSelectedElements();
  const [color, setColor] = useState("#aabbcc");
console.log(header.alignment.selected)
  useEffect(() => {
    setHeader({
      ...header,
      bgColor: color,
    });
  }, [color]);

  {
    /*
  {
    darkBg: false,
    constrained: false,
    brandBg: false,
    flyoutMegaMenu: {
      selected: false,
      fullWidth: false,
    },
    simpleFlyoutMenu: {
      selected: false,
    },
    alignment: { options: [{ id: "Left" }, { id: "Center" }, { id: "Right" }], selected: "Center" },
  }
  */
  }

  return (
    <>
      <fieldset>
        <legend className="text-sm font-semibold leading-6 text-gray-900">
          Notifications
        </legend>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          How do you prefer to receive notifications?
        </p>
        <div className="mt-6 space-y-6">
          {header.alignment.options.map((aligmentSelection) => (
            
            <div key={aligmentSelection.id} className="flex items-center">
              <input
                defaultChecked={aligmentSelection.id === "center"}
                id={aligmentSelection.id}
                name="notification-method"
                type="radio"
                onClick={() =>
                  
                  {
                    console.log(aligmentSelection.id)
                  setHeader({
                    ...header,
                    alignment: {
                      ...header.alignment,
                      selected: aligmentSelection.id,
                    },
                  })}
                }
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label
                htmlFor={aligmentSelection.id}
                className="ml-3 block text-sm font-medium leading-6 text-gray-900 capitalize"
              >
                {aligmentSelection.id}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
      <hr className="my-8"/>
      <Field className="flex items-center">
        <Switch
          checked={header?.constrained}
          onChange={() =>
            setHeader({ ...header, constrained: !header.constrained })
          }
          className="group relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 data-[checked]:bg-indigo-600"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-5"
          />
        </Switch>
        <Label as="span" className="ml-3 text-sm">
          <span className="font-medium text-gray-900">Boxed</span>{" "}
        </Label>
      </Field>
      <hr className="my-8"/>

      <HexColorPicker color={color} onChange={setColor} />

      <hr className="my-8"/>

      <MenuItemsEditor />
    </>
  );
};

export default HeaderOptionsSelection;
