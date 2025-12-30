import { useEffect } from "react"
import './dashboard.css'
import { useLayoutStore } from "../../store/LayoutStore"

export const Dashboard = () => {
    const { setTitlePage } = useLayoutStore()
    useEffect(() => {
        setTitlePage('داشبورد')
    }, [])
    return (
        <>
      
        </>
    )
}