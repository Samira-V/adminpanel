import { SvgMenu } from "../icons/SvgMenu";
import { SvgSearch } from "../icons/SvgSearch";
import ImgProfile from "../assets/media/profile.jpg";
import { useContext, useState } from "react";
import { DropDownSetting } from "./DropDownSetting";
import { PageTitleContext } from "../App";

export const MainHeader = ({setHandleSideBar}) => {
  const [visibleDrop , setVisibleDrop] = useState(false)
  const ctxTilte = useContext(PageTitleContext)
  return (
    <>
      <div className="main-header">
        <div className="main-header-right">
          <button onClick={() => setHandleSideBar((prev) => !prev)}>
            <SvgMenu />
          </button>
          <p>{ctxTilte.pageTitle}</p>
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
