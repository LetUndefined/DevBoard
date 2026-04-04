import React from "react";
import { useState } from "react";
import { ProjectContext } from "./ProjectContext";

export const ProjectProvider = ({ children }) => {
  const [projects, setProject] = useState([]);

  return <ProjectContext value={{ projects, setProject }}> {children} </ProjectContext>;
};
