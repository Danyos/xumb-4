import { Outlet } from "react-router-dom"
import Header from "./Fecture/Header";

export function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Header />
        </>
    )
}