import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css'
import "./App.css";
import { PanelLayout } from "./layouts/PanelLayout";
import { Auth } from "./pages/auth/Auth";
import {  useState , createContext} from "react";
  

export const ThemeContext = createContext()
function App() {
  const [theme , setTheme] = useState('dark')
  return (
    <>
    <ThemeContext value={{theme , setTheme}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/p/*" element={<PanelLayout/>} />
        </Routes>
      </BrowserRouter>
      </ThemeContext>
    </>
  );
}

export default App;
