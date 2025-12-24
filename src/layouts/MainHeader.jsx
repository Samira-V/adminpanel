import { SvgMenu } from "../icons/SvgMenu";
import { SvgSearch } from "../icons/SvgSearch";
import ImgProfile from "../assets/media/profile.jpg";
import {  useState } from "react";
import { DropDownSetting } from "./DropDownSetting";
import { useLayoutStore } from "../store/LayoutStore";

export const MainHeader = ({setHandleSideBar}) => {
  const [visibleDrop , setVisibleDrop] = useState(false)
  const {titlePage} = useLayoutStore()
  return (
    <>
      <div className="main-header">
        <div className="main-header-right">
          <button onClick={() => setHandleSideBar((prev) => !prev)}>
            <SvgMenu />
          </button>
          <p>{titlePage}</p>
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

     <DropDownSetting visibleDrop={visibleDrop} setVisibleDrop={setVisibleDrop} />

      
    </>
  );
};
