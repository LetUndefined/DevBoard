import React, { useState } from "react";
import { IssueContext } from "./IssueContext";
import { useIssues } from "../hooks/useIssues";

export const IssueProvider = ({ children }) => {
  const { issues, fetchIssues } = useIssues();
  const [projectFilter, setProjectFilter] = useState(null);
  return <IssueContext value={{ issues, fetchIssues, projectFilter, setProjectFilter }}>{children}</IssueContext>;
};
