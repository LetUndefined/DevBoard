import React from "react";
import { IssueContext } from "./IssueContext";
import { useIssues } from "../hooks/useIssues";

export const IssueProvider = ({ children }) => {
  const { issues, fetchIssues } = useIssues();
  return <IssueContext value={{ issues, fetchIssues }}>{children}</IssueContext>;
};
