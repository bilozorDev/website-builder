import React from "react";

const LinkInput = ({
  text = "",
  value = "",
  onChange,
  placeholder = "",
  linkValue = "",
  linkOnChange,
  btn = false,
  btnValue = "",
  btnOnChange,
}) => {
  return (
    <div className="isolate -space-y-px rounded-md shadow-sm">
      <div className="relative rounded-md rounded-b-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-indigo-600">
        <label
          htmlFor={replaceWhiteSpacesWithDashes(text)}
          className="block text-xs font-medium text-gray-500"
        >
          {text}
        </label>
        <input
          id={replaceWhiteSpacesWithDashes(text)}
          name={replaceWhiteSpacesWithDashes(text)}
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
        />
      </div>

      <div className="relative rounded-md rounded-t-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-indigo-600">
        <label
          htmlFor={replaceWhiteSpacesWithDashes(text) + "-link"}
          className="block text-xs font-medium text-gray-500"
        >
          {text + " link"}
        </label>
        <input
          id={replaceWhiteSpacesWithDashes(text) + "-link"}
          value={linkValue}
          onChange={linkOnChange}
          name={replaceWhiteSpacesWithDashes(text) + "-link"}
          type="text"
          placeholder="https://example.com"
          className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
        />
      </div>

      {btn ? (
        <div className="relative rounded-md rounded-t-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-indigo-600">
          <label
            htmlFor="btn-style"
            className="block text-xs font-medium text-gray-500"
          >
            Button style
          </label>
          <select
            id="btn-style"
            name="btn-style"
            value={btnValue}
            onChange={btnOnChange}
            className="relative block  border-0 bg-transparent py-1.5 text-gray-900 focus:z-10 sm:text-sm sm:leading-6"
          >
            <option value="btn">Button</option>
            <option value="text">Text</option>
          </select>
        </div>
      ) : null}
    </div>
  );
};

export default LinkInput;

const replaceWhiteSpacesWithDashes = (string) => {
  return string.replace(" ", "-").toLowerCase();
};

