import React, { useEffect } from "react";
import { IssueContext } from "../../context/IssueContext";
import { useContext } from "react";
import { supabase } from "../../lib/supabase";

const ActiveProject = ({ projects, fetchProjects }) => {
  const { projectFilter, setProjectFilter, issues } = useContext(IssueContext);

  useEffect(() => {
    if (projects.length > 0 && !projectFilter) {
      setProjectFilter(projects[0].id);
    }
  }, [projects, projectFilter, setProjectFilter]);

  const handleClick = (id) => {
    setProjectFilter(id);
  };

  const handleDeleteProject = async (id) => {
    const response = await supabase.from("projects").delete().eq("id", id);
    fetchProjects();
    return response;
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
              className={`group ${projectFilter === project.id ? "bg-[var(--bg-db)] , text-[var(--bg-blue)] " : ""} hover:disabled:text-[var(--color-dw)] cursor-pointer rounded-sm text-left w-full flex justify-between hover:bg-[var(--bg-db)] px-4 py-2`}
            >
              {project.name}
              <div className="flex gap-2 ">
                <span className="border border-[var(--main-border)] rounded-xl px-2 text-[12px] flex items-center">{filteredIssues.length}</span>
                <span
                  onClick={() => handleDeleteProject(project.id)}
                  className={`border rounded-sm px-2 py-0.5 hover:text-red-500 transition-opacity duration-200 ${projectFilter === project.id ? "opacity-100" : "opacity-0"}`}
                >
                  x
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </>
  );
};

export default ActiveProject;
