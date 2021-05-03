import React from 'react';
import './Blogs.css';
import hireMe from '../../images/blog-1.jpg';
import repair from '../../images/blog-2.jpg'
import bazar from '../../images/blog-3.jpg'

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
                                    <h5 class="card-title text-danger">Supporting local journalists on #WorldPressFreedomDay</h5>
                                    <p class="card-text">We’ve organized a global day of action on Twitter on May 3rd centered around the hashtag #FollowLocalJournalists. We’re encouraging everyone — prominent national reporters, journalism advocacy organizations, and everyday passionate news consumers — to share impactful examples of local journalism and elevate the reporters who contributed to it. The goal is to spotlight these reporters’ work and increase their audience.</p>
                                    <a href="https://linkedin.com/" class="btn btn-primary">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 my-3">
                            <div class="card">
                                <img src={repair} class="card-img-top img-fluid mobile" style={{"height": "206px"}} alt="..." />
                                <div class="card-body text-center">
                                    <h5 class="card-title text-success ">Introducing our Responsible Machine Learning Initiative</h5>
                                    <p class="card-text">Leading this work is our ML Ethics, Transparency and Accountability (META) team: a dedicated group of engineers, researchers, and data scientists collaborating across the company to assess downstream or current unintentional harms in the algorithms we use and to help Twitter prioritize which issues to tackle first.</p>
                                    <a href="https://linkedin.com/" class="btn btn-primary">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 my-3">
                            <div class="card">
                                <img src={bazar} style={{"height": "206px"}} class="card-img-top" alt="..." />
                                <div class="card-body text-center">
                                    <h5 class="card-title text-primary">Updates to our work on COVID-19 vaccine misinformation</h5>
                                    <p class="card-text">In December, we shared updates on our work to protect the public conversation surrounding COVID-19. Starting today, we will begin applying labels to Tweets that may contain misleading information about COVID-19 vaccines, in addition to our continued efforts to remove the most harmful COVID-19 misleading information from the service. Since introducing our COVID-19 guidance, we have removed more than 8,400 Tweets and challenged 11.5 million accounts worldwide.</p>
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