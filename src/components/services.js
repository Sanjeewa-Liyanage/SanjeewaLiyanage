import React from "react";
import "./styles.css";
const Service = () =>{
    return(
        <section class="services" id="services">
            <h2 class="heading">My <span>Services</span></h2>
                <div class="services-container">
                    <div class="services-box">
                        <i class="fa-solid fa-code"></i>
                        <h3>Web Development</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus doloremque, iure quod eum repellendus illo numquam nemo temporibus minus facilis eligendi iusto? Placeat perspiciatis quisquam fugit recusandae? Quasi, harum libero?</p>
                        <a href="#" class="btn">Read More</a>
                    </div> 
                    <div class="services-box">
                        <i class="fa-brands fa-android"></i>
                        <h3>Mobile Development</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus doloremque, iure quod eum repellendus illo numquam nemo temporibus minus facilis eligendi iusto? Placeat perspiciatis quisquam fugit recusandae? Quasi, harum libero?</p>
                        <a href="#" class="btn">Read More</a>
                    </div> 
                    <div class="services-box">
                        <i class="fa-solid fa-laptop-code"></i>
                        <h3>Software Development</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus doloremque, iure quod eum repellendus illo numquam nemo temporibus minus facilis eligendi iusto? Placeat perspiciatis quisquam fugit recusandae? Quasi, harum libero?</p>
                        <a href="#" class="btn">Read More</a>
                    </div> 
                </div>
        </section>
    );
};
export default Service;