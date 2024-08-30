import React from "react";
import './style.scss';
import { image } from "../../Assets";

const AboutSection = () =>{
    return(
        <>
        <section className="about-section">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-5 col-md-12 col-sm-12 col-12 d-flex align-items-center">
                        <img src={image.vector} alt="" id="aboutimgback2"  data-aos="slide-right" data-aos-delay="100"/>
                        <svg  id="aboutimgback" width="518" height="403" viewBox="0 0 518 403" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.99561 0.00132274C16 -0.00587105 -6.31006 0.00137906 2.9946 0.00137906C135.475 -0.110408 129.415 1.0074 261.784 0.00130763C283.274 -0.11048 294.794 6.82038 305.317 25.7125C370.117 140.965 436.357 255.548 502.044 370.353C506.918 378.849 511.238 387.681 517.995 400.648C505.81 401.43 496.727 402.436 487.533 402.436C355.052 402.548 222.572 401.989 90.202 402.995H2.99573C2.99573 402.995 2.9946 46.5 2.9946 38C2.9946 29.5 2.99561 0.00132274 2.99561 0.00132274Z" fill="#157438"/>
                        </svg>
                        <img src={image.homeabout} alt="" id="aboutimg"  data-aos="slide-right" data-aos-delay="200"/>
                    </div>
                    <div className="col-xl-6 col-lg-7 col-md-12 col-sm-12 col-12">
                        <div className="title">
                            <h2>Who We Are</h2>
                            <div className="bottomline">
                                <div className="blink"></div>
                            </div>
                        </div>
                        <h3 data-aos="fade-left">Whatever solutions your community needs, we develop them.</h3>
                        <br/>
                        <p data-aos="fade-up" data-aos-delay="200">The AEC industry is undergoing digital transformation amid a shortage of skilled labor. At Fractile Studio, we understand the challenges of moving forward on your digital journey.  We are experienced, accountable partners ready to flex our resources to your digital processing needs.</p>
                        
                        <button className="btn-2" data-aos="fade-right" data-aos-delay="400">
                            <a href="/about" style={{textDecoration:'none'}}>Know more</a>  
                        </button>
                        <img src={require('../../Assets/aboutimg-1.png')} alt="" id="abtimg1"/>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default AboutSection;