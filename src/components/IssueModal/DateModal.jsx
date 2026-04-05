import React from "react";

const DateInput = ({ name, onChange, value }) => {
  return (
    <input
      type="date"
      name={name}
      onChange={onChange}
      value={value}
      id="date"
      required
      className="border border-[var(--main-border)] w-full outline-none p-2 rounded-md placeholder-[var(--color-dg)] text-[var(--color-dw)] pl-2"
    />
  );
};

export default DateInput;
