import React from "react";
import OpenTicketsChip from "./OpenTicketsChip";

const MainHeader = () => {
  return (
    <>
      <div className="flex justify-between items-center border-b border-[var(--main-border)] px-4 h-[60px]  ">
        <div className="flex items-center gap-2">
          <div className="text-[var(--color-white)]">
            <h2>DevBoard</h2>
          </div>
          <div>
            <OpenTicketsChip />
          </div>
        </div>
        <div className="flex items-center gap-8">
          <div>
            <input className="border-1 border-[var(--main-border)]  rounded-md p-1 pl-2  text-[var(--color-grey)]  " type="text" placeholder="Search issues..." />
          </div>
          <div>
            <button className="bg-[var(--bg-lb)] px-4 py-2 text-[var(--color-white)] rounded-xl text-[14px]  ">+ New issue</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHeader;
