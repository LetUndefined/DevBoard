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
import { IssueContext } from "../../context/IssueContext";
import { EditRowContext } from "../../context/EditRowContext";
import { ProjectContext } from "../../context/ProjectContext";

const initialFormValue = {
  id: "",
  title: "",
  description: "",
  status: "Todo",
  priority: "low",
  dueDate: "",
  project: "project",
  tags: [],
};

const Modal = () => {
  const { modal, openModal } = useContext(ModalContext);
  const { issues, setIssues } = useContext(IssueContext);
  const { data, isEditing, setIsEditing, setData } = useContext(EditRowContext);
  const [formData, setFormData] = useState(initialFormValue);
  const { projects } = useContext(ProjectContext);

  const newData = isEditing ? data : formData;

  const handleOnChange = (e) => {
    if (isEditing) {
      setData({ ...data, [e.target.name]: e.target.value });
      console.log([e.target.name], e.target.value);
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleFormSubmit = () => {
    if (isEditing) {
      setIssues(issues.map((e) => (e.id === data.id ? data : e)));
    } else {
      setIssues([...issues, { ...formData, id: crypto.randomUUID() }]);
    }
    setFormData(initialFormValue);
    openModal(false);
    setIsEditing(false);
  };

  if (!modal) return null;
  return (
    <div className="fixed inset-0 bg-[var(--color-dg)]/20 flex items-center justify-center">
      <div className="border border-[var(--main-border)] w-[40%]  bg-[var(--main-bg)] rounded-xl">
        <div className="py-4 px-8 border-b border-[var(--main-border)] flex justify-between text-[var(--main-color)]">
          <h4>New Issue</h4>
          <span className="cursor-pointer" onClick={() => openModal(false)}>
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
                <DateInput onChange={handleOnChange} name="dueDate" value={newData.dueDate} />
              </FormField>
            </div>
            <div className="flex flex-col flex-1">
              <FormField label="Project">
                <ProjectSelect onChange={handleOnChange} name="project" projects={projects} value={newData.project} />
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
            <div className="text-[0.8rem] gap-2 text-white flex items-center">
              <span>ID:</span>
              <span>{newData.id}</span>
            </div>
          )}
          <div className="flex gap-2">
            <button onClick={() => [openModal(false), setIsEditing(false)]} className="bg-[var(--color-dg)] px-4 py-2 text-[var(--color-white)] hover:bg-[var(--color-grey)] cursor-pointer rounded-md text-[14px]">
              Cancel
            </button>
            {!isEditing && (
              <button onClick={handleFormSubmit} className="bg-[var(--button-blue)] px-4 py-2 text-[var(--color-white)] hover:bg-[var(--button-hover)] cursor-pointer rounded-md text-[14px]  ">
                Create Issue
              </button>
            )}
            {isEditing && (
              <button onClick={handleFormSubmit} className="bg-[var(--button-blue)] px-4 py-2 text-[var(--color-white)] hover:bg-[var(--button-hover)] cursor-pointer rounded-md text-[14px]  ">
                Update Issue
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
