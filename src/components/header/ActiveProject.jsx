import React, { useState } from "react";

const ActiveProject = () => {
  const [active, setActive] = useState("dashboard");
  return (
    <>
      <div className="flex p-2 text-[0.8rem] ">
        <button
          onClick={() => setActive("dashboard")}
          className={` ${active === "dashboard" ? "bg-[var(--bg-db)] , text-[var(--bg-blue)] " : ""} hover:disabled:text-[var(--color-dw)] cursor-pointer rounded-sm p-1 text-left w-full flex justify-between hover:bg-[var(--bg-db)] px-4`}
        >
          Dashboard <span className="border border-[var(--main-border)] rounded-xl px-2 text-[12px] flex items-center">0</span>
        </button>
      </div>
    </>
  );
};

export default ActiveProject;
