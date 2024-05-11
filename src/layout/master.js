import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Headers from "./header";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.min.css"
export default function Master(){
    return(
        <>
         <main className="flex-shrink-0">
            <Headers/>
            <Outlet/>
            <Footer/>
        </main>
        <ToastContainer/>
        </>
    )
}