import React from "react";
import './style.scss';
import { image } from "../../Assets";

const ServicesLayout =(props)=>{
    return(
        <>
            <section className="banner-Visualisation">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-12">
                            <p className="breadcrumb">
                                What we do 
                                <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.3536 4.35355C13.5488 4.15829 13.5488 3.84171 13.3536 3.64645L10.1716 0.464466C9.97631 0.269204 9.65973 0.269204 9.46447 0.464466C9.2692 0.659728 9.2692 0.976311 9.46447 1.17157L12.2929 4L9.46447 6.82843C9.2692 7.02369 9.2692 7.34027 9.46447 7.53553C9.65973 7.7308 9.97631 7.7308 10.1716 7.53553L13.3536 4.35355ZM0 4.5H13V3.5H0V4.5Z" fill="black"/>
                                </svg>
                                {props.mainservice}
                            </p>
                            <h2>
                                {props.serviceName}
                            </h2> 
                            <div id="companyimg2"/>
                        </div>
                        <div className="col-lg-7 col-12">  
                            <img src={props.banner} alt="" id="aboutimg" />
                            <div id="companyimg3"/>

                        </div>
                    </div>
                </div>
            </section>

            <section style={{background:'#fff', padding:'60px 0'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <p data-aos="fade-right" style={{fontSize:'19px'}}>
                            {props.maincontent}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="company-bg" style={{background:`url(${props.banner2})`,backgroundSize:'cover'}}></section>   
            
            <section style={{background:'#fff', padding:'60px 0'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">                            
                            <p data-aos="fade-right" style={{fontSize:'19px'}}>
                            {props.content}                            
                            </p>
                            {/* <p data-aos="fade-right" style={{fontSize:'19px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> */}
                            <button className="btn-2" data-aos="fade-right" data-aos-delay="400">
                                <a href="#" style={{textDecoration:'none'}}>
                                    Know more
                                </a>  
                            </button>
                        </div>
                    </div>
                </div>
            </section>     
        </>
    )
}

export default ServicesLayout;