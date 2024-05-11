import { Link } from "react-router-dom";

export default function PageNotFound(){
    return(
        <>
        <div  className="container-fluid ">
        <div className="row d-flex justify-content-center mb-5" >
                    <div className="col-md-4" >
                    <img className="img-fluid" src="/assets/images/404.jpg" alt="404 page"  />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                    <h2 className="text-center fw-bold ">The page you are looking for doesn't exist.</h2>
                    </div>
                </div>
                <div className="row d-flex justify-content-center" >
                    <div className="col-md-2 mt-3" >
                        <Link to={"/"} className="btn btn-primary d-block mx-auto shadow-warning " >Back to Home</Link>
                    </div>
                </div>
                
            </div>
        </>
    )
}