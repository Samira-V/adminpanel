import './Sidebar.css'
import { SvgLogo } from '../icons/SvgLogo'
export const Sidebar = ({ handleSidbar }) => {
    return (
        <>
            <div className={handleSidbar ? "sidebarClose" : "sidebar"}>
                <div className="sidebar-head">
                    <h2>samiraCoder</h2>
                    <SvgLogo></SvgLogo>
                </div>
                <div className="sidebar-center">
                    <button className='sidebar-center-new-project'>
                        <span>پروژه ی جدید</span>
                    </button>
                </div>

            </div>
        </>
    )
}