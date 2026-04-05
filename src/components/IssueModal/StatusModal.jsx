import React from "react";

const StatusSelect = ({ name, onChange, value }) => {
  return (
    <select name={name} id="status" onChange={onChange} value={value} required className="border border-[var(--main-border)] w-full outline-none p-2 rounded-md placeholder-[var(--color-dg)] text-[var(--color-dw)] pl-2">
      <option value="Todo">Todo</option>
      <option value="In Progress">In Progress</option>
      <option value="In Review">In Review</option>
      <option value="Done">Done</option>
    </select>
  );
};

export default StatusSelect;
