import { useState } from "react"

export const ThemeSidebar = ()=>{
    const [theme , setTheme] = useState('dark')
    return(
        <>
        <div className="theme-sidebar">
            <div className="theme-sidebar-inner">
                <button className={`${theme === 'light' && 'theme-sidebar-inner-btn-active'}`} onClick={()=>setTheme('light')}>روشن</button>
                <button className={`${theme === 'dark' && 'theme-sidebar-inner-btn-active'}`} onClick={()=>setTheme('dark')}>تاریک</button>
            </div>
            <span className="theme-sidebar-label">قدرت گرفته توسط @samiraCoder</span>
        </div>
        </>
    )
}