import React from "react";
import { supabase } from "../../lib/supabase";
import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";

const DeleteModal = ({ closeModal, id }) => {
  const { openModal } = useContext(ModalContext);

  const deleteIssue = async () => {
    const response = await supabase.from("issues").delete().eq("id", id);
    closeModal(false);
    openModal(false);
    return response;
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-[var(--color-dg)]/20">
      <div className="border border-[var(--button-red)] w-[20%] bg-[var(--main-bg)] p-8 flex flex-col gap-6 text-center">
        <h4 className="text-[1rem] text-white">Delete Issue?</h4>
        <div className="flex justify-evenly">
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
