// import React from 'react';
import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import "./skills.css"

const Skills = () => {
    return (
        <section className="skills">
            <div>
                <div className="skills-text">
                    <h1>My <span>Skills</span></h1>
                </div>
                <div className="card">
                    <div className="card-content">
                        <IoLogoHtml5 className="skills-icon html-icon"/>
                        <div className="info">
                            <h1>HTML</h1>
                        </div>
                        <div className="progress-bar html">
                            <span></span>
                        </div>
                    </div>
                    <div className="card-content">
                        <IoLogoCss3 className="skills-icon css-icon"/>
                        <div className="info">
                            <h1>CSS</h1>
                        </div>
                        <div className="progress-bar css">
                            <span></span>
                        </div>
                    </div>
                    <div className="card-content">
                        <FaReact className="skills-icon react-icon"/>
                        <div className="info">
                            <h1>React</h1>
                        </div>
                        <div className="progress-bar react">
                            <span></span>
                        </div>
                    </div>
                    <div className="card-content">
                        <FaPython className="skills-icon python-icon"/>
                        <div className="info">
                            <h1>Python</h1>
                        </div>
                        <div className="progress-bar python">
                            <span></span>
                        </div>
                    </div>
                    <div className="card-content">
                        <GiArtificialIntelligence className="skills-icon AI-icon"/>
                        <div className="info">
                            <h1>AI</h1>
                        </div>
                        <div className="progress-bar AI">
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;