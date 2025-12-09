import { SvgDashboard } from '../icons/SvgDashboard'
import { SvgUsers } from '../icons/SvgUsers'
import { SvgSetting } from '../icons/SvgSetting'
import { SvgMap } from '../icons/SvgMap'
import { SvgApp } from '../icons/SvgApp'

export  const menu = [
        {
            title: "داشبورد",
            icon: <SvgDashboard />,
            // subMenu: [
            //     {
            //         title: " تم دارک",

            //     },
                

            //     {
            //         title: "چارت ها",

            //     },
                
            // ]
        },
        {
            title: " اپلیکیشن",
            icon: <SvgApp />,
            subMenu: [
                {
                    title: "فیگما",

                },
                {
                    title: "فتوشاپ",

                },
            ]
        },
        {
            title: "نقشه",
            icon: <SvgMap />,
            subMenu: [
                {
                    title: "منطقه ی 1",

                },
                 {
                    title: "منطقه ی 2",

                },
            ]
        },
        {
            title: "کاربران",
            icon: <SvgUsers />,
            subMenu: [
                {
                    title: " لیست مدیران",

                },
                 {
                    title: " لیست دانشجوها",

                },
            ]
        },
        {
            title: "تنظیمات",
            icon: <SvgSetting />,
            subMenu: [
                {
                    title: " روشنایی",

                },
                 {
                    title: " رنگ زمینه",

                },
                 {
                    title: " اندازه ی قلم",

                },
            ]
        },
    ]