import React from "react";

const InfoInput = ({
  text = "",
  value = "",
  onChange,
  placeholder = "",
  link=false,
  linkValue = "",
  linkOnChange,
  btn=false,
  btnValue="",
  btnOnChange

}) => {
  return (
    <div className="isolate -space-y-px rounded-md shadow-sm">
      <div className="relative rounded-md rounded-b-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-indigo-600">
        <label
          htmlFor={replaceWhiteSpacesWithDashes(text)}
          className="block text-xs font-medium text-gray-900"
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
      {link ? (
        <div className="relative rounded-md rounded-t-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-indigo-600">
          <label
            htmlFor={replaceWhiteSpacesWithDashes(text) + "-link"}
            className="block text-xs font-medium text-gray-900"
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
      ) : null}
      {btn ? <div>
            <label
              htmlFor="btn-style"
              className="block text-xs font-medium text-gray-900"
            >
              Button style
            </label>
            <select
              id="btn-style"
              name="btn-style"
              value={btnValue}
              onChange={btnOnChange}
              className="relative block w-full rounded-none rounded-t-md border-0 bg-transparent py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
              <option value="btn">button</option>
              <option value="text">text</option>
            </select>
          </div> : null}
    </div>
  );
};

export default InfoInput;

const replaceWhiteSpacesWithDashes = (string) => {
  return string.replace(" ", "-").toLowerCase();
};
