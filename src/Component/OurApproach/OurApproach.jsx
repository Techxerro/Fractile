import React from "react";
import './style.scss';

const OurApproach = () =>{
    return(
        <>
        <section className="approach-sec">
            <section className="bgblack">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                            <div className="title">
                                <h2>Our Approach</h2>
                                <div className="bottomline">
                                    <div className="blink"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-12 box">
                            <img src={require('../../Assets/approach1.png')} data-aos="fade-left" alt="" />
                            <h3>Customized Workflow</h3>
                            <p>We design workflows and leverage a worldwide network of resources to get you what you need, fast.</p>
                        </div>
                        <div className="col-lg-4 col-12 box">
                            <img src={require('../../Assets/approach2.png')} data-aos="fade-left" alt=""/>
                            <h3>Quality, Complete Deliverables</h3>
                            <p>Our deliverables are ready for your (and your business counterparts’) action. No wasted cycles and reformatting.</p>
                        </div>
                        <div className="col-lg-4 col-12 box">
                            <img src={require('../../Assets/approach3.png')} data-aos="fade-left" alt="" />
                            <h3>Deep Experience</h3>
                            <p>We bring experience from design, construction, manufacturing, and development perspectives.</p>
                        </div>
                    </div>
                </div>
            </section>       
        </section>
        
        </>
    )
}

export default OurApproach;