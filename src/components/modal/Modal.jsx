import React from "react";
import FormField from "./FormField";
import StatusSelect from "./StatusModal";
import PrioritySelect from "./PriorityModal";
import DateInput from "./DateModal";
import ProjectSelect from "./ProjectModal";
import TagSelect from "./TagSelect";
import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";

const Modal = () => {
  const { modal, openModal } = useContext(ModalContext);

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
            <input type="text" className="border border-[var(--main-border)] w-full outline-none p-2 rounded-md placeholder-[var(--color-dg)] text-[var(--color-dw)] pl-2" placeholder="Short, descriptive issue title" />
          </FormField>

          <FormField label="Description">
            <textarea
              name="description"
              id="description"
              className="border border-[var(--main-border)] w-full outline-none p-1 rounded-md text-[var(--color-dw)] placeholder-[var(--color-dg)] pl-2 h-32"
              placeholder="Add more context, steps to reproduce, or acceptance criteria…"
            />
          </FormField>

          <div className="flex gap-4">
            <div className="flex flex-col flex-1">
              <FormField label="Status">
                <StatusSelect />
              </FormField>
            </div>
            <div className="flex flex-col flex-1">
              <FormField label="Priority">
                <PrioritySelect />
              </FormField>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col flex-1">
              <FormField label="Due Date">
                <DateInput />
              </FormField>
            </div>
            <div className="flex flex-col flex-1">
              <FormField label="Project">
                <ProjectSelect />
              </FormField>
            </div>
          </div>

          <div>
            <FormField>
              <TagSelect />
            </FormField>
          </div>
        </div>
        <div className="flex justify-end py-4 gap-2  pr-6 border-t border-[var(--main-border)] ">
          <button onClick={() => openModal(false)} className="bg-[var(--color-dg)] px-4 py-2 text-[var(--color-white)] hover:bg-[var(--color-grey)] cursor-pointer rounded-md text-[14px]">
            Cancel
          </button>
          <button className="bg-[var(--button-blue)] px-4 py-2 text-[var(--color-white)] hover:bg-[var(--button-hover)] cursor-pointer rounded-md text-[14px]  ">Create Issue</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
