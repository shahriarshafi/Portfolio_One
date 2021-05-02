import React, { useEffect } from 'react';
import About from '../About/About';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import HeaderMain from '../HeaderMain/HeaderMain';
import Projects from '../Projects/Projects';
import Aos from "aos";
import "aos/dist/aos.css";
import './Home.css';


const Home = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, []);
    return (
        <>
            <div className="grids">
                <Header />
                <HeaderMain />
                <div data-aos="fade-down" className="boxes">
                    <Projects />
                </div>
                <div data-aos="fade-up" className="boxes">
                    <Blogs />
                </div>
                <div data-aos="fade-right" className="boxes">
                <About />
                </div>
                <div data-aos="flip-right" className="boxes">
                <Contact />
                </div>
                
            </div>
        </>
    );
};

export default Home;