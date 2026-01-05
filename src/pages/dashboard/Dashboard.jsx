import { useEffect } from "react"
import './dashboard.css'
import { useLayoutStore } from "../../store/LayoutStore"
import { DashboardSummery } from "./_components/DashboardSummery"
import { DashboardChart } from "./_components/DashboardChart"
import { DashboardOrder } from "./_components/DashboardOrder"

export const Dashboard = () => {
    const { setTitlePage } = useLayoutStore()
    useEffect(() => {
        setTitlePage('داشبورد')
    }, [])
    return (
        <>
      <div className="dashboard">
        <div className="dash-right">
            <DashboardSummery></DashboardSummery>
            <div className="dash-right-bottom">
                <DashboardChart/>
                <DashboardOrder/>
            </div>
        </div>
        <div className="dash-left"></div>
      </div>
        </>
    )
}