import { useState } from "react"
import apiservice from "../apiservice/apiservice"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

export default function Contact(){
    const nav =useNavigate()
    const [name,setname]=useState()
    const [email,setemail]=useState()
    const [phone,setphone]=useState()
    const [msg,setmsg]=useState()
    const [load,setload]=useState(false)
    function handleContact(e){
        e.preventDefault()
        let data={
            name:name,
            email:email,
            phone:phone,
            message:msg
        }
        apiservice.contactAdd(data).then((res)=>{
            if(res.data.success===false){
                setload(false)
                toast.error(res.data.message)
            }else{
                setload(false)
                toast.success(res.data.message)
            }
        }).catch(()=>{
            nav("/error/500")
        })
    }
    return(
        <>
             <section className="py-5 ">
                <div className="container px-5 ">
                    <div className="bg-light rounded-4 py-5 px-4 px-md-5">
                        <div className="text-center mb-5">
                            <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 mb-3"><i className="bi bi-envelope"></i></div>
                            <h1 className="fw-bolder">Get in touch</h1>
                            <p className="lead fw-normal text-muted mb-0">Let's work together!</p>
                        </div>
                        <div className="row gx-5 justify-content-center">
                            <div className="col-lg-8 col-xl-6">
                                
                                <form id="contactForm" >
                                    {/* Name input*/}
                                    <div className="form-floating mb-3">
                                        <input value={name} onChange={(e)=>{setname(e.target.value)}} className="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                                        <label for="name">Full name</label>
                                        <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                                    </div>
                                    {/* Email address input*/}
                                    <div className="form-floating mb-3">
                                        <input value={email} onChange={(e)=>{setemail(e.target.value)}} className="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                                        <label for="email">Email address</label>
                                        <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                        <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                                    </div>
                                    {/* Phone number input*/}
                                    <div className="form-floating mb-3">
                                        <input value={phone} onChange={(e)=>{setphone(e.target.value)}} className="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                                        <label for="phone">Phone number</label>
                                        <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                                    </div>
                                    {/* Message input*/}
                                    <div className="form-floating mb-3">
                                        <textarea value={msg} onChange={(e)=>{setmsg(e.target.value)}} className="form-control" id="message" type="text" placeholder="Enter your message here..." style={{height:"10rem"}} data-sb-validations="required"></textarea>
                                        <label for="message">Message</label>
                                        <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                                    </div>
                                    
                                    {/* Submit Button*/}
                                    <div className="d-grid"><button onClick={handleContact} className="btn btn-primary btn-lg " id="submitButton" type="submit">Submit</button></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}