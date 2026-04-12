import { useReducer } from "react";
import { ModalContext } from "./ModalContext";

const initialState = { modal: false };

function reducer(state, action) {
  switch (action.type) {
    case "OPEN_MODAL":
      return { ...state, modal: true };
    case "CLOSE_MODAL":
      return { ...state, modal: false };
    default:
      return state;
  }
}

const initialFormValue = {
  id: "",
  title: "",
  description: "",
  status: "Todo",
  priority: "low",
  due_date: "",
  project_id: "",
  tags: [],
};

export const ModalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <ModalContext value={{ state, dispatch, initialFormValue }}>{children}</ModalContext>;
};
