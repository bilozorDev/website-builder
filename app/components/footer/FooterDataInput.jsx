import { useFooter } from "@/app/contexts/FooterContext";
import React, { useEffect, useState } from "react";
import SettingsTitle from "../ui/SettingsTitle";
import { Radio, RadioGroup } from "@headlessui/react";
import classNamesJoin from "@/app/utils/classNamesJoin";
import TextInput from "../ui/TextInput";
import { SocialMediaIcon } from "./SocialMediaIcons";
import DraggableList from "../ui/DraggableList";

const FooterDataInput = () => {
  const { footer, setFooter } = useFooter();
  const initialSelectedStyle =
    footer.options.styleSelections.find((style) => style.selected) ||
    footer.options.styleSelections[0];
  
  // Use state directly from footer context
  const [menuItems, setMenuItems] = useState(footer.options.menuItems);
  const [selectedStyle, setSelectedStyle] = useState(initialSelectedStyle);

  const settings = footer.options.styleSelections;

  // Handle reordering of social media links
  const handleSocialMediaReorder = (newOrder) => {
    setFooter((prev) => ({
      ...prev,
      options: {
        ...prev.options,
        socialMediaLinks: newOrder,
      },
    }));
  };
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

  // Handle changes in social media link fields (href)
  const handleSocialMediaLinkChange = (name, value) => {
    setFooter((prev) => ({
      ...prev,
      options: {
        ...prev.options,
        socialMediaLinks: prev.options.socialMediaLinks.map((link) =>
          link.name === name ? { ...link, href: value } : link
        ),
      },
    }));
  };

  // Handle menu item field changes
  const handleMenuItemChange = (index, field, value) => {
    const updatedMenuItems = menuItems.map((item, idx) =>
      idx === index ? { ...item, [field]: value } : item
    );
    setMenuItems(updatedMenuItems);
    setFooter((prev) => ({
      ...prev,
      options: {
        ...prev.options,
        menuItems: updatedMenuItems,
      },
    }));
  };

  // Handle reordering of menu items
  const handleMenuItemsReorder = (newOrder) => {
    setMenuItems(newOrder);
    setFooter((prev) => ({
      ...prev,
      options: {
        ...prev.options,
        menuItems: newOrder,
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
      

      <hr className="mb-5" />
      <SettingsTitle title="Social Media Links" />

      <DraggableList
        items={footer.options.socialMediaLinks}
        onReorder={handleSocialMediaReorder}
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
              onChange={(e) => handleSocialMediaLinkChange(item.name, e.target.value)}
              placeholder={`${item.name} URL`}
              className="block w-full rounded-md border-0 py-1.5 pl-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        )}
      />

      <SettingsTitle title="Menu Items" />

      <DraggableList
        items={menuItems}
        onReorder={handleMenuItemsReorder}
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
                id={`menu-item-name-${index}`}
                name={`menu-item-name-${index}`}
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
    </>
  );
};

export default FooterDataInput;
