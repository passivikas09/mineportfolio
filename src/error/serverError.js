import { Link } from "react-router-dom";
const customStyle={
    color:"#0084ff",
    fontSize:"150px",
    fontWeight:"400"
}
export default function ServerError(){
    return(
        <>
            <div className="container-fluid ">
                <div className="row d-flex justify-content-center">
                    <h2  className="text-center" style={customStyle} >500</h2>
                </div>
                <div className="row">
                    <div className="col-md-12">
                    <h2 className="text-center fw-bold ">Internal Server Error</h2><br/>
                    <p  className="text-center fw-bold fs-5">Something went wrong</p>
                    </div>
                </div>
                <div className="row d-flex justify-content-center" >
                    <div className="col-md-2 mt-3" >
                        <Link to={"/"} className="btn btn-primary d-block mx-auto shadow-warning " >Back to Home</Link>
                    </div>
                </div>
                <div className="row d-flex justify-content-center" >
                    <div className="col-md-4 pt-4" >
                    <img className="img-fluid" src="/assets/images/new404.svg" alt="404 page"  />
                    </div>
                </div>
            </div>
        </>
    )
}