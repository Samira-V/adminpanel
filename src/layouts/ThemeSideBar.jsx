import { useLayoutStore } from "../store/LayoutStore"



export const ThemeSideBar=()=>{
     const {theme , setTheme} = useLayoutStore()
    return(
        <>
        <div className="sideBar-theme" >
            <div className="sideBar-theme-inner">
                <button onClick={()=>{setTheme('light')}} className={`${theme === 'light' && 'sideBar-theme-inner-btn-active'}`}>روشن</button>
                <button onClick={()=>{setTheme('dark')}} className={`${theme === 'dark' && 'sideBar-theme-inner-btn-active'}`}>تاریک</button>
            </div>
            <span className="sideBar-theme-label">قدرت گرفته توسط samiraDev</span>
        </div>
        </>
    )
}