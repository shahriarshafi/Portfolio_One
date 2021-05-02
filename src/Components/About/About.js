import React from 'react';
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import pic from "../../images/scan.jpg"
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import resume from "../../images/Resume of Shahriar Rubiat.pdf";
import "./About.css"

const About = () => {
    return (
        <>
            <section id="about">
                <div className="container my-5">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="about text-center">
                                <h1 class="m-5">About Me</h1>
                                <img src={pic} class="img-fluid img-resize rounded-circle" alt="" />
                                <div class="mt-3 p-2 d-flex justify-content-center">
                                    <div class="me-3">
                                        <a  class="btn btn-light" href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                                    </div>
                                    <div class="me-3">
                                        <a  class="btn btn-light" href="https://github.com/"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
                                    </div>
                                    <div class="me-3">
                                        <a  class="btn btn-light" href="https://www.linkedin.com/"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                                    </div>
                                </div>
                                <h4>I’m a self-taught web developer. Seeking a challenging yet rewarding career with a progressive organization that provides the opportunity for development. Hardwork and Honesty is my policy.</h4>
                                <div className="mt-3">
                                    <a href="#contact"><button class="btn btn-danger me-3">Send Message</button></a>
                                    <button class="btn btn-danger"><a href={resume} download>Download Resume</a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
};

export default About;