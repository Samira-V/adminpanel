import { Route, Routes } from "react-router-dom";
import { MainHeader } from "./MainHeader";
import { Dashboard } from "../pages/Dashboard";
import { Settings } from "../pages/Settings";


export const Main = ({ handleSideBar, setHandleSideBar, children }) => {
  return (
    <>
      <main className={`main ${handleSideBar && "main-inc"}`}>
        <MainHeader setHandleSideBar={setHandleSideBar} />
        <div className="" style={{ height: '600px', color: '#fff' }}>
          {children}
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/setting" element={<Settings />} />
          </Routes>

        </div>
      </main>
    </>
  );
};
