import { Outlet } from "react-router-dom"


function Layout(){
    return <>
    <div className="w-full">
      <div>
          <Outlet/>
      </div>
    </div>
</>
}

export default Layout