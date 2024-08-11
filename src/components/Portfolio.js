import React from "react";
import R from "../assets/R.png";
import desk from"../assets/desk.jpeg";
import flutter from"../assets/flutter.png";
import grocery from "../assets/grocery app.png";
import mobile from"../assets/mobile mart shop.png";
import pex from "../assets/pexels-photo-270366.jpeg"
import photo from "../assets/pexels-photo-270366.jpeg";

const Portfolio = () => {
    return(
        <section className="portfolio" id="portfolio">
            <h2 className="heading">My <span>Projects</span></h2>
            <div className="portfolio-container">
                <div className="portfolio-box">
                    <img src= {photo} alt="web design" />
                    <div className="portfolio-layer">
                        <h4>Web Design</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <i className="fa-solid fa-up-right-from-square"></i>
                    </div>
                </div>
                <div className="portfolio-box">
                    <img src={mobile} alt="web design" />
                    <div className="portfolio-layer">
                        <h4>Mobile Mart App</h4>
                        <p>Explore the latest smartphones and accessories with Mobile Mart, an intuitive app designed to enhance your mobile shopping experience. Effortlessly browse, select, and purchase your next device—all from the convenience of your phone</p>
                        <i className="fa-solid fa-up-right-from-square"></i>
                    </div>
                </div>
                <div className="portfolio-box">
                    <img src={grocery} alt="web design" />
                    <div className="portfolio-layer">
                        <h4>Sample Grocery Mobile App</h4>
                        <p>Streamline your grocery shopping with this app, a Flutter app designed for easy product browsing, order placement, and account management, all from your mobile device.</p>
                        <i className="fa-solid fa-up-right-from-square"></i>
                    </div>
                </div>
            </div>
        </section> 
    );
};

export default Portfolio;
