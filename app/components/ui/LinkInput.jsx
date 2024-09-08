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

      {btn ? (
        <div className="isolate -space-y-px rounded-md shadow-sm">
          <div className="relative rounded-md rounded-b-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 ">
            <label
              htmlFor={replaceWhiteSpacesWithDashes(text) + "-link"}
              className="block text-xs font-medium text-gray-500 mb-2"
            >
              {text + " link"}
            </label>
            <select
              id="btn-style"
              name="btn-style"
              value={btnValue}
              onChange={btnOnChange}
              className="absolute border-r- w-24 top-[55%] border-r border-0 bg-transparent py-0 pl-3 pr-7 focus:ring-0 text-gray-500  sm:text-sm"
            >
              <option value="btn">Button</option>
              <option value="text">Text</option>
            </select>

            <input
              id={replaceWhiteSpacesWithDashes(text) + "-link"}
              value={linkValue}
              onChange={linkOnChange}
              name={replaceWhiteSpacesWithDashes(text) + "-link"}
              type="text"
              placeholder="https://example.com"
              className="block w-full rounded-md border-0 py-1.5 pl-28 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default LinkInput;

const replaceWhiteSpacesWithDashes = (string) => {
  return string.replace(" ", "-").toLowerCase();
};
