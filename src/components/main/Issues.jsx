const Issues = ({ issue }) => {
  const statusObject = [
    { name: "Todo", textColor: "text-blue-400", dotColor: "bg-blue-400", border: "border-blue-400" },
    { name: "In Progress", textColor: "text-purple-400", dotColor: "bg-purple-400", border: "border-purple-400" },
    { name: "In Review", textColor: "text-orange-400", dotColor: "bg-orange-400", border: "border-orange-400" },
    { name: "Done", textColor: "text-green-400", dotColor: "bg-green-400", border: "border-green-400" },
  ];
  const handleStyle = (status) => {
    const style = statusObject.find((e) => e.name === status);
    return style;
  };

  return (
    <tr className=" bg-[var(--secondary-bg)] text-white text-[0.8rem] border-[var(--main-border)] border-b border-t ">
      <td className="text-left pl-4 w-[10%] h-[3rem]">{issue.id}</td>
      <td className="text-left pl-4 w-[45%] max-w-[45%] overflow-hidden text-ellipsis whitespace-nowrap">{issue.description}</td>
      <td className={`text-left pl-4 w-[10%]`}>
        <span className={`${handleStyle(issue.status).textColor} ${handleStyle(issue.status).border} border bg-gray-900 rounded-xl py-1 inline-flex items-center gap-2 text-[0.6rem] px-2`}>
          <span className={`${handleStyle(issue.status).dotColor} w-2 h-2 rounded-full`}></span>
          {issue.status}
        </span>
      </td>
      <td className="text-center w-[10%]">
        <div className="flex gap-2 overflow-hidden text-ellipsis whitespace-nowrap ">
          {issue.tags.map((e) => {
            return (
              <span key={e} className="border rounded-sm bg-[var(--bg-db)] border-[var(--main-border)] px-2">
                {e}
              </span>
            );
          })}
        </div>
      </td>
      <td className="text-left pl-4 w-[15%]">{issue.dueDate}</td>
    </tr>
  );
};

export default Issues;
