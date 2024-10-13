"use client";
import React, { useEffect } from "react";

import { useState } from "react";
import { Description, Field, Label, Switch } from "@headlessui/react";
import { HexColorPicker } from "react-colorful";
import { useHeader } from "@/app/contexts/HeaderContext";
import MenuItemsEditor from "../MenuItemsEditor";
import DraggableList from "../ui/DraggableList";
import SettingsTitle from "../ui/SettingsTitle";
import { PlusIcon } from "@heroicons/react/24/outline";
import { v4 } from "uuid";

const HeaderDataInput = () => {
  const { setHeader, header } = useHeader();
  const [color, setColor] = useState(header.bgColor || "ffffff");
  const [menuItems, setMenuItems] = useState(header.menuItems.regularItems);
  const [cta, setCta] = useState(header.menuItems.cta);

  useEffect(() => {
    setHeader({
      ...header,
      bgColor: color,
      menuItems: {
        ...header.menuItems,
        regularItems: menuItems,
        cta,
      },
    });
  }, [color, cta, menuItems]);

  const handleHeaderItemReorder = (newOrder) => {
    setHeader({
      ...header,
      menuItems: {
        ...header.menuItems,
        regularItems: newOrder,
      },
    });
  };

  const handleMenuItemChange = (index, field, value) => {
    const updatedMenuItems = menuItems.map((item, idx) =>
      idx === index ? { ...item, [field]: value } : item
    );
    setMenuItems(updatedMenuItems);
    setHeader({
      ...header,
      menuItems: {
        ...header.menuItems,
        regularItems: updatedMenuItems,
      },
    });
  };

  const handleAddMenuItem = () => {
    const newMenuItem = {
      id: v4(),
      name: "New Menu Item",
      href: "#",
    };
    setMenuItems([...menuItems, newMenuItem]);
    setHeader({
      ...header,
      menuItems: {
        ...header.menuItems,
        regularItems: [...menuItems, newMenuItem],
      },
    });
  };
  return (
    <>
      <fieldset>
        <SettingsTitle title="Menu Aligment" />
        <div className="mt-6 space-y-6">
          {header.alignment.options.map((aligmentSelection) => (
            <div key={aligmentSelection.id} className="flex items-center">
              <input
                defaultChecked={aligmentSelection.id === "center"}
                id={aligmentSelection.id}
                name="notification-method"
                type="radio"
                onClick={() => {
                  console.log(aligmentSelection.id);
                  setHeader({
                    ...header,
                    alignment: {
                      ...header.alignment,
                      selected: aligmentSelection.id,
                    },
                  });
                }}
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
      {/* <hr className="my-8" />
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
      </Field> */}
      <hr className="my-8" />
      <SettingsTitle title="Background color" />
      <HexColorPicker color={color} onChange={setColor} />

      <hr className="my-8" />

      <SettingsTitle title="Menu Items" />
      <DraggableList
        items={header.menuItems.regularItems}
        onReorder={handleHeaderItemReorder}
        renderItem={(item, index) => (
          <div className="isolate -space-y-px rounded-md shadow-sm">
            <div className="relative rounded-md rounded-b-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-indigo-600">
              <label
                htmlFor={`menu-item-name-${index}`}
                className="block text-xs font-medium text-gray-500"
              >
                Link Name
              </label>
              <input
                id={`header-item-name-${index}`}
                name={`header-item-name-${index}`}
                type="text"
                value={item.name}
                onChange={(e) =>
                  handleMenuItemChange(index, "name", e.target.value)
                }
                placeholder="Link name"
                className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              />
            </div>
            <div className="relative rounded-md rounded-t-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-indigo-600">
              <label
                htmlFor={`menu-item-link-${index}`}
                className="block text-xs font-medium text-gray-500"
              >
                Link URL
              </label>
              <input
                id={`menu-item-link-${index}`}
                name={`menu-item-link-${index}`}
                type="text"
                value={item.href}
                onChange={(e) =>
                  handleMenuItemChange(index, "href", e.target.value)
                }
                placeholder="https://example.com"
                className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        )}
      />
      {header.menuItems.regularItems.length < 6 ? (
        <div
          onClick={handleAddMenuItem}
          className="relative flex mt-4 justify-center align-middle hover:cursor-pointer items-center space-x-3 rounded-lg border border-gray-300 group bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
        >
          Add Menu Item
          <PlusIcon className="h-5 w-5 ml-2 cursor-pointer  text-gray-600 z-50" />
        </div>
      ) : null}

      <SettingsTitle title="CTA" />
      <div className="isolate -space-y-px rounded-md shadow-sm">
        <div className="relative rounded-md rounded-b-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-indigo-600">
          <label
            htmlFor="CTA"
            className="block text-xs font-medium text-gray-500"
          >
            CTA
          </label>
          <input
            id="CTA"
            name="CTA"
            type="text"
            value={cta.text}
            onChange={(e) => setCta({ ...cta, text: e.target.value })}
            placeholder="Link name"
            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          />
        </div>
        <div className="relative rounded-md rounded-t-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-indigo-600">
          <label
            htmlFor="CTA-URL"
            className="block text-xs font-medium text-gray-500"
          >
            CTA URL
          </label>
          <input
            id="CTA-URL"
            name="CTA-URL"
            type="text"
            value={cta.href}
            onChange={(e) => setCta({ ...cta, href: e.target.value })}
            placeholder="https://example.com"
            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    </>
  );
};

export default HeaderDataInput;
