import React from "react";
 
export default function FilterControls({ onFilterChange }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onFilterChange((prev) => ({ ...prev, [name]: value }));
  };
 
  return (
<div className="flex gap-2 items-center flex-wrap">
      {/* Start Date picker */}
<input
        type="date"
        name="startDate"
        onChange={handleChange}
        className="border rounded px-2 py-1 text-sm"
      />
      {/* End Date picker */}
<input
        type="date"
        name="endDate"
        onChange={handleChange}
        className="border rounded px-2 py-1 text-sm"
      />
      {/* Time picker */}
<input
        type="time"
        name="time"
        onChange={handleChange}
        className="border rounded px-2 py-1 text-sm"

      />
      {/* Clear time button */}
<button
        type="button"
        onClick={() => onFilterChange((prev) => ({ ...prev, time: "" }))}
        className="px-2 py-1 text-xs border rounded bg-gray-100 hover:bg-gray-200"
>
        Clear Time
</button>
</div>

  );

}

 