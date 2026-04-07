import React, { useContext } from "react";
import { IssueContext } from "../../context/IssueContext";
import Issues from "./Issues";
import { EditRowContext } from "../../context/EditRowContext";
import { ModalContext } from "../../context/ModalContext";
import Modal from "../IssueModal/IssueModal";

const IssuesList = () => {
  const { issues, projectFilter } = useContext(IssueContext);
  const { setData, setIsEditing } = useContext(EditRowContext);
  const { modal, openModal } = useContext(ModalContext);

  const handleEdit = (issue) => {
    setData(issue);
    setIsEditing(true);
    openModal(true);
  };

  const filteredArray = issues.filter((e) => e.project_id === projectFilter);

  return (
    <>
      <table className="w-full table-fixed ">
        <thead className="h-[2rem] w-full  ">
          <tr className="uppercase text-[var(--color-grey)] text-[10px] bg-[var(--main-bg)] ">
            <th className="text-left pl-6 w-[5%]">ID</th>
            <th className="text-left pl-6 w-[45%]">Title</th>
            <th className="text-left pl-6 w-[10%]">Status</th>
            <th className="text-left w-[20%]">Tags</th>
            <th className="text-left pl-6 w-[15%]">Due Date</th>
          </tr>
        </thead>
        <tbody className="">
          {filteredArray.length > 0 ? (
            filteredArray.map((issue) => {
              return <Issues key={issue.id} issue={issue} onRowClick={handleEdit} />;
            })
          ) : (
            <tr>
              <td colSpan="5" className="text-white p-2">
                No issues found
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {modal && <Modal />}
    </>
  );
};

export default IssuesList;
