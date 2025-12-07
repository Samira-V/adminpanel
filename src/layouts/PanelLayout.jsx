import { useState } from 'react'
import { Main } from './Main'
import { Sidebar } from './Sidebar'

import './PanelLayout.css'
export const PanelLayout = ()=>{
    const [handleSidbar , setHandleSidebar] = useState(false)
    return(
        <>
        <div className="panelLayout">
          <Sidebar handleSidbar = {handleSidbar}/>
          <Main setHandleSidebar = {setHandleSidebar} ></Main>
        </div>
        </>
    )
}