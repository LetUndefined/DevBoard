import React from "react";

const MenuSelect = () => {
  return (
    <>
      <div className="flex flex-col w-full p-2">
        <button className="focus:bg-[var(--bg-lb)] cursor-pointer rounded-sm p-1 text-left ">Issues</button>
        <button className="focus:bg-[var(--bg-lb)] cursor-pointer rounded-sm p-1 text-left ">Dashboard</button>
      </div>
    </>
  );
};

export default MenuSelect;
