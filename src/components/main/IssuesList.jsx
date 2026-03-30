import React, { useContext } from "react";
import { IssueContext } from "../../context/IssueContext";
import Issues from "./Issues";

const IssuesList = () => {
  const { issues } = useContext(IssueContext);
  return (
    <>
      <table className="w-full">
        <thead className="bg-[var(--bg-db)] h-[2rem] w-full ">
          <tr className="uppercase text-[var(--color-grey)] text-[10px] ">
            <th className="text-left pl-4">ID</th>
            <th className="text-left pl-4">Title</th>
            <th className="text-right pr-4">Status</th>
            <th className="text-right pr-4">Tags</th>
            <th className="text-right pr-4">Due Date</th>
          </tr>
        </thead>
        <tbody className="">
          {issues.map((issue) => {
            return <Issues key={issue.id} issue={issue} />;
          })}
        </tbody>
      </table>
    </>
  );
};

export default IssuesList;
