import React, { useState } from "react";

const ActiveProject = ({ projects }) => {
  const [active, setActive] = useState(projects[0]?.id);
  return (
    <>
      <div className=" flex flex-col gap- p-2 text-[0.8rem] ">
        {projects.map((project) => {
          return (
            <button
              key={project.id}
              onClick={() => setActive(project.id)}
              className={` ${active === project.id ? "bg-[var(--bg-db)] , text-[var(--bg-blue)] " : ""} hover:disabled:text-[var(--color-dw)] cursor-pointer rounded-sm text-left w-full flex justify-between hover:bg-[var(--bg-db)] px-4 py-2`}
            >
              {project.name} <span className="border border-[var(--main-border)] rounded-xl px-2 text-[12px] flex items-center">0</span>
            </button>
          );
        })}
      </div>
    </>
  );
};

export default ActiveProject;
