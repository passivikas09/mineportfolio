import { Link } from "react-router-dom";

export default function Resume(){
    return(
        <>
            <div className="container px-5 my-5">
                <div className="text-center mb-5">
                    <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Resume</span></h1>
                </div>
                <div className="row gx-5 justify-content-center">
                    <div className="col-lg-11 col-xl-9 col-xxl-8">
                        {/* Experience Section*/}
                        <section>
                            <div className="d-flex align-items-center justify-content-between mb-4">
                                <h2 className="text-primary fw-bolder mb-0">Experience</h2>
                                {/* Download resume button*/}
                                {/* Note: Set the link href target to a PDF file within your project*/}
                                <Link className="btn btn-primary px-4 py-3 mx-3" to="/assets/images/404.jpg"  download={"404.jpg"} >
                                    <div className="d-inline-block bi bi-download me-2"></div>
                                    Download 
                                </Link>
                            </div>
                            {/* Experience Card 1*/}
                            <div className="card shadow border-0 rounded-4 mb-5">
                                <div className="card-body p-5">
                                    <div className="row align-items-center gx-5">
                                        <div className="col text-center text-lg-start mb-4 mb-lg-0">
                                            <div className="bg-light p-4 rounded-4">
                                                <div className="text-primary fw-bolder mb-2">Feb 2024 - Present</div>
                                                <div className="small fw-bolder">Junior Web Developer</div>
                                                <div className="small text-muted">Regal Enterprises</div>
                                                <div className="small text-muted">Tanda,Punjab</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-8"><div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laudantium, voluptatem quis repellendus eaque sit animi illo ipsam amet officiis corporis sed aliquam non voluptate corrupti excepturi maxime porro fuga.</div></div>
                                    </div>
                                </div>
                            </div>
                            {/* Experience Card 2*/}
                            <div className="card shadow border-0 rounded-4 mb-5">
                                <div className="card-body p-5">
                                    <div className="row align-items-center gx-5">
                                        <div className="col text-center text-lg-start mb-4 mb-lg-0">
                                            <div className="bg-light p-4 rounded-4">
                                                <div className="text-primary fw-bolder mb-2"> Aug 2023 -Jan 2024</div>
                                                <div className="small fw-bolder">Industrial Training</div>
                                                <div className="small text-muted">07 Services </div>
                                                <div className="small text-muted">Jalandhar</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-8"><div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laudantium, voluptatem quis repellendus eaque sit animi illo ipsam amet officiis corporis sed aliquam non voluptate corrupti excepturi maxime porro fuga.</div></div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* Education Section*/}
                        <section>
                            <h2 className="text-secondary fw-bolder mb-4">Education</h2>
                            {/* Education Card 1*/}
                            <div className="card shadow border-0 rounded-4 mb-5">
                                <div className="card-body p-5">
                                    <div className="row align-items-center gx-5">
                                        <div className="col text-center text-lg-start mb-4 mb-lg-0">
                                            <div className="bg-light p-4 rounded-4">
                                                <div className="text-secondary fw-bolder mb-2">2022 - 2023</div>
                                                <div className="mb-2">
                                                    <div className="small fw-bolder">HIMT College</div>
                                                    <div className="small text-muted">Tanda</div>
                                                </div>
                                                <div className="fst-italic">
                                                    <div className="small text-muted">PGDCA</div>
                                                    <div className="small text-muted">Diploma in Computer Application</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-8"><div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laudantium, voluptatem quis repellendus eaque sit animi illo ipsam amet officiis corporis sed aliquam non voluptate corrupti excepturi maxime porro fuga.</div></div>
                                    </div>
                                </div>
                            </div>
                            {/* Education Card 2*/}
                            <div className="card shadow border-0 rounded-4 mb-5">
                                <div className="card-body p-5">
                                    <div className="row align-items-center gx-5">
                                        <div className="col text-center text-lg-start mb-4 mb-lg-0">
                                            <div className="bg-light p-4 rounded-4">
                                                <div className="text-secondary fw-bolder mb-2">2017 - 2020</div>
                                                <div className="mb-2">
                                                    <div className="small fw-bolder">JC DAV College</div>
                                                    <div className="small text-muted">Dasuya</div>
                                                </div>
                                                <div className="fst-italic">
                                                    <div className="small text-muted">Undergraduate</div>
                                                    <div className="small text-muted">B.COM</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-8"><div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laudantium, voluptatem quis repellendus eaque sit animi illo ipsam amet officiis corporis sed aliquam non voluptate corrupti excepturi maxime porro fuga.</div></div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* Divider*/}
                        <div className="pb-5"></div>
                        {/* Skills Section*/}
                        <section>
                            {/* Skillset Card*/}
                            <div className="card shadow border-0 rounded-4 mb-5">
                                <div className="card-body p-5">
                                    {/* Professional skills list*/}
                                   
                                    {/* Languages list*/}
                                    <div className="mb-5">
                                        <div className="d-flex align-items-center mb-4">
                                            <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i className="bi bi-code-slash"></i></div>
                                            <h3 className="fw-bolder mb-0"><span className="text-gradient d-inline">Frontend Development</span></h3>
                                        </div>
                                        <div className="row row-cols-1 row-cols-md-3 mb-4">
                                            <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">HTML5</div></div>
                                            <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">CSS</div></div>
                                            <div className="col"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">JavaScript(ES6)</div></div>
                                        </div>
                                        <div className="row row-cols-1 row-cols-md-3">
                                            <div className="col mb-4 mb-md-0">
                                                <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Bootstrap</div>
                                                </div>
                                            <div className="col">
                                                <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">React JS</div>
                                            </div>
                                            <div className="col">
                                                <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Version Control</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-5">
                                        <div className="d-flex align-items-center mb-4">
                                            <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i className="bi bi-code-slash"></i></div>
                                            <h3 className="fw-bolder mb-0"><span className="text-gradient d-inline">Backend Development</span></h3>
                                        </div>
                                        <div className="row row-cols-1 row-cols-md-3 mb-4">
                                            <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Node JS</div></div>
                                            <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Express</div></div>
                                            <div className="col"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">MongoDB</div></div>
                                        </div>
                                        <div className="row row-cols-1 row-cols-md-3">
                                            <div className="col mb-4 mb-md-0">
                                                <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Restful API</div>
                                                </div>
                                        </div>
                                    </div>
                                    <div className="mb-0">
                                        <div className="d-flex align-items-center mb-4">
                                            <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i className="bi bi-tools"></i></div>
                                            <h3 className="fw-bolder mb-0"><span className="text-gradient d-inline"> Skills</span></h3>
                                        </div>
                                        <div className="row row-cols-1 row-cols-md-3 mb-4">
                                            <div className="col mb-4 mb-md-0">
                                                <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Team Work</div>
                                            </div>
                                            <div className="col mb-4 mb-md-0">
                                                <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Leadership</div>
                                            </div>
                                            <div className="col mb-4 mb-md-0">
                                                <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Problem Solving</div>
                                            </div>
                                        </div>
                                        <div className="row row-cols-1 row-cols-md-3">
                                            <div className="col mb-4 mb-md-0">
                                                <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Persistence</div>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div> 
        </>
    )
}