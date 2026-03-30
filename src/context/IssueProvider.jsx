import React, { useState } from "react";
import { IssueContext } from "./IssueContext";

export const IssueProvider = ({ children }) => {
  const [issues, setIssues] = useState([]);
  return <IssueContext value={{ issues, setIssues }}> {children} </IssueContext>;
};
