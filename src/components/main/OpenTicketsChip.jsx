import React from "react";
import { IssueContext } from "../../context/IssueContext";
import { useContext } from "react";

const OpenTicketsChip = () => {
  const { issues } = useContext(IssueContext);

  return (
    <>
      <div className="flex border-1 p-1 text-[10px] rounded-full border-[var(--main-border)] text-[var(--color-grey)]">
        <div className="flex gap-1">
          <span>{issues.length}</span>
          <span>open</span>
        </div>
      </div>
    </>
  );
};

export default OpenTicketsChip;
