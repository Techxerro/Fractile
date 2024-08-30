import React from "react";
import './style.scss';
import { image } from "../../../Assets";
import Banner from "../../../Utils/Banner/Banner";

const Contact = () =>{
    return(
        <>
        <Banner title="Get In Touch" bg={image.contactbg}/>
        <section className="form">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>We'd like to hear <span style={{color:'#8ed61d'}}>from you</span></h2></div>
                    <div className="col-lg-7 col-12">
                        <form action="">
                            <label>
                                <input type="text"  placeholder="Full Name"/>
                            </label>
                            <label>
                                <input type="email"  placeholder="Email Address"/>
                            </label>
                            <label>
                                <input type="phone"  placeholder="Phone Number"/>
                            </label>
                            <textarea placeholder="Your Message" id="" cols="30" rows="5"/>
                            <input type="submit" value="Send Over" />
                        </form>
                    </div>
                    <div className="col-lg-5 col-12">
                        <div className="schedule-box">
                            <img src={image.teamellipse1} alt="" />
                            <a href="https://calendly.com/mailboxmoneyre"><span>Schedule a call with Dusten</span></a>
                            <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_178_114)">
                                <path d="M1 5.14233H11H1Z" fill="white"></path>
                                <path d="M1 5.14233H11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M8 1.14233L12 5.14233L8 9.14233" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                </g>
                            </svg>
                        </div>
                        
                        <div className="schedule-box">
                            <img src={image.teamellipse2} alt="" />
                            <a href="https://calendly.com/danielmatajira-realestate/zoom?month=2022-11"><span>Schedule a call with Daniel</span></a>
                            <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_178_114)">
                                <path d="M1 5.14233H11H1Z" fill="white"></path>
                                <path d="M1 5.14233H11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M8 1.14233L12 5.14233L8 9.14233" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                </g>
                            </svg>
                        </div>

                        <div className="row">
                            <div className="col-lg-6 col-12">
                                <div className="contact-box">
                                    <a href="mailto:Dusten@mailboxmoneyre.com"><span>Email Dusten</span></a>
                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_178_114)">
                                    <path d="M1 5.14233H11H1Z" fill="white"></path>
                                    <path d="M1 5.14233H11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M8 1.14233L12 5.14233L8 9.14233" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </g>
                                </svg>
                                </div>
                            </div>
                            <div className="col-lg-6 col-12">
                            <div className="contact-box greenbg">
                                    <a href="/investor"><span>Join Us </span></a>
                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_178_114)">
                                    <path d="M1 5.14233H11H1Z" fill="white"></path>
                                    <path d="M1 5.14233H11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M8 1.14233L12 5.14233L8 9.14233" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </g>
                                </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>

    )
}

export default Contact;