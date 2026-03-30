import { ModalProvider } from "./context/ModalProvider";
import SideBar from "./components/header/SideBar";
import MainHeader from "./components/main/MainHeader";
import Modal from "./components/modal/Modal";

const App = () => {
  return (
    <ModalProvider>
      <div className="flex">
        <header className=" text-[var(--main-color)] bg-[var(--main-bg)] min-h-screen w-64  ">
          <SideBar />
        </header>
        <main className=" bg-[var(--main-bg)] h-screen flex-1 ">
          <MainHeader />
          <Modal />
        </main>
        <footer></footer>
      </div>
    </ModalProvider>
  );
};

export default App;
