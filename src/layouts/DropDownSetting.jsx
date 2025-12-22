import { useContext, useState } from "react"
import { SvgUser } from "../icons/SvgUser"
import { SvgLogout } from "../icons/SvgLogout"
import {ThemeContext} from '../App'

export const DropDownSetting = ({ setVisibleDrop, visibleDrop }) => {
const ctxTheme = useContext(ThemeContext)

  const [lang, setLang] = useState('fa')
  const langList = [
    {
      title: 'فارسی',
      symbol: 'fa',
    },
    {
      title: 'انگلیسی',
      symbol: 'en',
    },
    {
      title: 'فرانسوی',
      symbol: 'fr',
    },
    {
      title: 'عربی',
      symbol: 'AR',
    },
  ]

  return (
    <>
      <div onClick={() => setVisibleDrop(false)} className={`drop-settings-bg ${visibleDrop && 'drop-settings-bg-active'}`}></div>
      <div className={`drop-setting ${visibleDrop && 'drop-setting-active'}`}>
        <div className="drop-setting-top">
          {langList.map((item, index) => (
            <button key={index} onClick={() => setLang(item.symbol)} className={`drop-setting-top-item ${lang === item.symbol && 'drop-setting-top-item-active'}`}>{item.title}</button>
          ))}
        </div>

        <div className="drop-setting-theme">
          <button onClick={() => { ctxTheme.setTheme('light') }} className={`drop-setting-theme-btn ${ctxTheme.theme === 'light' && 'drop-setting-theme-btn-active'}`}>روشن</button>
          <button onClick={() => { ctxTheme.setTheme('dark') }} className={`drop-setting-theme-btn ${ctxTheme.theme === 'dark' && 'drop-setting-theme-btn-active'}`}>تاریک</button>
        </div>
        <div className="drop-setting-bottom">

          <div className="drop-setting-bottom-item">
            <SvgUser />
            <span>پروفایل</span>
          </div>
            <div className="drop-setting-bottom-item">
            <SvgLogout />
            <span>خروج</span>
          </div>
        </div>
      </div>
    </>
  )
}