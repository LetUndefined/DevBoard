import { useState } from "react";
import { ModalContext } from "./ModalContext";

export const ModalProvider = ({ children }) => {
  const [modal, openModal] = useState(false);
  const initialFormValue = {
    id: "",
    title: "",
    description: "",
    status: "Todo",
    priority: "low",
    dueDate: "",
    project: "",
    tags: [],
  };

  return <ModalContext value={{ modal, openModal, initialFormValue }}>{children}</ModalContext>;
};
