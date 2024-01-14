// import React from 'react';
import { Link } from "react-router-dom";
import "./home.css"

const Home = () => {
    return (
        <section className="home">
            <div className="home-content">
                <h3>Hello, It's Me</h3>
                <h1>Syed Ittyhadul Islam</h1>
                <h3>And I'm a <span className="text"></span></h3>
                <p>
                    Web Designer with extensive experience for over 6 months.<br/>
                        Expertise is to create and web design, Frontend Design, and Machine Learning/AI
                </p>
                <Link to={"/about"} className="btn-box">About Me More</Link>
            </div>
            <div className="home-image">
                
            </div>
        </section>
    );
};

export default Home;