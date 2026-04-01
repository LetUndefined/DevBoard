import React, { useContext } from "react";
import { IssueContext } from "../../context/IssueContext";
import Issues from "./Issues";

const IssuesList = () => {
  const { issues } = useContext(IssueContext);
  return (
    <>
      <table className="w-full table-fixed ">
        <thead className="h-[2rem] w-full ">
          <tr className="uppercase text-[var(--color-grey)] text-[10px] bg-[var(--main-bg)] ">
            <th className="text-left pl-4 w-[10%]">ID</th>
            <th className="text-left pl-4 w-[45%]">Title</th>
            <th className="text-left pl-4 w-[10%]">Status</th>
            <th className="text-left w-[10%]">Tags</th>
            <th className="text-left pl-4 w-[15%]">Due Date</th>
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
