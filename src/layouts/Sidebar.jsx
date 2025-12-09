import './Sidebar.css'
import { useState } from 'react'
import { SvgLogo } from '../icons/SvgLogo'
import { SvgPlus } from '../icons/SvgPlus'
import { menu } from '../constants/layout-const'
import { ProfileSidebar } from './ProfileSidebar'
import { ThemeSidebar } from './ThemeSisebar'
export const Sidebar = ({ handleSidbar }) => {
    const [subMenu, setSubMenu] = useState(-1)


    const handleSubMenu = (index) => {

        console.log(index)
        if (subMenu == index) {
            setSubMenu(-1)
        }
        else {
            setSubMenu(index)
        }
    }

    return (
        <>
            <div className={handleSidbar ? "sidebarClose" : "sidebar"}>
                <div className="sidebar-head">
                    <h2>samiraCoder</h2>
                    <SvgLogo></SvgLogo>
                </div>
                <div className="sidebar-center">
                    <button className='sidebar-center-new-project'>
                        <SvgPlus className="svgPlus" />
                        <span>پروژه ی جدید</span>
                    </button>
                    <ul>
                        {menu.map((item, index) => (
                            <li key={index} className={`sidebar-center-item ${subMenu == index && 'sidebar-center-item-active'}`}>
                                <button onClick={() => handleSubMenu(index)}>
                                    {item.icon}
                                    <span> {item.title}</span>
                                </button>
                                {item.subMenu &&
                                    <>
                                        <SubMenu list={item.subMenu} />
                                        <SideMenu list={item.subMenu} />
                                    </>}
                            </li>

                        ))}
                    </ul>
                    {handleSidbar == false &&
                        <>
                            <ProfileSidebar />
                            <ThemeSidebar />

                        </>}
                </div>

            </div>
        </>
    )
}

export const SubMenu = ({ list }) => {
    return (
        <div className='sidebar-center-item-subMenu '>
            {list.map((item, index) => (

                <div key={index} className="submenu">{item.title}</div>
            )

            )}

        </div>
    )
}

export const SideMenu = ({ list }) => {
    return (
        <div className='sidebar-center-item-sidemenu '>
            {list.map((item, index) => (

                <div key={index} className="submenu">{item.title}</div>
            )

            )}

        </div>
    )
}