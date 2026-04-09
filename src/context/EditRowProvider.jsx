import React, { useReducer } from "react";
import { EditRowContext } from "./EditRowContext";

const initialState = {
  data: null,
  isEditing: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "EDIT_ISSUE":
      return { ...state, data: action.payload, isEditing: true };
    case "UPDATE_FIELD":
      return {
        ...state,
        data: { ...state.data, ...action.payload },
      };
    case "STOP_EDITING":
      return { ...state, data: null, isEditing: false };
    default:
      return state;
  }
}

export const EditRowProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <EditRowContext value={{ state, dispatch }}> {children} </EditRowContext>;
};
