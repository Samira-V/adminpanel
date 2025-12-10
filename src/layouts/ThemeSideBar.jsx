import { useState } from "react"

export const ThemeSideBar=()=>{
    const [theme , setSetTheme] = useState('dark')
    return(
        <>
        <div className="sideBar-theme" >
            <div className="sideBar-theme-inner">
                <button onClick={()=>{setSetTheme('light')}} className={`${theme === 'light' && 'sideBar-theme-inner-btn-active'}`}>روشن</button>
                <button onClick={()=>{setSetTheme('dark')}} className={`${theme === 'dark' && 'sideBar-theme-inner-btn-active'}`}>تاریک</button>
            </div>
            <span className="sideBar-theme-label">قدرت گرفته توسط samiraDev</span>
        </div>
        </>
    )
}