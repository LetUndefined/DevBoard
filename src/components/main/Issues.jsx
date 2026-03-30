import React from "react";

const Issues = ({ issue }) => {
  return (
    <tr className=" bg-[var(--bg-lg)] ">
      <td className="text-left">{issue.id}</td>
      <td className="text-left">{issue.description}</td>
      <td className="text-right">{issue.status}</td>
      <td className="text-right">{issue.tags}</td>
      <td className="text-right">{issue.dueDate}</td>
    </tr>
  );
};

export default Issues;
