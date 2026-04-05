import React from "react";

const PrioritySelect = ({ name, value, onChange }) => {
  return (
    <select name={name} value={value} onChange={onChange} id="priority" required className="border border-[var(--main-border)] w-full outline-none p-2 rounded-md placeholder-[var(--color-dg)] text-[var(--color-dw)] pl-2">
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
      <option value="critical">Critical</option>
    </select>
  );
};

export default PrioritySelect;
