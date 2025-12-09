import { SvgMenu } from "../icons/SvgMenu"
import { SvgSearch } from "../icons/SvgSearch"
import imageProfile from './../assets/media/profile.jpg'
export const Main = ({ setHandleSidebar }) => {
    return (
        <>
            <main className="main">

                <div className="main-header">

                    <div className="main-header-right">
                        <button onClick={() => setHandleSidebar(prev => !prev)}>
                            <SvgMenu />
                        </button>
                        <p>داشبورد</p>
                    </div>
                    <div className="main-header-center">
                        <input type="text" placeholder="جستجو کنید" />
                        <button>
                            <SvgSearch/>
                        </button>
                    </div>
                    <div className="main-header-left">
                    <div>
                        <span>سمیرا وعیدی</span>
                        <span>@samiraCoder</span>
                    </div>
<img src={imageProfile} alt="profile" />

                    </div>
                </div>
            </main>
        </>
    )
}