import { useState } from "react";
import { ModalContext } from "./ModalContext";

export const ModalProvider = ({ children }) => {
  const [modal, openModal] = useState(false);

  return <ModalContext value={{ modal, openModal }}>{children}</ModalContext>;
};
