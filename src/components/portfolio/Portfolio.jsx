// import React from 'react';
import { Link } from 'react-router-dom';
import { GoLink } from "react-icons/go";
import "./portfolio.css"

const Portfolio = () => {
    return (
        <section className="portfolio">
            <div className="portfolio-title">
                <h1>Latest <span>Project</span></h1>
            </div>
            <div className="portfolio-cards">
                <div className="portfolio-content">
                    <img src="image.png" alt="" />
                    <div className="layer">
                        <h5>UX/UI</h5>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde illo quibusdam, amet
                            obcaecati ullam necessitatibus facere illum omnis suscipit accusamus deserunt
                            praesentium incidunt. Sapiente libero laudantium vero voluptatem. Similique, iusto!
                        </p>
                        <Link to={"/"}>< GoLink /></Link>
                    </div>
                </div>
                <div className="portfolio-content">
                    <img src="image.png" alt="" />
                    <div className="layer">
                        <h5>UX/UI</h5>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde illo quibusdam, amet
                            obcaecati ullam necessitatibus facere illum omnis suscipit accusamus deserunt
                            praesentium incidunt. Sapiente libero laudantium vero voluptatem. Similique, iusto!
                        </p>
                        <Link to={"/"}>< GoLink /></Link>
                    </div>
                </div>
                <div className="portfolio-content">
                    <img src="image.png" alt="" />
                    <div className="layer">
                        <h5>UX/UI</h5>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde illo quibusdam, amet
                            obcaecati ullam necessitatibus facere illum omnis suscipit accusamus deserunt
                            praesentium incidunt. Sapiente libero laudantium vero voluptatem. Similique, iusto!
                        </p>
                        <Link to={"/"}>< GoLink /></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;