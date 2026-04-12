import React from "react";
import { IssueContext } from "../../context/IssueContext";
import { useContext } from "react";

const OpenTicketsChip = () => {
  const { issues, projectFilter } = useContext(IssueContext);

  const filteredIssues = issues.filter((e) => e.project_id === projectFilter);

  return (
    <>
      <div className="flex border-1 p-1 text-[10px] rounded-full border-[var(--main-border)] text-[var(--color-grey)]">
        <div className="flex gap-1 px-1 py-0.5">
          <span>{filteredIssues.length}</span>
          <span>open</span>
        </div>
      </div>
    </>
  );
};

export default OpenTicketsChip;
