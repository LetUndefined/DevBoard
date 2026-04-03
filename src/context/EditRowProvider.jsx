import React, { useState } from "react";
import { EditRowContext } from "./EditRowContext";

export const EditRowProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  return <EditRowContext.Provider value={{ data, setData, isEditing, setIsEditing }}> {children} </EditRowContext.Provider>;
};
