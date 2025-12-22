import { useContext, useEffect } from "react"
import { PageTitleContext } from "../../App"

export const ApplicationManegment = () => {

    const ctxTilte = useContext(PageTitleContext)
    useEffect(() => {
        ctxTilte.setPageTitle('مدیریت اپلیکیشن')
    }, [])
    return (
        <>
            <h1>مدیریت اپلیکیشن</h1>
        </>
    )
}