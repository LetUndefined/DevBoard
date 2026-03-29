import React from "react";

const StatusSelect = ({ name, onChange, value }) => {
  return (
    <select name={name} id="status" onChange={onChange} value={value} className="border border-[var(--main-border)] w-full outline-none p-2 rounded-md placeholder-[var(--color-dg)] text-[var(--color-dw)] pl-2">
      <option value="toDo">Todo</option>
      <option value="inProgress">In Progress</option>
      <option value="inReview">In review</option>
      <option value="done">Done</option>
    </select>
  );
};

export default StatusSelect;
