import React from "react";
import OpenTicketsChip from "./OpenTicketsChip";

const MainHeader = () => {
  return (
    <>
      <div className="flex justify-between items-center border-b border-[var(--main-border)] px-4 h-[60px] ">
        <div className="flex items-center gap-2">
          <div>
            <h2>DevBoard</h2>
          </div>
          <div>
            <OpenTicketsChip />
          </div>
        </div>
        <div className="flex items-center gap-8">
          <div>
            <input className="border-1 border-[var(--main-border)]  rounded-md p-1 pl-2 " type="text" placeholder="Search issues" />
          </div>
          <div>
            <button className="bg-white px-4 py-2  rounded-xl text-[14px] ">+ New issue</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHeader;
