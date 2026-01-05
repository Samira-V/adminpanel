import {SvgDashboard} from './../../../icons/SvgDashboard'

export const DashboardSummery = ()=>{
    return(
        <>

            <div className="dash-right-summery">
                {[0,0,0,0].map((item,index)=>(
                    <div key={index} className="dash-right-summery-item">
                        <div className="dash-right-summery-item-icon">
                            <SvgDashboard></SvgDashboard>
                        </div>
                        <div className="dash-right-summery-item-description">
                            <p>میزان فروش</p>
                            <h4>120,000 تومان</h4>
                            <span>25%</span>
                        </div>

                    </div>

                ))}
           
            </div>
        
        </>
    )
}