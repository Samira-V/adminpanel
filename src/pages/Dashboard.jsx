import { useContext, useEffect } from "react"
import { PageTitleContext } from "../App"

export const Dashboard = ()=>{
const ctxTilte = useContext(PageTitleContext)
    useEffect(()=>{
ctxTilte.setPageTitle('داشبورد') 
    } , [])
    return(
        <>
        <h1>dashboard</h1>
        </>
    )
}