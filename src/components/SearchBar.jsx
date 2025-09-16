import React from "react";

export default function SearchBar({ onSearch }) {
  return (
<input
      type="text"
      placeholder="Search transactions..."
      className="border rounded-lg px-3 py-2 text-sm w-full md:w-64 shadow-sm"
      onChange={(e) => onSearch(e.target.value)}
    />

  );

}

 