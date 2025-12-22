import { useContext, useEffect } from "react"
import { PageTitleContext } from "../App"

export const Settings = ()=>{
    const ctxTilte = useContext(PageTitleContext)
        useEffect(()=>{
    ctxTilte.setPageTitle('تنظیمات') 
        } , [])
    return(
        <>
        <h1>settings</h1>
        </>
    )
}