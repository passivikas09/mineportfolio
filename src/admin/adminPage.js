import { Navigate, useNavigate } from "react-router-dom";
import AdminModal from "./adminModal";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import apiservice from "../apiservice/apiservice";

export default function AdminPage(){
    const [data,setdata]=useState([])
    const nav=useNavigate()
    useEffect(()=>{
        apiservice.contactAll().then((res)=>{
            setdata(res.data.data)
        }).catch((err)=>{
            toast.error("eror"+err)
        })
   },[])

    let token = sessionStorage.getItem("token")
    if(!token){
        toast.error("Restricted")
        return <Navigate to={"/"} />
    }

    

   function logout(){
    sessionStorage.clear()
    nav("/")
   }

   
    return(
        <>
           <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
                <div className="container px-5">
                    <a className="navbar-brand" href="index.html"><span className="fw-bolder text-primary">Admin Panel</span></a>
                    <button  onClick={logout} className="btn btn-danger">logout</button>
                </div>
            </nav> 
        {/* navbar */}
        <div className="container pt-5">
        <div className="row table-responsive">
            <div className="col-md-12">
            <table className="table table-bordered table-striped text-center" >
                <thead>
                <tr>
                    <th>Sno</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Message</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {data.map((el,index)=>{
                        return(
                            <tr key={index} >
                        <td>{index+1}</td>
                        <td>{el.name}</td>
                        <td>{el.email}</td>
                        <td>{el.phone}</td>
                        <td>{el.message}</td>
                        <td><AdminModal id={el._id} /></td>
                    </tr>
                        )
                    })}
                </tbody>
            </table>
            </div>
        </div>
        </div>
        <ToastContainer/>
        </>
    )
}