import { ModalProvider } from "./context/ModalProvider";
import SideBar from "./components/header/SideBar";
import MainHeader from "./components/main/MainHeader";
import Modal from "./components/modal/Modal";
import { IssueProvider } from "./context/IssueProvider";
import IssuesList from "./components/main/IssuesList";

const App = () => {
  return (
    <ModalProvider>
      <div className="flex">
        <header className=" text-[var(--main-color)] bg-[var(--main-bg)] min-h-screen w-64  ">
          <SideBar />
        </header>
        <IssueProvider>
          <main className="  h-screen flex-1 bg-[var(--secondary-bg)]  ">
            <MainHeader />
            <IssuesList />
            <Modal />
          </main>
        </IssueProvider>
        <footer></footer>
      </div>
    </ModalProvider>
  );
};

export default App;
