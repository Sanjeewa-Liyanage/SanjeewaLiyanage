import React from "react";
import "./styles.css";
import img1 from '../assets/sanjeewa.jpeg';




const Home =() => {
return(

    <section className="home" id="Home">
        <div className="home-content">
            <h3>Hi,</h3>
            <h1>I'm Sanjeewa Liyanage</h1>
            <h3>And I'm a <span className="multiple-text"></span></h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus vitae veritatis accusantium. Quaerat quidem neque quibusdam nihil repellendus eaque nisi ullam quasi accusamus, ab, magnam ipsa? Quaerat quasi nesciunt quod.</p>
            <div className="social-media">
            <a href="#"><i class="fa-brands fa-facebook"></i></a>
                <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                <a href="#"><i class="fa-brands fa-github"></i></a>
                <a href="#"><i class="fa-brands fa-whatsapp"></i></a> 
            </div>
            <a href="#" className="btn">Download Cv</a>

        </div>
        <div className="home-img">
            <img class ="profile" src= {img1}></img> 
        </div>
    </section>
);
};
export default Home;