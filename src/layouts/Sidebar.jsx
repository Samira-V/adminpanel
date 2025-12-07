import './Sidebar.css'
import { SvgLogo } from '../icons/SvgLogo'
import { SvgPlus } from '../icons/SvgPlus'
import { SvgDashboard } from '../icons/SvgDashboard'
import { useState } from 'react'
import { SvgUsers } from '../icons/SvgUsers'
import { SvgSetting } from '../icons/SvgSetting'
import { SvgMap } from '../icons/SvgMap'
import { SvgApp } from '../icons/SvgApp'
export const Sidebar = ({ handleSidbar }) => {
    const [subMenu, setSubMenu] = useState(-1)
    const menu = [
        {
            title: "داشبورد",
            icon: <SvgDashboard />,
            subMenu :[
                {
                    title:"چارت ها",

                },
                 {
                    title:"چارت ها",

                },
            ]
        },
        {
            title: " اپلیکیشن",
            icon: <SvgApp />,
            subMenu :[
                {
                    title:"چارت ها",

                },
                 {
                    title:"چارت ها",

                },
            ]
        },
        {
            title: "نقشه",
            icon: <SvgMap />,
            subMenu :[
                {
                    title:"چارت ها",

                },
            ]
        },
        {
            title: "کاربران",
            icon: <SvgUsers />,
            subMenu :[
                {
                    title:"چارت ها",

                },
            ]
        },
          {
            title: "تنظیمات",
            icon: <SvgSetting />,
            subMenu :[
                {
                    title:"چارت ها",

                },
            ]
        },
    ]

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
                            <li  key={index} className={`sidebar-center-item ${subMenu == index && 'sidebar-center-item-active'}`}>
                                <button onClick={() => handleSubMenu(index)}>
                                    {item.icon}
                                    <span> {item.title}</span>
                                </button>
                                <div className='sidebar-center-item-subMenu '></div>
                            </li>

                        ))}
                    </ul>
                </div>

            </div>
        </>
    )
}