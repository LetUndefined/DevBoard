import React from "react";
import { useState } from "react";

const MenuSelect = () => {
  const [active, setActive] = useState("issues");
  return (
    <>
      <div className="flex flex-col w-full p-2 text-[0.8rem] ">
        <button
          onClick={() => setActive("issues")}
          className={`cursor-pointer rounded-sm p-1 px-4 text-left hover:bg-[var(--bg-db)] hover:disabled:text-[var(--color-dw)] ${active === "issues" ? "bg-[var(--bg-db)] text-[var(--bg-blue)]" : ""} `}
        >
          Issues
        </button>
        <button
          onClick={() => setActive("dashboard")}
          className={` cursor-pointer rounded-sm p-1 px-4 text-left hover:bg-[var(--bg-db)] hover:disabled:text-[var(--color-dw)] ${active === "dashboard" ? "bg-[var(--bg-db)] text-[var(--bg-blue)]" : ""}  `}
        >
          Dashboard
        </button>
      </div>
    </>
  );
};

export default MenuSelect;
