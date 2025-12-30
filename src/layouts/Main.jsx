import { Route, Routes } from "react-router-dom";
import { MainHeader } from "./MainHeader";
import { Dashboard } from "../pages/dashboard/Dashboard";
import { Settings } from "../pages/Settings";
import { ApplicationManegment } from "../pages/Application/ApplicationManegment";


export const Main = ({ handleSideBar, setHandleSideBar, children }) => {
  return (
    <>
      <main className={`main ${handleSideBar && "main-inc"}`}>
        <MainHeader setHandleSideBar={setHandleSideBar} />
        <div  style={{ height: '600px', color: '#fff' }}>
          {children}
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/setting" element={<Settings />} />
            <Route path="/application/manegment" element={<ApplicationManegment />} />
          </Routes>

        </div>
      </main>
    </>
  );
};
