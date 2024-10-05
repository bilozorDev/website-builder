import React from "react";

const classNamesJoin = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

export default classNamesJoin;
