import React from "react";

const TextInput = ({
  text = "",
  value = "",
  onChange,
  placeholder = "",
  disabled = false,
}) => {
  return (
    <InputField
      text={text}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
};

export default TextInput;

const InputField = ({ text, value, onChange, placeholder, disabled }) => {
  const replaceWhiteSpacesWithDashes = (string) => {
    return string.replace(" ", "-").toLowerCase();
  };

  return (
    <div className="isolate  rounded-md shadow-sm">
      <div className="relative rounded-md  px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-indigo-600">
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
          disabled={disabled}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 ${disabled ? "opacity-50 hover:cursor-not-allowed" : ""}`}
        />
      </div>
    </div>
  );
};
