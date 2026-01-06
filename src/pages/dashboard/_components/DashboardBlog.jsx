import  blogImg  from '../../../assets/media/blog.png'

export const DashboardBlog = ()=>{
    return(
        <>
        <div className="dash-left">
            <div className="dash-left-item">
                <img src={blogImg} alt="blog" />
                <div className="dash-left-item-desc">
                    <h4>چگونه فروش خود را افزایش دهیم؟</h4>
                    <p>محصولات با کیفیت روی فروش تاثیری زیادی دارد همچین نحوهی برخورد با مشتری و مشتری مداری یکی از ارکان مهم هست.</p>
                </div>
            </div>
        </div>
        </>
    )
}