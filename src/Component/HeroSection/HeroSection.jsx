import React, {useRef,useEffect} from "react";
import './style.scss';
import { image } from "../../Assets";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay,Navigation,Pagination } from 'swiper/modules';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const HeroSection = () =>{
    const swiperRef = useRef(); 

    useEffect(()=>{

        let tl = gsap.timeline({duration:0.5})
        tl.fromTo('.slider-1 .greenbg',{x:'200%'},{x:'0%'})
        tl.fromTo('.slider-1 #factile-letter',{opacity:'0',x:'10%',y:'-2%'},{opacity:'1',x:'0%',y:'0%', duration:0.6}) 

        let tl2 = gsap.timeline()
        tl2.fromTo('.hero h2',{x:'-200%'},{x:'0%', duration:.6,delay:0.2})   
        tl2.fromTo('.greenbg2',{x:'200%'},{x:'0%',delay:0.2,ease:'bounce.out',duration:0.7})
        tl2.fromTo('.swiper-pagination',{x:'300'},{x:'0',ease:'bounce.out',duration:1})

        gsap.timeline({duration:0.2})
        .fromTo('.slider-2 .greenbg',{x:'-200%'},{x:'0%'})
        .fromTo('.slider-2 .greenbg2',{x:'200%'},{x:'0%',delay:0.4,ease:'bounce.out',duration:1}) 

        gsap.fromTo('.slider-2 #elementimg2',{x:'-200%',opacity:0},{opacity:1,x:'0%',delay:0.3,ease:'ease.in',duration:1}) 
        gsap.fromTo('.slider-2 #elementimg1',{x:'-200%',opacity:0},{opacity:1,x:'0%',delay:0.7,ease:'ease.in',duration:1}) 
        gsap.fromTo('.slider-2 .elgr1',{x:'-200%',opacity:0},{opacity:1,x:'0%',delay:0.5,ease:'ease.in',duration:1}) 
        gsap.fromTo('.slider-2 .elgr2',{x:'-200%',opacity:0},{opacity:1,x:'0%',delay:0.8,ease:'ease.in',duration:1}) 
       
        gsap.timeline({duration:0.2})
        .fromTo('.slider-3 #element3',{opacity:'0',x:'10%',y:'-20%'},{opacity:'1',x:'0%',y:'0%', duration:0.8,delay:1}) 
        .fromTo('.slider-3 #element4',{opacity:'0',x:'10%',y:'-20%'},{opacity:'1',x:'0%',y:'0%', duration:0.8,delay:.2}) 
        // .fromTo('.slider-3 #element4',{height:'0'},{height:'60%', duration:0.8,delay:1}) 
    })

    const animation = () =>{
                
        let tl = gsap.timeline({duration:0.2})
        tl.fromTo('.slider-1 .greenbg',{x:'200%'},{x:'0%'})
        tl.fromTo('.slider-1 #factile-letter',{opacity:'0',x:'10%',y:'-2%'},{opacity:'1',x:'0%',y:'0%', duration:0.8}) 

        let tl2 = gsap.timeline()
        tl2.fromTo('.hero h2',{x:'-200%'},{x:'0%', duration:.6,delay:0.2})   
        tl2.fromTo('.greenbg2',{x:'200%'},{x:'0%',delay:0.4,ease:'bounce.out',duration:1}) 
        tl2.fromTo('.swiper-pagination',{x:'300'},{x:'0',ease:'bounce.out',duration:1})

        gsap.timeline({duration:0.2})
        .fromTo('.slider-2 .greenbg',{x:'-200%'},{x:'0%'})
        .fromTo('.slider-2 .greenbg2',{x:'200%'},{x:'0%',delay:0.4,ease:'bounce.out',duration:1}) 

        gsap.fromTo('.slider-2 #elementimg2',{x:'-200%',y:'-50%',opacity:0},{opacity:1,x:'-40%',y:'-50%',delay:0.3,ease:'ease.in',duration:1}) 
        gsap.fromTo('.slider-2 #elementimg1',{x:'-200%',opacity:0},{opacity:1,x:'0%',delay:0.7,ease:'ease.in',duration:1}) 
        gsap.fromTo('.slider-2 .elgr1',{x:'-200%',opacity:0},{opacity:1,x:'0%',delay:0.5,ease:'ease.in',duration:1}) 
        gsap.fromTo('.slider-2 .elgr2',{x:'-200%',opacity:0},{opacity:1,x:'0%',delay:0.8,ease:'ease.in',duration:1}) 
        
        gsap.timeline({duration:0.2})
        .fromTo('.slider-3 #element3',{opacity:'0',x:'10%',y:'-20%'},{opacity:'1',x:'0%',y:'0%', duration:0.8,delay:1})
        .fromTo('.slider-3 #element4',{opacity:'0',x:'10%',y:'-20%'},{opacity:'1',x:'0%',y:'0%', duration:0.8,delay:.2}) 
        // .fromTo('.slider-3 #element4',{height:'0'},{height:'63%', duration:0.8,delay:1}) 
    }

    return(
        <>
        <Swiper
            slidesPerView={1}
            centeredSlides={true}
            pagination={{
                el: '.swiper-pagination',
                clickable: true,
                renderBullet: function (index,className) {
                    return ('<span class="' + className + '">'+[index+1]+'</span>');
                }
            }} 
            onSlideChange={()=>animation()}               
            className="hero-slider-wrapper"        
            autoplay={{delay:8000,disableOnInteraction:false,pauseOnMouseEnter: false,}}                  
            modules={[Navigation,Autoplay,Pagination]} 
            onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
            }}
        >
            
            <SwiperSlide>
            <section className=" slider-1">
                <div className="container">
                    <div className="row">
                        <div className="col-12">    
                            <div className="content-wrapper">    
                                <h2>Anticipate. Optimize. Accelerate.</h2>
                            </div>          
                            <div className="greenbg" ></div>                        
                            <div className="greenbg2"></div>
                            <img src={image.heroimg1} alt="" id="factile-letter" />
                        </div>
                    </div>
                </div>   
            </section>        
            </SwiperSlide>
            
            <SwiperSlide>
            <section className="slider-2">
                <div className="container">
                    <div className="row">
                        <div className="col-12">   
                            <div className="content-wrapper">   
                                <h2>Enhance & Expedite project performance.</h2>
                            </div>
                            <div className="greenbg" ></div>                        
                            <div className="greenbg2"></div>
                            <div className="greenelement elgr1"></div>
                            <div className="greenelement elgr2"></div>
                            <img src={image.sliderElement1} alt="" id="elementimg1" />
                            <img src={image.sliderElement2} alt="" id="elementimg2" />
                        </div>
                    </div>
                </div>   
            </section>
            
            </SwiperSlide> 

            <SwiperSlide>
            <section className="slider-1 slider-3">
                <div className="container">
                    <div className="row">
                        <div className="col-12">    
                            <div className="content-wrapper">    
                                <h2>Our Priority: Rapidly Delivering What You Need</h2>
                            </div>          
                            <div className="greenbg" ></div>                        
                            <div className="greenbg2"></div>
                            <div className="img-wrapper">
                                <img src={image.sliderElement3} alt="" id="element3" />
                                <img src={image.sliderElement4} alt="" id="element4" />
                            </div>                        
                        </div>
                    </div>
                </div>   
            </section> 
            </SwiperSlide>
            <div className="swiper-pagination"></div>

            <div className="socialicon d-flex">
                <span id="facebook">
                    <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 11.5001H9.5L10.5 7.50012H7V5.50012C7 4.47012 7 3.50012 9 3.50012H10.5V0.140122C10.174 0.0971222 8.943 0.00012207 7.643 0.00012207C4.928 0.00012207 3 1.65712 3 4.70012V7.50012H0V11.5001H3V20.0001H7V11.5001Z" fill="white"/>
                    </svg>    
                </span>  
                <span id="twitter">
                    <svg width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="27" height="24.9648" rx="5" fill="none"/>
                        <path d="M10 6.01001H6L16.5 19.8794H20.5L10 6.01001Z" stroke="white"/>
                        <path d="M20.5 5.54773H19L5 20.3417H6.5L20.5 5.54773Z" fill="white"/>
                    </svg>
                </span>       
                <span id="instagram">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 0C12.717 0 13.056 0.00999994 14.122 0.0599999C15.187 0.11 15.912 0.277 16.55 0.525C17.21 0.779 17.766 1.123 18.322 1.678C18.8305 2.1779 19.224 2.78259 19.475 3.45C19.722 4.087 19.89 4.813 19.94 5.878C19.987 6.944 20 7.283 20 10C20 12.717 19.99 13.056 19.94 14.122C19.89 15.187 19.722 15.912 19.475 16.55C19.2247 17.2178 18.8311 17.8226 18.322 18.322C17.822 18.8303 17.2173 19.2238 16.55 19.475C15.913 19.722 15.187 19.89 14.122 19.94C13.056 19.987 12.717 20 10 20C7.283 20 6.944 19.99 5.878 19.94C4.813 19.89 4.088 19.722 3.45 19.475C2.78233 19.2245 2.17753 18.8309 1.678 18.322C1.16941 17.8222 0.775931 17.2175 0.525 16.55C0.277 15.913 0.11 15.187 0.0599999 14.122C0.0129999 13.056 0 12.717 0 10C0 7.283 0.00999994 6.944 0.0599999 5.878C0.11 4.812 0.277 4.088 0.525 3.45C0.775236 2.78218 1.1688 2.17732 1.678 1.678C2.17767 1.16923 2.78243 0.775729 3.45 0.525C4.088 0.277 4.812 0.11 5.878 0.0599999C6.944 0.0129999 7.283 0 10 0ZM10 5C8.67392 5 7.40215 5.52678 6.46447 6.46447C5.52678 7.40215 5 8.67392 5 10C5 11.3261 5.52678 12.5979 6.46447 13.5355C7.40215 14.4732 8.67392 15 10 15C11.3261 15 12.5979 14.4732 13.5355 13.5355C14.4732 12.5979 15 11.3261 15 10C15 8.67392 14.4732 7.40215 13.5355 6.46447C12.5979 5.52678 11.3261 5 10 5ZM16.5 4.75C16.5 4.41848 16.3683 4.10054 16.1339 3.86612C15.8995 3.6317 15.5815 3.5 15.25 3.5C14.9185 3.5 14.6005 3.6317 14.3661 3.86612C14.1317 4.10054 14 4.41848 14 4.75C14 5.08152 14.1317 5.39946 14.3661 5.63388C14.6005 5.8683 14.9185 6 15.25 6C15.5815 6 15.8995 5.8683 16.1339 5.63388C16.3683 5.39946 16.5 5.08152 16.5 4.75ZM10 7C10.7956 7 11.5587 7.31607 12.1213 7.87868C12.6839 8.44129 13 9.20435 13 10C13 10.7956 12.6839 11.5587 12.1213 12.1213C11.5587 12.6839 10.7956 13 10 13C9.20435 13 8.44129 12.6839 7.87868 12.1213C7.31607 11.5587 7 10.7956 7 10C7 9.20435 7.31607 8.44129 7.87868 7.87868C8.44129 7.31607 9.20435 7 10 7Z" fill="white"/>
                    </svg>
                </span>       
                <span id="linkedin">
                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.65169 2.29165C4.65144 2.79998 4.44926 3.28739 4.08964 3.64666C3.73001 4.00592 3.2424 4.20761 2.73407 4.20736C2.22574 4.2071 1.73833 4.00493 1.37906 3.6453C1.0198 3.28568 0.818105 2.79806 0.81836 2.28973C0.818614 1.7814 1.02079 1.29399 1.38042 0.934725C1.74004 0.57546 2.22765 0.37377 2.73598 0.374024C3.24432 0.374278 3.73173 0.576455 4.09099 0.93608C4.45026 1.2957 4.65195 1.78332 4.65169 2.29165ZM4.70919 5.62665H0.87586V17.625H4.70919V5.62665ZM10.7659 5.62665H6.95169V17.625H10.7275V11.3287C10.7275 7.82123 15.2988 7.4954 15.2988 11.3287V17.625H19.0842V10.0254C19.0842 4.11248 12.3184 4.3329 10.7275 7.23665L10.7659 5.62665Z" fill="white"/>
                    </svg>
                </span>       
            </div>
        </Swiper>
        </>
    )
}

export default HeroSection;