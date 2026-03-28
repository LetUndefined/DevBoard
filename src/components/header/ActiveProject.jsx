import React from "react";

const ActiveProject = () => {
  return (
    <>
      <div className="flex p-2">
        <button className="focus:bg-[var(--bg-lb)] cursor-pointer rounded-sm p-1 text-left w-full flex justify-between">
          Dashboard <span className="border border-[var(--main-border)] rounded-xl px-2 text-[12px] flex items-center">0</span>
        </button>
      </div>
    </>
  );
};

export default ActiveProject;
