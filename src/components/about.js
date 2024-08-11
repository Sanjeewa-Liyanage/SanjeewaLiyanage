import React from "react";
import "./styles.css";
import img1 from '../assets/sanjeewa.jpeg';
const About = () =>{
return(
    <section className="about" id ="about">
        <div className="about-img">
        <img src ={img1} alt="" />


        </div>
        <div className="about-content">
            <h2 className="heading">About <span>Me</span></h2>
            <h3>Mobile Application Developer</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod amet, ipsa porro, modi nulla fuga dicta in nobis necessitatibus aspernatur quasi, libero repellendus nisi harum ad repudiandae. Veritatis, omnis praesentium!</p>
            <a href="#" className="btn">Read More</a>
        </div>
    </section>
  
    
);


};
export default About;