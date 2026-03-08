import { Outlet } from "react-router";

export default function MainLayout(){

    return(
        <main>
            <div className="main-wrapper">
               <Outlet></Outlet>
            </div>
        </main>
        
    )
}