import React from "react";
import './style.scss';

const WhyChooseus = () =>{
    return(
        <>
        <section className="whychooseus-section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="title">
                            <h2>Why Choose Us</h2>                            
                            <div className="bottomline">
                                <div className="blink"></div>
                            </div>
                        </div>
                        <img src={require('../../Assets/Vector (13).png')} alt=""  data-aos="fade-down" data-aos-delay="700" id="whyusvector1"/>
                        <img src={require('../../Assets/Group 23 (3).png')} alt=""  data-aos="fade-right" data-aos-delay="600" id="whyusvector2"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-3 col-md-6 col-12">
                        <div className="content-box" data-aos="fade-up" data-aos-delay="400">
                            <h4>Industry<br/> Experts</h4>
                            <p>
                            We bring our professional experiences from the fields of technology, software, construction, and architecture to assist in articulating your concerns and helping you address them.
                            </p>                                
                        </div>                        
                    </div>
                    <div className="col-xl-3 col-md-6 col-12">
                        <div className="content-box" data-aos="fade-up" data-aos-delay="400">
                            <h4>Cutting-Edge<br/> Technology</h4>
                            <p>
                            We are the frontrunners of the BIM space. We use the latest, fastest and reliable technical tools to tackle your needs.
                            </p>                                
                        </div>                        
                    </div>
                    <div className="col-xl-3 col-md-6 col-12">
                        <div className="content-box"  data-aos="fade-up" data-aos-delay="400">
                            <h4>Seamless <br/>Collaboration</h4>
                            <p>
                            Our team becomes your team to successfully deliver on your requirements. Our smooth, transparent communication protocol allows for information exchange in real time.
                            </p>                                
                        </div>                        
                    </div>
                    <div className="col-xl-3 col-md-6 col-12">
                        <div className="content-box"  data-aos="fade-up" data-aos-delay="400">
                            <h4>Customise<br/> Solutions</h4>
                            <p>
                            We believe that unique issues require unique answers. We use our skill and resources to provide you with solutions most suited to your needs.
                            </p>                                
                        </div>                        
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default WhyChooseus;