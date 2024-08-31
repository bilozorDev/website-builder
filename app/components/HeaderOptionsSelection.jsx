"use client"
import React from "react";
import { useSelectedElements } from "../contexts/SelectedElementsContext";
import { useState } from 'react'
import { Description, Field, Label, Switch } from '@headlessui/react'

const HeaderOptionsSelection = () => {
  const { setHeader, header } = useSelectedElements();
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
      <legend className="text-sm font-semibold leading-6 text-gray-900">Notifications</legend>
      <p className="mt-1 text-sm leading-6 text-gray-600">How do you prefer to receive notifications?</p>
      <div className="mt-6 space-y-6">
        {header.alignment.options.map((aligmentSelection) => (
          <div key={aligmentSelection.id} className="flex items-center">
            <input
              defaultChecked={aligmentSelection.id === 'center'}
              id={aligmentSelection.id}
              name="notification-method"
              type="radio"
              onClick={() => setHeader({ ...header, alignment: { ...header.alignment, selected: aligmentSelection.id } })}
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label htmlFor={aligmentSelection.id} className="ml-3 block text-sm font-medium leading-6 text-gray-900 capitalize">
              {aligmentSelection.id}
            </label>
          </div>
        ))}
      </div>
    </fieldset>
    </>
  );
};

export default HeaderOptionsSelection;
