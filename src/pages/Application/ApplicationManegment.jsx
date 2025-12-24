import { useEffect } from "react"

import { useLayoutStore } from "../../store/LayoutStore"

export const ApplicationManegment = () => {
        const { setTitlePage} = useLayoutStore()

    useEffect(() => {
      setTitlePage ('مدیریت اپلیکیشن')
    }, [])
    return (
        <>
            <h1>مدیریت اپلیکیشن</h1>
        </>
    )
}