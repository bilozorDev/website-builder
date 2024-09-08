import React from "react";

const SettingsTitle = ({ title, small = false }) => {
  if (small) {
    return (
      <h3 className="text-lg my-4 font-bold leading-7 text-gray-900 sm:truncate sm:tracking-tight">
        {title}
      </h3>
    );
  }
  return (
    <h2 className="text-2xl my-4 font-bold leading-7 text-gray-900 sm:truncate sm:text-xl sm:tracking-tight">
      {title}
    </h2>
  );
};

export default SettingsTitle;
