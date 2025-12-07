
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import {Auth} from './pages/auth/Auth'
import { PanelLayout } from './layouts/PanelLayout'
function App() {


  return (
    <>

    <BrowserRouter>
    <Routes>
<Route path='/' element= {<Auth/>}/>
<Route path='/panelLayout' element= {<PanelLayout/>}/>
      
    </Routes>
    </BrowserRouter>
      {/* <Auth /> */}
      {/* <PanelLayout/> */}
    </>
  )
}

export default App
