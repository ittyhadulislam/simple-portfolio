// import React from 'react';
import "./about.css"
import { FaLinux } from "react-icons/fa6";


const About = () => {
    return (
        <>
            <section className="about">
                <div className="about-content">
                    <div className="about-image">
                        <img src="AZ-Logo.png" alt="About Logo" />
                    </div>
                    <div className="about-text">
                        <h2>About <span>Me</span></h2>
                        <h4>Frontend Developer</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit iusto vel placeat esse officiis,
                            reiciendis necessitatibus dignissimos ipsa repudiandae consequuntur, ea rem atque quae? Dolorem
                            nulla deserunt blanditiis enim rem!
                        </p>
                    </div>
                </div>
            </section>
            <section className="service">
                <div className="service-text">
                    <h1>My <span>Services</span></h1>
                </div>
                <div className="card">
                    <div className="card-content">
                        <FaLinux className="service-icon"/>
                        <h2>UI/UX Design</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum amet officiis voluptatem
                            beatae ullam ab iure alias itaque ut autem nam error, doloremque, rem facere quasi fuga
                            illum. Pariatur, blanditiis!
                        </p>
                        <a href="#" className="btn-box">Learn More</a>
                    </div>
                    <div className="card-content">
                        <FaLinux className="service-icon" />
                        <h2>UI/UX Design</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum amet officiis voluptatem
                            beatae ullam ab iure alias itaque ut autem nam error, doloremque, rem facere quasi fuga
                            illum. Pariatur, blanditiis!
                        </p>
                        <a href="#" className="btn-box">Learn More</a>
                    </div>
                    <div className="card-content">
                        <FaLinux className="service-icon" />
                        <h2>UI/UX Design</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum amet officiis voluptatem
                            beatae ullam ab iure alias itaque ut autem nam error, doloremque, rem facere quasi fuga
                            illum. Pariatur, blanditiis!
                        </p>
                        <a href="#" className="btn-box">Learn More</a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;