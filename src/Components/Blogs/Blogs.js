import React from 'react';
import './Blogs.css';
import hireMe from '../../images/img-1.png';
import repair from '../../images/img-2.png'
import bazar from '../../images/img-3.PNG'

const Blogs = () => {
    return (
        <>
           <section id="blogs" className="my-5">
           <h1 class="text-center mb-5">Blogs</h1>
            <div className="container">
            <div className="row my-3 mb-sm-5">
                        <div className="col-md-4 my-3">
                            <div class="card">
                                <img src={hireMe} class="card-img-top" alt="..." />
                                <div class="card-body text-center">
                                    <h5 class="card-title">Hire Me</h5>
                                    <p class="card-text">A ride sharing website.</p>
                                    <a href="https://linkedin.com/" class="btn btn-primary">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 my-3">
                            <div class="card">
                                <img src={repair} class="card-img-top img-fluid mobile" style={{"height": "206px"}} alt="..." />
                                <div class="card-body text-center">
                                    <h5 class="card-title ">Mobile Repair</h5>
                                    <p class="card-text">A Mobile Repair Services!!</p>
                                    <a href="https://linkedin.com/" class="btn btn-primary">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 my-3">
                            <div class="card">
                                <img src={bazar} style={{"height": "206px"}} class="card-img-top" alt="..." />
                                <div class="card-body text-center">
                                    <h5 class="card-title">Big Bazar</h5>
                                    <p class="card-text">A bazar where you can buy your desired products.</p>
                                    <a href="https://linkedin.com/" class="btn btn-primary">Read More</a>
                                </div>
                            </div>
                        </div> 
                    </div>
            </div>
           </section>
        </>
    );
};

export default Blogs;