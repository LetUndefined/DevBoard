import { ModalContext } from "../../context/ModalContext";

const Issues = ({ issue, onRowClick }) => {
  const issueChip = {
    Todo: "text-blue-400 border-blue-400",
    "In Progress": "text-purple-400 border-purple-400",
    "In Review": "text-orange-400 border-orange-400",
    Done: "text-green-400 border-green-400",
  };

  const dotColor = {
    Todo: "bg-blue-400",
    "In Progress": "bg-purple-400",
    "In Review": "bg-orange-400",
    Done: "bg-green-400",
  };

  const priorityColors = {
    low: "bg-green-500",
    medium: "bg-yellow-500",
    high: "bg-orange-500",
    critical: "bg-red-500",
  };

  return (
    <tr
      className=" bg-[var(--secondary-bg)] text-white text-[0.8rem] border-[var(--main-border)] border-b border-t hover:bg-[var(--main-bg)] cursor-pointer hover:text-[var(--main-color)] "
      onClick={() => onRowClick(issue)}
    >
      <td className="text-left pl-6 w-[10%] h-[3rem] truncate relative text-[0.5rem] text-[var(--color-dg)] ">
        <span className={` ${priorityColors[issue.priority]} absolute w-1 h-9  top-[50%] -translate-y-1/2  left-[10%] `}></span>
        <span>{issue.id}</span>
      </td>
      <td className="text-left pl-6 w-[45%] max-w-[45%] overflow-hidden text-ellipsis whitespace-nowrap">{issue.title}</td>
      <td className={`text-left pl-6 w-[10%]`}>
        <span className={`${issueChip[issue.status]} border bg-gray-900 rounded-xl py-1 inline-flex items-center gap-2 text-[0.6rem] px-2`}>
          <span className={`${dotColor[issue.status]} w-2 h-2 rounded-full`}></span>
          {issue.status}
        </span>
      </td>
      <td className="text-center wa-[10%]">
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
      <td className="text-left pl-6 w-[15%]">{issue.due_date}</td>
    </tr>
  );
};

export default Issues;
