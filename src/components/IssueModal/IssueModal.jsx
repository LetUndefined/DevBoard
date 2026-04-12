import React from "react";
import FormField from "./FormField";
import StatusSelect from "./StatusModal";
import PrioritySelect from "./PriorityModal";
import DateInput from "./DateModal";
import ProjectSelect from "./ProjectModal";
import TagSelect from "./TagSelect";
import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";
import { useState } from "react";
import { EditRowContext } from "../../context/EditRowContext";
import { useAddIssue } from "../../hooks/useAddIssue";
import { useUpdateIssue } from "../../hooks/useUpdateIssue";
import DeleteModal from "../DeleteIssueModal/DeleteModal";
import { useLoaderData, useRevalidator } from "react-router";

const Modal = () => {
  const { state, dispatch, initialFormValue } = useContext(ModalContext);
  const [deleteModal, setDeleteModal] = useState(false);
  const { state: editState, dispatch: editDispatch } = useContext(EditRowContext);
  const [formData, setFormData] = useState(initialFormValue);
  const { projects } = useLoaderData();
  const { addNewIssue } = useAddIssue();
  const { updateIssue } = useUpdateIssue();
  const revalidator = useRevalidator();

  const newData = editState.isEditing ? editState.data : formData;

  const handleOnChange = (e) => {
    if (editState.isEditing) {
      editDispatch({ type: "UPDATE_FIELD", payload: { [e.target.name]: e.target.value } });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleFormSubmit = async () => {
    if (editState.isEditing) {
      await updateIssue(editState.data.id, {
        title: editState.data.title,
        description: editState.data.description,
        status: editState.data.status,
        due_date: editState.data.due_date,
        priority: editState.data.priority,
        tags: editState.data.tags,
        project_id: editState.data.project_id || editState.data.project || null,
      });
    } else {
      await addNewIssue({
        title: formData.title,
        description: formData.description,
        status: formData.status,
        due_date: formData.due_date,
        priority: formData.priority,
        tags: formData.tags,
        project_id: formData.project_id,
      });
    }
    revalidator.revalidate();
    setFormData(initialFormValue);
    dispatch({ type: "CLOSE_MODAL" });
    editDispatch({ type: "STOP_EDITING" });
  };

  if (!state.modal) return null;
  return (
    <div className="fixed inset-0 bg-[var(--color-dg)]/20 flex items-center justify-center">
      <div className="border border-[var(--main-border)] w-[40%]  bg-[var(--main-bg)] rounded-xl">
        <div className="py-4 px-8 border-b border-[var(--main-border)] flex justify-between text-[var(--main-color)]">
          <h4>New Issue</h4>
          <span className="cursor-pointer" onClick={() => [dispatch({ type: "CLOSE_MODAL" }), editDispatch({ type: "STOP_EDITING" })]}>
            x
          </span>
        </div>
        <div className="py-4 px-6 flex flex-col gap-6">
          <FormField label="Title">
            <input
              type="text"
              value={newData.title}
              onChange={handleOnChange}
              name="title"
              required
              className="border border-[var(--main-border)] w-full outline-none p-2 rounded-md placeholder-[var(--color-dg)] text-[var(--color-dw)] pl-2"
              placeholder="Short, descriptive issue title"
            />
          </FormField>

          <FormField label="Description">
            <textarea
              value={newData.description}
              onChange={handleOnChange}
              name="description"
              id="description"
              required
              className="border border-[var(--main-border)] w-full outline-none p-1 rounded-md text-[var(--color-dw)] placeholder-[var(--color-dg)] pl-2 h-32"
              placeholder="Add more context, steps to reproduce, or acceptance criteria…"
            />
          </FormField>

          <div className="flex gap-4">
            <div className="flex flex-col flex-1">
              <FormField label="Status">
                <StatusSelect onChange={handleOnChange} name="status" value={newData.status} />
              </FormField>
            </div>
            <div className="flex flex-col flex-1">
              <FormField label="Priority">
                <PrioritySelect onChange={handleOnChange} name="priority" value={newData.priority} />
              </FormField>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col flex-1">
              <FormField label="Due Date">
                <DateInput onChange={handleOnChange} name="due_date" value={newData.due_date} />
              </FormField>
            </div>
            <div className="flex flex-col flex-1">
              <FormField label="Project">
                <ProjectSelect onChange={handleOnChange} name="project_id" projects={projects} value={newData.project_id} />
              </FormField>
            </div>
          </div>

          <div>
            <FormField>
              <TagSelect onChange={handleOnChange} name="tags" value={newData.tags} />
            </FormField>
          </div>
        </div>
        <div className="flex justify-between py-4 gap-2  px-6 border-t border-[var(--main-border)] ">
          {newData.id && (
            <div className="text-[0.5rem] gap-2 text-[var(--color-grey)] flex items-center">
              <span>ID:</span>
              <span>{newData.id}</span>
            </div>
          )}
          <div className="flex gap-2">
            <button
              onClick={() => [dispatch({ type: "CLOSE_MODAL" }), editDispatch({ type: "STOP_EDITING" })]}
              className="bg-[var(--color-dg)] px-4 py-2 text-[var(--color-white)] hover:bg-[var(--color-grey)] cursor-pointer rounded-md text-[14px]"
            >
              Cancel
            </button>
            {!editState.isEditing && (
              <button onClick={handleFormSubmit} className="bg-[var(--button-blue)] px-4 py-2 text-[var(--color-white)] hover:bg-[var(--button-hover)] cursor-pointer rounded-md text-[14px]  ">
                Create Issue
              </button>
            )}
            {editState.isEditing && (
              <>
                <button onClick={() => setDeleteModal(true)} className="bg-[var(--button-red)] px-4 py-2 text-[var(--color-white)] hover:bg-[var(--button-red-hover)] cursor-pointer rounded-md text-[14px]  ">
                  Delete
                </button>
                <button onClick={handleFormSubmit} className="bg-[var(--button-blue)] px-4 py-2 text-[var(--color-white)] hover:bg-[var(--button-hover)]/50 cursor-pointer rounded-md text-[14px]  ">
                  Update Issue
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      {deleteModal && <DeleteModal closeModal={setDeleteModal} id={newData.id} />}
    </div>
  );
};

export default Modal;
