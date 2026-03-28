import React from "react";

const OpenTicketsChip = () => {
  return (
    <>
      <div className="flex border-1 p-1 text-[10px] rounded-full border-[var(--main-border)] text-[var(--color-grey)]">
        <div className="flex gap-1">
          <span>9</span>
          <span>open</span>
        </div>
      </div>
    </>
  );
};

export default OpenTicketsChip;
