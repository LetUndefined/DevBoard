import React, { useEffect } from "react";
import { IssueContext } from "../../context/IssueContext";
import { useContext } from "react";
import { useIssues } from "../../hooks/useIssues";

const ActiveProject = ({ projects }) => {
  const { projectFilter, setProjectFilter } = useContext(IssueContext);
  const { issues } = useIssues();

  useEffect(() => {
    if (projects.length > 0 && !projectFilter) {
      setProjectFilter(projects[0].id);
    }
  }, [projects, projectFilter, setProjectFilter]);

  const handleClick = (id) => {
    setProjectFilter(id);
  };

  return (
    <>
      <div className=" flex flex-col gap- p-2 text-[0.8rem] ">
        {projects.map((project) => {
          const filteredIssues = issues.filter((e) => e.project_id === project.id);
          return (
            <button
              key={project.id}
              onClick={() => handleClick(project.id)}
              className={` ${projectFilter === project.id ? "bg-[var(--bg-db)] , text-[var(--bg-blue)] " : ""} hover:disabled:text-[var(--color-dw)] cursor-pointer rounded-sm text-left w-full flex justify-between hover:bg-[var(--bg-db)] px-4 py-2`}
            >
              {project.name} <span className="border border-[var(--main-border)] rounded-xl px-2 text-[12px] flex items-center">{filteredIssues.length}</span>
            </button>
          );
        })}
      </div>
    </>
  );
};

export default ActiveProject;
