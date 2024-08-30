import React from "react";
import './style.scss';
import { image } from "../../../Assets";

const About = () =>{
    return(
        <>           
            <section className="about-main-sec">
                <div className="container">
                    <div className="row">                        
                        <div className="col-lg-5 col-sm-6 col-12">
                            <h2>About us</h2>                            
                            <p data-aos="fade-right">
                            Fractile Studio offers cutting-edge BIM/VDC and Project Engineering services, designed to streamline and expedite project performance amidst the digital transformation in the AEC industry.
                            </p>
                            <p>'As the industry grapples with a scarcity of skilled labor, Fractile Studio understands the challenges of navigating the digital landscape. We stand as experienced and accountable partners, ready to tailor our resources to meet your digital processing needs.</p>
                            <p><b>“At Fractile Studio, we are experts at recognizing and solving the problems that create friction for you.”</b></p>
                            <div id="aboutimg2"/>
                        </div>
                        <div className="col-lg-7 col-sm-6 col-12">
                            <img src={image.aboutimg} alt="" id="aboutimg" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-section d2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 col-12">
                            <div className="missionimg">
                                <img src={image.ourMissionimg1} alt=""id="mission1"  />
                                <img src={image.ourMissionimg2} alt="" id="mission2" />
                                <img src={image.ourMissionimg3} alt="" id="mission3" />
                                <img src={image.ourMissionimg4} alt="" id="mission4" />
                            </div>
                        </div>
                        <div className="col-md-5 col-sm-12 col-12">
                            <div className="title">
                                <h2>Our Mission</h2>                               
                                <div className="bottomline">
                                    <div className="blink"></div>
                                </div>
                            </div>
                            <br/>
                            <p data-aos="fade-up" data-aos-delay="200">
                            Fractile provides best-in-class BIM/VDC and Engineering Management services that focus on outcomes. Rather than focusing on just ‘what’ BIM can do, at Fractile Studio we also address the ‘why’ to create customized workflows to meet client needs and deliver expected outcomes.
                            <br/> Our leadership has more than 50 years of experience leading construction technology departments in top construction companies. Our team will work with you to identify and achieve pragmatic solutions correctly the first time around to ensure your projects stay on schedule and under budget.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="whatwedo">      
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-12 ">
                            <div className="title">
                                <h2>Our Vision</h2>                               
                                <div className="bottomline">
                                    <div className="blink"></div>
                                </div>
                            </div>
                            <p>Transforming Construction Through Innovation and Collaboration.

                                At Fractile, we envision a construction industry where innovation and collaboration are at the forefront of every project. Our vision is to lead the way in transforming traditional construction practices by leveraging cutting-edge technology and fostering strong partnerships.

                                We aim to redefine the construction landscape by pioneering new approaches and methodologies that enhance efficiency, sustainability, and quality. Through our dedication to innovation, we seek to empower our clients to achieve their project goals with greater speed, accuracy, and cost-effectiveness.
                            </p>
                            <img src={require('../../../Assets/Vector (1).png')} data-aos="fade-right" data-aos-delay="200" alt="" id="whitevector" />
                            <img src={require('../../../Assets/Vector (2).png')} data-aos="fade-left" data-aos-delay="600"   alt="" id="transparentvector" />
                            <img src={require('../../../Assets/Vector (4).png')} data-aos="fade" data-aos-delay="200" alt="" id="strokevector" />
                            <img src={require('../../../Assets/Vector (5).png')} data-aos="fade" data-aos-delay="2000" alt="" id="strokevector2" />
                        </div>
                        <div className="col-lg-6 col-12">
                            <img src={image.ourVision} alt="" id="construction" data-aos="fade-left" style={{zIndex:'1',position:'relative'}}/>
                        </div>
                    </div>
                </div>      
            </section>

            <section className="about-section d2" style={{marginBottom:'50px'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-5 col-md-12 col-12 d-flex align-items-center ">
                            
                                <img src={image.vector} alt=""id="aboutimgback2"  data-aos="fade-right" data-aos-delay="400"/>
                                <svg  id="aboutimgback" width="518" height="403" viewBox="0 0 518 403" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.99561 0.00132274C16 -0.00587105 -6.31006 0.00137906 2.9946 0.00137906C135.475 -0.110408 129.415 1.0074 261.784 0.00130763C283.274 -0.11048 294.794 6.82038 305.317 25.7125C370.117 140.965 436.357 255.548 502.044 370.353C506.918 378.849 511.238 387.681 517.995 400.648C505.81 401.43 496.727 402.436 487.533 402.436C355.052 402.548 222.572 401.989 90.202 402.995H2.99573C2.99573 402.995 2.9946 46.5 2.9946 38C2.9946 29.5 2.99561 0.00132274 2.99561 0.00132274Z" fill="#157438"/>
                                </svg>
                                <img src={image.challangesecimage} alt="" id="aboutimg"  data-aos="fade-right" data-aos-delay="100"/>
                            
                        </div>
                        <div className="col-xl-6 col-lg-7 col-md-12 col-12 d-flex align-items-center">
                            <div>
                                <div className="title">
                                    <h2 style={{color:'#157438'}}>Challanges We Solve</h2>                               
                                    <div className="bottomline">
                                        <div className="blink"></div>
                                    </div>
                                </div>
                                <br/>
                                <p data-aos="fade-up" data-aos-delay="200">The US AEC industry recognizes the inefficiencies in its workflows, when it comes to coordination and understanding of project requirements between different stakeholders. BIM/VDC services attempt to resolve most of these issues, but fall short due to skilled technical resource shortage in the industry. Even when companies do have the resources available, the fluctuation of workload and expensive practices of training new staff due to recurring attritions lead to project & time overruns. Fractile, in its capacity as a premier digital content creator and manager in US AEC industry, provides customized solutions specific to project needs without compromising on content and product quality, and providing the most efficient solution to the end user.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;
