import { Link } from "react-router-dom";

export default function Projects() {
    return (
        <>
            <section className="py-5">
                <div className="container px-5 mb-5">
                    <div className="text-center mb-5">
                        <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Projects</span></h1>
                    </div>
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-11 col-xl-9 col-xxl-8">
                            {/* Project Card 1*/}
                            <div className="card overflow-hidden shadow rounded-4 border-0 mb-5">
                                <div className="card-body p-0">
                                    <div className="d-flex align-items-center">
                                        <div className="row p-5">
                                            <div className="col-md-7">
                                                <div className="">
                                                    <h2 className="fw-bolder">Cartportasd</h2>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius at enim eum illum aperiam placeat esse? Mollitia omnis minima saepe recusandae libero, iste ad asperiores! Explicabo commodi quo itaque! Ipsam!</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-5">
                                                <div id="myCarousel" className="carousel slide " data-bs-ride="carousel">
                                                    <div className="carousel-indicators">
                                                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                                    </div>
                                                    <div className="carousel-inner">
                                                        <div className="carousel-item active">
                                                          <img className="img-fluid rounded mx-auto d-block" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX2JDPabytaAyf2HOjVO8IvnrSEvnro-_UW6X_UDqdYA&s"  alt="" />
                                                            
                                                        </div>
                                                        <div class="carousel-item">
                                                            
                                                        <img className="img-fluid rounded mx-auto d-block" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX2JDPabytaAyf2HOjVO8IvnrSEvnro-_UW6X_UDqdYA&s" alt="" />
                                                            
                                                        </div>
                                                        <div class="carousel-item">
                                                        <img className="img-fluid rounded mx-auto d-block" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX2JDPabytaAyf2HOjVO8IvnrSEvnro-_UW6X_UDqdYA&s" alt="" />
                                                            
                                                        </div>
                                                    </div>
                                                    <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                        <span className="visually-hidden">Previous</span>
                                                    </button>
                                                    <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                        <span className="visually-hidden">Next</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card overflow-hidden shadow rounded-4 border-0 mb-5">
                                <div className="card-body p-0">
                                    <div className="d-flex align-items-center">
                                        <div className="row p-5">
                                            <div className="col-md-7">
                                                <div className="">
                                                    <h2 className="fw-bolder">JayD Meats</h2>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius at enim eum illum aperiam placeat esse? Mollitia omnis minima saepe recusandae libero, iste ad asperiores! Explicabo commodi quo itaque! Ipsam!</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-5">
                                                <div id="myCarousel2" className="carousel slide " data-bs-ride="carousel2">
                                                    <div className="carousel-indicators">
                                                        <button type="button" data-bs-target="#myCarousel2" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                                        <button type="button" data-bs-target="#myCarousel2" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                        <button type="button" data-bs-target="#myCarousel2" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                                    </div>
                                                    <div className="carousel-inner">
                                                        <div className="carousel-item active">
                                                          <img className="img-fluid rounded mx-auto d-block" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX2JDPabytaAyf2HOjVO8IvnrSEvnro-_UW6X_UDqdYA&s"  alt="" />
                                                            
                                                        </div>
                                                        <div class="carousel-item">
                                                            
                                                        <img className="img-fluid rounded mx-auto d-block" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX2JDPabytaAyf2HOjVO8IvnrSEvnro-_UW6X_UDqdYA&s" alt="" />
                                                            
                                                        </div>
                                                        <div class="carousel-item">
                                                        <img className="img-fluid rounded mx-auto d-block" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX2JDPabytaAyf2HOjVO8IvnrSEvnro-_UW6X_UDqdYA&s" alt="" />
                                                            
                                                        </div>
                                                    </div>
                                                    <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel2" data-bs-slide="prev">
                                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                        <span className="visually-hidden">Previous</span>
                                                    </button>
                                                    <button className="carousel-control-next" type="button" data-bs-target="#myCarousel2" data-bs-slide="next">
                                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                        <span className="visually-hidden">Next</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Project Card 2*/}
                            <div className="card overflow-hidden shadow rounded-4 border-0 mb-5">
                                <div className="card-body p-0">
                                    <div className="d-flex align-items-center">
                                        <div className="row p-5">
                                            <div className="col-md-7">
                                                <div className="">
                                                    <h2 className="fw-bolder"> <Link to="https://urban-front.vercel.app/" className="text-dark text-decoration-none" > Ecommerce Website</Link></h2>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius at enim eum illum aperiam placeat esse? Mollitia omnis minima saepe recusandae libero, iste ad asperiores! Explicabo commodi quo itaque! Ipsam!</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-5">
                                                <div id="myCarousel3" className="carousel slide " data-bs-ride="carousel3">
                                                    <div className="carousel-indicators">
                                                        <button type="button" data-bs-target="#myCarousel3" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                                        <button type="button" data-bs-target="#myCarousel3" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                        <button type="button" data-bs-target="#myCarousel3" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                                    </div>
                                                    <div className="carousel-inner">
                                                        <div className="carousel-item active">
                                                          <img className="img-fluid rounded mx-auto d-block" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX2JDPabytaAyf2HOjVO8IvnrSEvnro-_UW6X_UDqdYA&s"  alt="" />
                                                            
                                                        </div>
                                                        <div class="carousel-item">
                                                            
                                                        <img className="img-fluid rounded mx-auto d-block" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX2JDPabytaAyf2HOjVO8IvnrSEvnro-_UW6X_UDqdYA&s" alt="" />
                                                            
                                                        </div>
                                                        <div class="carousel-item">
                                                        <img className="img-fluid rounded mx-auto d-block" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX2JDPabytaAyf2HOjVO8IvnrSEvnro-_UW6X_UDqdYA&s" alt="" />
                                                            
                                                        </div>
                                                    </div>
                                                    <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel3" data-bs-slide="prev">
                                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                        <span className="visually-hidden">Previous</span>
                                                    </button>
                                                    <button className="carousel-control-next" type="button" data-bs-target="#myCarousel3" data-bs-slide="next">
                                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                        <span className="visually-hidden">Next</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5 bg-gradient-primary-to-secondary text-white">
                <div className="container px-5 my-5">
                    <div className="text-center">
                        <h2 className="display-4 fw-bolder mb-4">Let's build something together</h2>
                        <Link className="btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder" to="/contact">Contact me</Link>
                    </div>
                </div>
            </section>
        </>
    )
}