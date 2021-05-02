import React from 'react';
import './HeaderMain.css';
import resume from "../../images/Resume of Shahriar Rubiat.pdf";
import Typical from 'react-typical';
import Particles from 'react-particles-js';

const HeaderMain = () => {
    return (
        <>
            <section class=" bg-dark text-white">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div class="header-main">
                                <Particles
                                    params={{
                                        "particles": {
                                            "number": {
                                                "value": 160,
                                                "density": {
                                                    "enable": false
                                                }
                                            },
                                            "size": {
                                                "value": 3,
                                                "random": true,
                                                "anim": {
                                                    "speed": 4,
                                                    "size_min": 0.3
                                                }
                                            },
                                            "line_linked": {
                                                "enable": false
                                            },
                                            "move": {
                                                "random": true,
                                                "speed": 1,
                                                "direction": "top",
                                                "out_mode": "out"
                                            }
                                        },
                                        "interactivity": {
                                            "events": {
                                                "onhover": {
                                                    "enable": true,
                                                    "mode": "bubble"
                                                },
                                                "onclick": {
                                                    "enable": true,
                                                    "mode": "repulse"
                                                }
                                            },
                                            "modes": {
                                                "bubble": {
                                                    "distance": 250,
                                                    "duration": 2,
                                                    "size": 0,
                                                    "opacity": 0
                                                },
                                                "repulse": {
                                                    "distance": 400,
                                                    "duration": 4
                                                }
                                            }
                                        }
                                    }}
                                />
                                <div className="text-center main-text">
                                    <h3>HELLO, I AM SHAHRIAR RUBIAT</h3>
                                    <h4>I'm a</h4>
                                    <h1 class="mb-5">
                                        <Typical
                                            steps={['Front-End Web Developer', 1000, 'Programmer', 1000, 'Learner', 1000]}
                                            loop={Infinity}
                                            wrapper="b"
                                        />
                                    </h1>
                                    <div class="text-center">
                                        <button class="btn btn-danger my-2 me-3"><a href="#contact">CONTACT ME</a></button>
                                        <button class="btn btn-danger"><a href={resume} download>Download Resume</a></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeaderMain;