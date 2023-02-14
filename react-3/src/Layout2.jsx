import {Link, Outlet} from "react-router-dom"

export function Layout2() {
    return (
        <>
         <h1>    <Link to="/service">Service</Link></h1>
            <Outlet />
        <h1>layout 2</h1>
        </>
    )
}