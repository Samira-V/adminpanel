import { SvgMenu } from "../icons/SvgMenu";
import { SvgSearch } from "../icons/SvgSearch";
import ImgProfile from "../assets/media/profile.jpg";
import { useState } from "react";

export const MainHeader = ({setHandleSideBar}) => {
  const [visibleDrop , setVisibleDrop] = useState(false)
  return (
    <>
      <div className="main-header">
        <div className="main-header-right">
          <button onClick={() => setHandleSideBar((prev) => !prev)}>
            <SvgMenu />
          </button>
          <p>داشبورد</p>
        </div>
        <form className="main-header-center">
          <input placeholder="جستجو کنید" />
          <button>
            <SvgSearch />
          </button>
        </form>
        <div onClick={()=>setVisibleDrop(prev => !prev)} className="main-header-left">
          <div>
            <span>سمیرا وعیدی </span>
            <span>@samiraDev</span>
          </div>
          <img src={ImgProfile} alt="profile" />
        </div>
      </div>

      <div onClick={()=>setVisibleDrop(false)} className={`drop-settings-bg ${visibleDrop && 'drop-settings-bg-active' }`}></div>
      <div className={`drop-setting ${visibleDrop && 'drop-setting-active'}`}></div>
    </>
  );
};
