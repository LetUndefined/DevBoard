import React from "react";

import ActiveProject from "./ActiveProject";
import MenuSelect from "./MenuSelect";

const SideBar = () => {
  return (
    <>
      <div className="flex flex-col h-screen">
        <div className=" p-4 border-b-1 border-r border-[var(--main-border)] h-[60px] ">
          <h2 className="text-[20px]">DevBoard</h2>
        </div>

        <div className="flex flex-col p-4 border-b border-r-1 gap-1  border-[var(--main-border)]">
          <MenuSelect />
        </div>

        <div className="flex flex-col border-r gap-1  border-[var(--main-border)] p-2 flex-1">
          <div className="text-[12px] pt-2">
            <h4>Projects</h4>
          </div>
          <ActiveProject />
        </div>
      </div>
    </>
  );
};

export default SideBar;
