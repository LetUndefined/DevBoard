import { ModalProvider } from "./context/ModalProvider";
import SideBar from "./components/header/SideBar";
import MainHeader from "./components/main/MainHeader";
import Modal from "./components/IssueModal/IssueModal";
import { IssueProvider } from "./context/IssueProvider";
import IssuesList from "./components/main/IssuesList";
import { EditRowProvider } from "./context/EditRowProvider";

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
            <EditRowProvider>
              <IssuesList />
            </EditRowProvider>
          </main>
        </IssueProvider>
        <footer></footer>
      </div>
    </ModalProvider>
  );
};

export default App;
