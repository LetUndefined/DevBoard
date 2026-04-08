import React, { useState } from "react";
import ActiveProject from "./ActiveProject";
import MenuSelect from "./MenuSelect";
import CreateProjectModal from "../ProjectModal/CreateProjectModal";
import { supabase } from "../../lib/supabase";
import { useProjects } from "../../hooks/useProjects";

const SideBar = () => {
  const [modal, setModal] = useState(false);
  const { projects, loading, fetchProjects } = useProjects();

  const handleOpenModal = () => {
    setModal(true);
  };

  const handleAdd = async (input) => {
    try {
      const { error } = await supabase.from("projects").insert({ name: input });
      if (error) throw error;
      fetchProjects();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="flex flex-col h-screen  text-[var(--color-grey)]">
        <div className=" p-4 border-b-1 border-r border-[var(--main-border)] h-15 ">
          <h2 className="text-[20px] text-[var(--color-white)]">DevBoard</h2>
        </div>

        <div className=" flex border-b border-r-1 gap-1  border-[var(--main-border)] ">
          <MenuSelect />
        </div>

        <div className="flex flex-col border-r gap-1  border-[var(--main-border)] p-2 flex-1">
          <div className="text-[12px] pt-2">
            <h4>Projects</h4>
          </div>
          {loading ? <div>Loading...</div> : <ActiveProject projects={projects} fetchProjects={fetchProjects} />}
        </div>

        <div className="flex border-r justify-center border-[var(--main-border)] py-6">
          <div className="text-[12px] ">
            {modal && <CreateProjectModal setModal={setModal} handleAdd={handleAdd} />}
            <button onClick={() => handleOpenModal()} className="bg-[var(--button-green)] px-9 py-2 text-[var(--color-white)]  cursor-pointer rounded-xl text-[14px]  ">
              Add Project
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
