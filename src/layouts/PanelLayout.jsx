import { useState } from "react";
import './PanelLayout.css'
import { Main } from "./Main.jsx";

export const PanelLayout = ({children}) => {
  const [handleSideBar, setHandleSideBar] = useState(false);
  return (
    <>
      <div className="panelLayout">
        <SideBar 
          handleSideBar={handleSideBar} 
          setHandleSideBar={setHandleSideBar} 
        />
        <Main 
            handleSideBar={handleSideBar}
            setHandleSideBar={setHandleSideBar}
       >
        {children}
       </Main>
      </div>
    </>
  );
};
