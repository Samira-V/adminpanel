import {  useEffect } from "react"
import { useLayoutStore } from "../store/LayoutStore"

export const Settings = ()=>{
        const {setTitlePage} = useLayoutStore()
   
        useEffect(()=>{
    setTitlePage('تنظیمات') 
        } , [])
    return(
        <>
        <h1>settings</h1>
        </>
    )
}