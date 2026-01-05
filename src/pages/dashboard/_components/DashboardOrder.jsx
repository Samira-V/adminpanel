export const DashboardOrder = ()=>{
    return(
        <>
        <div className="dash-right-bottom-order">
            {fakeData.map((item,index)=>(
                <div className="dash-right-bottom-order-item" key={index}>
                    <div className="dash-right-bottom-order-item-right">
                        <img src={item.img} alt={item.name} />
                        <div>
                            <p>{item.name}</p>
                            <span>12 اردیبهشت</span>
                        </div>
                    </div>
                    <div className="dash-right-bottom-order-item-left">{item.profit}</div>
                </div>
            ))}
        </div>
        </>
    )
}


let fakeData = [
    {
        img:'../assets/media/profile.jpg',
        name:'سارا حبیبی',
        profit:44.55,

    },
     {
        img:'https://www.freepik.com/free-photo/handsome-stylish-young-guy-with-glasses-posing-with-his-phone_10728864.htm#fromView=keyword&page=1&position=3&uuid=a0f2fe0e-0769-4bb0-bffe-a6804354b6cf&query=User+man',
        name:'حامد اتش زر ',
        profit:23.20,

    },
     {
        img:'https://unsplash.com/photos/man-in-black-full-zip-jacket-using-smartphone-7zcbtbI4E2o',
        name:'ارسان ساعی ',
        profit:54.25,

    },
     {
        img:'./assets/media/team/2.jpg',
        name:'علی محمدی',
        profit:14.25,

    },
]