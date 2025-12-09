import imageProfile from './../assets/media/profile.jpg'
export const ProfileSidebar = ()=>{
    return(
        <>
        <div className="sidebar-profile">
            <div className="sidebar-profile-inner">
                <div className="profile-sidebar-top">
                    <img src={imageProfile} alt="profile" />
                    <div>
                        <span>سمیرا وعیدی</span>
                        <span>@samiraCoder</span>
                    </div>
                </div>
                <button>ویرایش پروفایل</button>
            </div>
        </div>
        </>
    )
}