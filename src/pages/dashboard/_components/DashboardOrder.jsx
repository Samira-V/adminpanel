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
                    <div className="dash-right-bottom-order-item-left">${item.profit}</div>
                </div>
            ))}
        </div>
        </>
    )
}


let fakeData = [
    {
        img:'https://image.shutterstock.com/image-photo/portrai…ful-naturally-brunette-woman-260nw-2140510533.jpg',
        name:'سارا حبیبی',
        profit:44.55,

    },
     {
        img:'https://freerangestock.com/sample/171369/a-man-sitting-on-a-couch.jpg',
        name:'حامد اتش زر ',
        profit:23.20,

    },
     {
        img:'https://freerangestock.com/thumbnail/164488/a-man-in-a-suit.jpg',
        name:'ارسان ساعی ',
        profit:54.25,

    },
     {
        img:'https://freerangestock.com/thumbnail/149089/headshot-smiling-asian-executive.jpg',
        name:'علی محمدی',
        profit:14.25,

    },
        {
        img:'https://freerangestock.com/thumbnail/130115/young-smiling-girl--looking-at-camera-.jpg',
        name:'سونیا رسولی',
        profit:44.55,

    },
]