import { ModalProvider } from "./context/ModalProvider";
import SideBar from "./components/header/SideBar";
import MainHeader from "./components/main/MainHeader";
import Modal from "./components/IssueModal/IssueModal";
import { IssueProvider } from "./context/IssueProvider";
import IssuesList from "./components/main/IssuesList";
import { EditRowProvider } from "./context/EditRowProvider";
import { useNavigation, useRevalidator } from "react-router";

const App = () => {
  const navigation = useNavigation();
  const revalidator = useRevalidator();

  const isLoading = navigation.state === "loading" || revalidator.state === "loading";

  return (
    <ModalProvider>
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/20 z-50">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <div className="flex">
        <IssueProvider>
          <header className=" text-[var(--main-color)] bg-[var(--main-bg)] min-h-screen w-64  ">
            <SideBar />
          </header>
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
