import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import apiservice from "../apiservice/apiservice"

export default function Login(){
  const [name,setname]=useState()
  const [pwd,setpwd]=useState()  
  const[load,setload]=useState(false)
  const nav=useNavigate()
    function loginFunc(e){
       e.preventDefault()
       let data={
        name:name,
        pwd:pwd
       } 
       apiservice.userLogin(data).then((res)=>{
        if(res.data.success===false){
            setload(false)
            toast.error(res.data.message)
        }else{
            setload(false)
            toast.success(res.data.message)
            sessionStorage.setItem("token",res.data.token)
            nav("/admin")
        }
       }).catch(()=>{
        nav("/error/500")
       })
  }
  
    return(
        <>
               <section className="py-5 ">
                <div className="container px-5  wow slideInLeft" data-wow-duration="2s" data-wow-delay="5s">
                    {/* Contact form*/}
                    <div className="bg-light rounded-4 py-5 px-4 px-md-5">
                        <div className="text-center mb-5">
                            <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 mb-3"><i className="bi bi-person"></i></div>
                            <h1 className="fw-bolder">Welcome Admin</h1>
                            <p className="lead fw-normal text-muted mb-0">Admin Sign Up</p>
                        </div>
                        <div className="row gx-5 justify-content-center">
                            <div className="col-lg-8 col-xl-6">
                                <form id="contactForm" >
                                    <div className="form-floating mb-3">
                                        <input value={name} onChange={(e)=>{setname(e.target.value)}} className="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                                        <label for="name">Full name</label>
                                        <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input value={pwd} onChange={(e)=>{setpwd(e.target.value)}} className="form-control"  type="password" placeholder="Password"/>
                                        <label for="email">Password</label>
                                        <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                        <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                                    </div>
                                    <div className="d-grid"><button onClick={loginFunc} className="btn btn-primary btn-lg " id="submitButton" type="submit">Submit</button></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
            <ToastContainer/>
        </>
    )
}