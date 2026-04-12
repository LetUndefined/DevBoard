import React, { useState } from "react";
import { IssueContext } from "./IssueContext";
import { useLoaderData } from "react-router";

export const IssueProvider = ({ children }) => {
  const { issues } = useLoaderData();
  const [projectFilter, setProjectFilter] = useState(null);
  const [search, setSearch] = useState("");
  return <IssueContext value={{ issues, projectFilter, setProjectFilter, search, setSearch }}>{children}</IssueContext>;
};
