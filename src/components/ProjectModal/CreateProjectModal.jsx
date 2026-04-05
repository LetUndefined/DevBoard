import React, { useState } from "react";

const CreateProjectModal = ({ setModal, handleAdd }) => {
  const [input, setInput] = useState("");

  const handleClick = () => {
    setModal(false);

    handleAdd(input.trim());

    setInput("");
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-[var(--color-dg)]/20">
      <div className="border w-[20%] bg-[var(--main-bg)] p-8 flex flex-col gap-6 text-center">
        <h4 className="text-[1rem]">Enter Project Name</h4>
        <input type="text" className="border rounded-md text-center p-2 text-[1rem]" onChange={(e) => setInput(e.target.value)} />
        <div className="flex justify-evenly">
          <button onClick={() => setModal(false)} className="bg-[var(--color-dg)] text-white px-9 py-2 rounded-xl cursor-pointer">
            Cancel
          </button>
          <button onClick={() => handleClick()} className="bg-[var(--button-green)] text-white px-9 py-2 rounded-xl cursor-pointer">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateProjectModal;
