import React from "react";

export default function Search({ onSearchChange }) {
  return (
    <input
      type="search"
      onChange={onSearchChange}
      placeholder="Search for movies"
    />
  );
}
