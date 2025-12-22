import { useContext } from "react"
import { ThemeContext } from '../App'

export const ThemeSideBar=()=>{
    const ctxTheme = useContext(ThemeContext)
    return(
        <>
        <div className="sideBar-theme" >
            <div className="sideBar-theme-inner">
                <button onClick={()=>{ctxTheme.setTheme('light')}} className={`${ctxTheme.theme === 'light' && 'sideBar-theme-inner-btn-active'}`}>روشن</button>
                <button onClick={()=>{ctxTheme.setTheme('dark')}} className={`${ctxTheme.theme === 'dark' && 'sideBar-theme-inner-btn-active'}`}>تاریک</button>
            </div>
            <span className="sideBar-theme-label">قدرت گرفته توسط samiraDev</span>
        </div>
        </>
    )
}