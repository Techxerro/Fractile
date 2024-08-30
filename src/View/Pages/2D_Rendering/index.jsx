import React from "react";
import './style.scss';
import { image } from "../../../Assets";


class Media extends React.Component{  

    render(){
        return(
         <>            
            {/* <Banner title="See what we're up to" bg={image.mediabg}/> */}

            <section className="banner-Visualisation">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-12">
                            <p className="breadcrumb">
                                What we do 
                                <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.3536 4.35355C13.5488 4.15829 13.5488 3.84171 13.3536 3.64645L10.1716 0.464466C9.97631 0.269204 9.65973 0.269204 9.46447 0.464466C9.2692 0.659728 9.2692 0.976311 9.46447 1.17157L12.2929 4L9.46447 6.82843C9.2692 7.02369 9.2692 7.34027 9.46447 7.53553C9.65973 7.7308 9.97631 7.7308 10.1716 7.53553L13.3536 4.35355ZM0 4.5H13V3.5H0V4.5Z" fill="black"/>
                                </svg>
                                Visualisation
                            </p>
                            <h2>2D/3D Rendering</h2> 
                            <div id="companyimg2"/>
                        </div>
                        <div className="col-lg-7 col-12">  
                            <img src={image.companyImg1} alt="" id="aboutimg" />
                        </div>
                    </div>
                </div>
            </section>

            <section style={{background:'#fff', padding:'60px 0'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <p data-aos="fade-right" style={{fontSize:'19px'}}>
                            Visualization, being the most powerful medium of VDC/BIM, is leveraged through advanced 2D/3D imaging techniques to provide the end user realistic options to assist in project decision making. 
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="company-bg1"></section>   
            
            <section style={{background:'#fff', padding:'60px 0'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">                            
                            <p data-aos="fade-right" style={{fontSize:'19px'}}>
                            Fractile provides customized rich rendering solutions in both 2D and 3D environments, utilizing multiple mediums to enhance user experience and decision-making capabilities. Our rendering services offer photorealistic representations of architectural designs and construction projects, empowering stakeholders to visualize concepts with unparalleled clarity and detail.
                            </p>
                            {/* <button className="btn-2" data-aos="fade-right" data-aos-delay="400">
                                <a href="/about" style={{textDecoration:'none'}}>
                                    Know more
                                </a>  
                            </button> */}
                        </div>
                    </div>
                </div>
            </section>         
         </>
        )
    }
}
export default Media;