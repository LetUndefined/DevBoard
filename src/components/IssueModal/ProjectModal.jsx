import React from "react";

const ProjectSelect = ({ name, value, onChange, projects }) => {
  return (
    <select name={name} onChange={onChange} value={value} id="project" className="border border-[var(--main-border)] w-full outline-none p-2 rounded-md placeholder-[var(--color-dg)] text-[var(--color-dw)] pl-2">
      {projects.map((e, index) => {
        return (
          <option key={index} value={e}>
            {e.name}
          </option>
        );
      })}
    </select>
  );
};

export default ProjectSelect;
