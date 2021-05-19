import React from "react";

import classes from "./Search.module.css";

export default function Search({ onSearchChange, placeholder }) {
  return (
    <input
      type="search"
      placeholder={placeholder}
      aria-label="Search"
      onChange={onSearchChange}
      className={classes.input}
    />
  );
}
