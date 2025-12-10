// import ImgProfile from '../assets/media/profile.jpg'

export const ProfileSideBar=()=>{
    return(
        <>
        <div className="sideBar-profile">
            <div className="sideBar-profile-inner">
                <div className="sideBar-profile-top">
                    {/* <img src={ImgProfile} alt='profile' /> */}
                    <div >
                        <span> سمیرا وعیدی</span>
                        <span>@samiraDev</span>
                    </div>
                </div>
                <button>ویرایش پروفایل</button>
            </div>
        </div>
        </>
    )
}