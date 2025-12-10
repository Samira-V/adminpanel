import { MainHeader } from "./MainHeader";

export const Main = ({ handleSideBar, setHandleSideBar }) => {
  return (
    <>
      <main className={`main ${handleSideBar && "main-inc"}`}>
        <MainHeader setHandleSideBar={setHandleSideBar} />
      </main>
    </>
  );
};
