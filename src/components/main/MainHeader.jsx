import OpenTicketsChip from "./OpenTicketsChip";
import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";

const MainHeader = () => {
  const { dispatch } = useContext(ModalContext);

  return (
    <>
      <div className="flex justify-between items-center border-b border-[var(--main-border)] bg-[var(--main-bg)] px-4 h-15  ">
        <div className="flex items-center gap-2">
          <div className="text-[var(--color-white)]">
            <h2>DevBoard</h2>
          </div>
          <div>
            <OpenTicketsChip />
          </div>
        </div>
        <div className="flex items-center gap-8">
          <div>
            <input
              className="border-1 border-[var(--main-border)] rounded-md p-1 pl-2 w-[10rem] text-[var(--color-grey)] focus:text-[var(--color-dw)] focus:border-[var(--main-color)] focus:outline-none focus:w-[13rem] transition-all duration-300 "
              type="text"
              placeholder="Search issues..."
            />
          </div>
          <div>
            <button onClick={() => dispatch({ type: "OPEN_MODAL" })} className="bg-[var(--button-blue)] px-4 py-2 text-[var(--color-white)] hover:bg-[var(--button-hover)] cursor-pointer rounded-xl text-[14px]  ">
              + New issue
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHeader;
