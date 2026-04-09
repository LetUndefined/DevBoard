import React from "react";
import { supabase } from "../../lib/supabase";
import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";
import { IssueContext } from "../../context/IssueContext";

const DeleteModal = ({ closeModal, id }) => {
  const { dispatch } = useContext(ModalContext);
  const { fetchIssues } = useContext(IssueContext);

  const deleteIssue = async () => {
    const response = await supabase.from("issues").delete().eq("id", id);
    dispatch({ type: "CLOSE_MODAL" });

    fetchIssues();
    return response;
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-[var(--color-dg)]/20">
      <div className="border border-[var(--button-red)] w-[25%] bg-[var(--main-bg)] p-9 flex flex-col gap-6 text-center">
        <h4 className="text-[1rem] text-white">Delete Issue?</h4>
        <div className="flex justify-center gap-3 ">
          <button onClick={() => closeModal(false)} className="bg-[var(--color-dg)] text-white px-9 py-2 rounded-xl cursor-pointer hover:bg-[var(--color-grey)] ">
            Cancel
          </button>
          <button onClick={() => deleteIssue()} className="bg-[var(--button-red)] text-white px-9 py-2 rounded-xl cursor-pointer hover:bg-[var(--button-red-hover)] ">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
