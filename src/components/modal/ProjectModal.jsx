import React from "react";

const ProjectSelect = () => {
  return (
    <select name="project" id="project" className="border border-[var(--main-border)] w-full outline-none p-2 rounded-md placeholder-[var(--color-dg)] text-[var(--color-dw)] pl-2">
      <option value="project">Project</option>
    </select>
  );
};

export default ProjectSelect;
