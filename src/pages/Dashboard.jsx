import { useEffect } from "react"

import { useLayoutStore } from "../store/LayoutStore"

export const Dashboard = () => {
    const { setTitlePage } = useLayoutStore()
    useEffect(() => {
        setTitlePage('داشبورد')
    }, [])
    return (
        <>
            <h1>dashboard</h1>
        </>
    )
}