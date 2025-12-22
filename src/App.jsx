import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css'
import "./App.css";
import { PanelLayout } from "./layouts/PanelLayout";
import { Auth } from "./pages/auth/Auth";
import {  useState , createContext} from "react";
  

export const ThemeContext = createContext()
export const PageTitleContext = createContext()
function App() {
  const [theme , setTheme] = useState('dark')
  const [pageTitle , setPageTitle] = useState('')
  return (
    <>
    <PageTitleContext value={{pageTitle , setPageTitle}}>
    <ThemeContext value={{theme , setTheme}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/p/*" element={<PanelLayout/>} />
        </Routes>
      </BrowserRouter>
      </ThemeContext>
      </PageTitleContext>
    </>
  );
}

export default App;
