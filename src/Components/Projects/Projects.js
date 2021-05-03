import React from 'react';
import hireMe from '../../images/img-1.png';
import repair from '../../images/img-2.png'
import bazar from '../../images/img-3.PNG';
import football from "../../images/f-1.PNG"
import "./Projects.css"


const Projects = () => {
    return (
        <>
            <section id="projects" className="mb-5">
                <h1 class="text-center mt-5 mb-4">Projects</h1>
                <div className="container">
                    <div className="row my-3 mb-sm-5">
                        <div className="col-md-4 my-3">
                            <div class="card">
                                <img src={hireMe} class="card-img-top" alt="..." />
                                <div class="card-body text-center">
                                    <h5 class="card-title">Hire Me</h5>
                                    <p class="card-text">A ride sharing website.</p>
                                    <a href="https://github.com/Porgramming-Hero-web-course/react-auth-shahriarshafi" class="btn btn-primary mb-3">Github</a><br />
                                    <a href="https://relaxed-ride-920e6c.netlify.app/" class="btn btn-primary">Website</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 my-3">
                            <div class="card">
                                <img style={{ "height": "206px" }} src={bazar} class="card-img-top img-fluid" alt="..." />
                                <div class="card-body text-center">
                                    <h5 class="card-title ">Mobile Repair</h5>
                                    <p class="card-text">A Mobile Repair Services!!</p>
                                    <a href="https://github.com/shahriarshafi/Mobile_dokan_client_site" class="btn btn-primary mb-3">Github</a><br />
                                    <a href="https://mobile-repair-8673e.web.app/" class="btn btn-primary">Website</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 my-3">
                            <div class="card">
                                <img style={{ "height": "206px" }} src={football} class="card-img-top" alt="..." />
                                <div class="card-body text-center">
                                    <h5 class="card-title">Football Avengers</h5>
                                    <p class="card-text">A website where you can find any team details.</p>
                                    <a href="https://github.com/shahriarshafi/" class="btn btn-primary mb-3">Github</a><br />
                                    <a href="https://vigilant-kowalevski-a2a71b.netlify.app/" class="btn btn-primary">Website</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 my-3">
                            <div class="card">
                                <img style={{ "height": "206px" }} src={repair} class="card-img-top" alt="..." />
                                <div class="card-body text-center">
                                    <h5 class="card-title">Big Bazar</h5>
                                    <p class="card-text">A bazar where you can buy your desired products.</p>
                                    <a href="https://github.com/shahriarshafi/The-Big-Bazar-Server-" class="btn btn-primary mb-3">Github</a><br />
                                    <a href="https://the-mega-store.web.app/" class="btn btn-primary">Website</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Projects;