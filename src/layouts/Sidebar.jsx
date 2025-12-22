import { useState } from "react";
import { SvgLogo } from "../icons/SvgLogo";
import { SvgPlus } from "../icons/SvgPlus";
import "./SideBar.css";
import { menu } from "../constants/layout-const";
import { ProfileSideBar } from "./ProfileSideBar";
import { ThemeSideBar } from "./ThemeSideBar";
import { SvgClose } from "../icons/SvgClose";
import { useNavigate } from "react-router-dom";

export const SideBar = ({ handleSideBar, setHandleSideBar }) => {
  const navigate = useNavigate()
  const [activeSubMenu, setActiveSubMenu] = useState(-1);
  
  const handelRoute = (index, item) => {
    if (item.path) {
      navigate(item.path)
       setActiveSubMenu(index);
      return
    }
    if (activeSubMenu == index) {
      setActiveSubMenu(-1);
    } else {
      setActiveSubMenu(index);
    }
  };

  return (
    <>
      <div className={`sideBar ${handleSideBar && "sideBar-handle"}`}>
        <div className="sideBar-head">
          <h2>samiraDev</h2>
          <SvgLogo />
          <button onClick={() => setHandleSideBar((prev) => !prev)}>
            <SvgClose />
          </button>
        </div>
        <div className="sideBar-center">
          <button className="sideBar-center-newProject">
            <SvgPlus />
            <span>پروژه جدید</span>
          </button>
          <ul>
            {menu.map((item, index) => (
              <li key={index} className={`sidebar-center-item ${activeSubMenu == index && "sidebar-center-item-active"}`}>
                <button onClick={() => handelRoute(index, item)}>
                  {item.icon}
                  <span>{item.title}</span>
                </button>
                {item.submenu && (
                  <>
                    <SubMenu submneuData={item.submenu} 
                    handelRoute={handelRoute} />
                    <SideMenu submneuData={item.submenu} 
                    handelRoute={handelRoute} />
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
        {!handleSideBar && (
          <>
            <ProfileSideBar />
            <ThemeSideBar />
          </>
        )}
      </div>
    </>
  );
};

const SubMenu = ({ submneuData , handelRoute }) => {
  return (
    <>
      <div className="sidebar-center-item-submenu">
        {submneuData.map((item, index) => (
          <div onClick={()=>handelRoute(index, item)} className="sidebar-center-item-submenu-item" key={index}>
            {item.title}
          </div>
        ))}
      </div>
    </>
  );
};

const SideMenu = ({ submneuData , handelRoute }) => {
  return (
    <>
      <div className="sidebar-center-item-sideMenu">
        {submneuData.map((item, index) => (
          <div onClick={()=>handelRoute(index, item)} key={index} className="sidebar-center-item-sideMenu-item">
            {item.title}
          </div>
        ))}
      </div>
    </>
  );
};
