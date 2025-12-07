export const Main =({setHandleSidebar })=>{
    return (
        <>
          <main className="main">
                
                <div className="main-header">
                     <button onClick={()=>setHandleSidebar(prev=>!prev)}></button>
                </div>
            </main>
        </>
    )
}