import React from "react";
import './style.scss';
import { useEffect, useState} from 'react'; 
import { useInView  } from 'react-intersection-observer'; 
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import TeamData from "./TeamData";

const NewsandInsight = ()=>{

    const { ref: teamSection, inView: teamSectionVisible } = useInView();

    useEffect(()=>{
        // if(teamSectionVisible === true){
        //     if(ClickedNext===true && ClickedPrev === false){
        //         gsap.fromTo('.slide-inner',{scaleX:0.28 ,scaleY:0.30,zIndex:9},{scale:1,zIndex:9,duration:1,delay:0.3,ease:'ease'});
        //         gsap.fromTo('.slide-inner',{x:375,y:110},{x:0,y:0,duration:1,delay:0.3,ease:Power1});
        //         gsap.fromTo('.sub-slide',{x:250},{x:0,stagger:0.2,duration:0.7,delay:0.9,ease:Power1})
        //         gsap.fromTo('.slide-inner .info',{x:'-100%'},{x:0,duration:0.2,delay:1.5})
        //         gsap.fromTo('.team-info',{x:'100%',opacity:0},{x:0, opacity:1,duration:0.8,delay:0.3, ease:Back})
        //         gsap.fromTo('.slider-prev',{scale:1,opacity:1},{scaleX:0.28 ,scaleY:0.30, duration:0.6,delay:0, ease:'ease'})
        //         gsap.fromTo('.slider-prev',{opacity:1},{opacity:0, duration:0.6,delay:0, ease:'ease'})
        //         setClickedNext(false);
        //     } 
        //     else if(ClickedPrev === true && ClickedNext===false){
        //         gsap.fromTo('.first .info',{x:'0%',opacity:1},{x:'-100%',opacity:1,duration:0.4})
        //         gsap.fromTo('.first',{scaleX:3.55,scaleY:3.35},{scale:1,duration:0.5,delay:0.5,ease:Power1})
        //         gsap.fromTo('.first',{x:-375,y:-110,},{x:0,y:0,duration:1,delay:0.3,ease:Power1});
        //         gsap.fromTo('.slide-inner',{scaleX:0.28 ,scaleY:0.30,opacity:1, duration:0.2,delay:0, ease:'ease'},{scale:1,opacity:1})
        //         gsap.fromTo('.slider-prev',{opacity:0},{opacity:0})               
        //         gsap.fromTo('.sub-slide:not(.first)',{x:-250},{x:0,duration:0.5,stagger:0.1,ease:Power1})
        //         gsap.fromTo('.team-info',{x:'100%',opacity:0},{x:0, opacity:1,duration:0.8,delay:0.3, ease:Back})
        //         setClickedPrev(false);
        //     }
        //     else{
        //         // Do nothing
        //     }
        // }
    })


    const [slideIndex,setSlideIndex] = useState(1);
    const [PreviewSlide1,setPreviewSlide1] = useState(2);
    const [PreviewSlide2,setPreviewSlide2] = useState(3);
    const [PreviewSlide3,setPreviewSlide3] = useState(4);
    const [ClickedNext, setClickedNext] = useState(false);
    const [ClickedPrev, setClickedPrev] = useState(false);

    const NextBtn = () =>{  
        setClickedNext(true);
        setClickedPrev(false);
        if(slideIndex === TeamData.length){
            setSlideIndex(1);  
        }        
        else{
            setSlideIndex(slideIndex+1);
            setPreviewSlide1(slideIndex+2);
            setPreviewSlide2(PreviewSlide1+2);
            setPreviewSlide3(PreviewSlide1+3);
        }

        //setting preview slides 
        if(PreviewSlide1 >= TeamData.length){
            setPreviewSlide1(1);
        } 
        else if(PreviewSlide1 === 1){
            setPreviewSlide1(2);
            setPreviewSlide2(3);
            setPreviewSlide3(4);
        }
        else{}
        if(PreviewSlide2 >= TeamData.length){
            setPreviewSlide2(1);
            setPreviewSlide3(2);
            setPreviewSlide1(TeamData.length);
        }else if(PreviewSlide2===1){            
            setPreviewSlide1(1);
            setPreviewSlide2(2);
            setPreviewSlide3(3);
        }
        else{}
        if(PreviewSlide3 >= TeamData.length){
            setPreviewSlide3(1);
            setPreviewSlide2(TeamData.length);
        }
        else{}

    }

    const PrevBtn = () => { 
        setClickedNext(false);       
        setClickedPrev(true);


        if(slideIndex === 1){
            setSlideIndex(TeamData.length);
            setPreviewSlide1(1);
            setPreviewSlide2(2);
            setPreviewSlide3(3);
        } 
        else{
            setSlideIndex(slideIndex-1);
        }

        if(PreviewSlide1===1){
            setPreviewSlide1(TeamData.length);
            setPreviewSlide2(1);
            setPreviewSlide3(2);
        }
        else{
            setPreviewSlide1(PreviewSlide1-1);
        }

        if(PreviewSlide2===1){
            setPreviewSlide2(TeamData.length);
            setPreviewSlide3(1);
        }
        else{
            setPreviewSlide2(PreviewSlide2-1);
        }

        if(PreviewSlide3===1){
            setPreviewSlide3(TeamData.length);
        }
        else{
            setPreviewSlide3(PreviewSlide3-1);
        }
    }

    const option={
        nav: true,
             
        navText:[
            `<svg width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.292893 7.29289C-0.0976314 7.68342 -0.0976315 8.31658 0.292892 8.7071L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34314C8.46159 1.95262 8.46159 1.31946 8.07107 0.928931C7.68054 0.538406 7.04738 0.538406 6.65686 0.92893L0.292893 7.29289ZM26 7L1 7L1 9L26 9L26 7Z" fill="white"/>
            </svg>`
            ,
            `<svg width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.7071 8.70711C26.0976 8.31658 26.0976 7.68342 25.7071 7.2929L19.3431 0.928934C18.9526 0.538409 18.3195 0.538409 17.9289 0.928934C17.5384 1.31946 17.5384 1.95262 17.9289 2.34315L23.5858 8L17.9289 13.6569C17.5384 14.0474 17.5384 14.6805 17.9289 15.0711C18.3195 15.4616 18.9526 15.4616 19.3431 15.0711L25.7071 8.70711ZM-8.74228e-08 9L25 9L25 7L8.74228e-08 7L-8.74228e-08 9Z" fill="white"/>
        </svg>`
        ],
        responsive:{
            0:{
                items:1,
                margin:10,
            },
            1000:{
                items:4,
                margin:10, 
            }
        }
    }


    return(
        <section className="news-section team-section" ref={teamSection}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="title">
                            <h2>Our Team</h2>    
                            <button className="btn-2"><a href="">View team</a></button>
                        </div>                        
                    </div>
                </div>
            </div>
            {/* <div className="container-fluid news-item">
                <div className="row">
                    <div className="newsboxwrapper">
                        <div className="news-box">
                            <div className="newsimg">
                                <img src={require('../../Assets/Vector (6).png')} alt="" />
                            </div>
                            <div className="newstext">
                                <p className="date">29 Jun 2022, by John Wright</p>
                                <h3>From Traditional Banking to Digital Disruption</h3>
                                <p>Lorem ipsum dolor sit amet consectetur. Ultrices sit dictum hendrerit ultrices</p>
                                <button className="btn-2"><a href="">BIM</a></button>
                                <button className="btn-2"><a href="">Construction</a></button>
                            </div>
                        </div>
                    </div>
                    <div className="newsboxwrapper">
                        <div className="news-box" >
                            <div className="newsimg">
                                <img src={require('../../Assets/Vector (11).png')} alt="" />
                            </div>
                            <div className="newstext">
                                <p className="date">29 Jun 2022, by John Wright</p>
                                <h3>From Traditional Banking to Digital Disruption</h3>
                                <p>Lorem ipsum dolor sit amet consectetur. Ultrices sit dictum hendrerit ultrices</p>
                                <button className="btn-2"><a href="">BIM</a></button>
                                <button className="btn-2"><a href="">Construction</a></button>
                            </div>
                        </div>
                    </div>
                    <div className="newsboxwrapper">
                        <div className="news-box">
                            <div className="newsimg">
                                <img src={require('../../Assets/Vector (12).png')} alt="" />
                            </div>
                            <div className="newstext">
                                <p className="date">29 Jun 2022, by John Wright</p>
                                <h3>From Traditional Banking to Digital Disruption</h3>
                                <p>Lorem ipsum dolor sit amet consectetur. Ultrices sit dictum hendrerit ultrices</p>
                                <button className="btn-2"><a href="">BIM</a></button>
                                <button className="btn-2"><a href="">Construction</a></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="container">
                <div className="row">
                    <div className='col-12 col-lg-12 slider hide-on-mobile'>                                    
                        <div className='main-slider'>
                            {TeamData ? 
                                <>
                                    {TeamData.map((obj,index)=>{
                                        if(obj.id===slideIndex){
                                            return(
                                                <>
                                                    <div className='teamslider' key={index}>
                                                        <div className='slide-inner '>
                                                            <div className='img-container'>
                                                                <img src={obj.img} alt={obj.name+' '+obj.title + ' at techqilla'}/>
                                                            </div>    
                                                            <div className="social d-flex gap-3" style={{position: 'absolute',bottom: '22%',right: '17%'}}>
                                                                <a href="#">
                                                                    <svg width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <rect width="27" height="24.9648" rx="5" fill="#157438"/>
                                                                    <path d="M10 6.01001H6L16.5 19.8794H20.5L10 6.01001Z" stroke="white"/>
                                                                    <path d="M20.5 5.54773H19L5 20.3417H6.5L20.5 5.54773Z" fill="white"/>
                                                                    </svg>
                                                                </a>

                                                                <a href="#">
                                                                    <svg width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <rect width="27" height="24.9648" rx="4" fill="#157438"/>
                                                                    <path d="M9.33333 5.47157C9.33308 5.94158 9.1309 6.39225 8.77128 6.72444C8.41165 7.05662 7.92404 7.24311 7.41571 7.24288C6.90738 7.24264 6.41997 7.0557 6.0607 6.72318C5.70144 6.39067 5.49975 5.93981 5.5 5.46979C5.50025 4.99978 5.70243 4.54911 6.06206 4.21692C6.42168 3.88474 6.90929 3.69825 7.41763 3.69849C7.92596 3.69872 8.41337 3.88566 8.77263 4.21818C9.1319 4.55069 9.33359 5.00155 9.33333 5.47157ZM9.39083 8.55518H5.5575V19.6491H9.39083V8.55518ZM15.4475 8.55518H11.6333V19.6491H15.4092V13.8275C15.4092 10.5843 19.9804 10.2831 19.9804 13.8275V19.6491H23.7658V12.6224C23.7658 7.15515 17 7.35895 15.4092 10.0438L15.4475 8.55518Z" fill="white"/>
                                                                    </svg>
                                                                </a>

                                                            </div>                                                            
                                                            <div className='info'>
                                                                <h3>{obj.name}</h3>
                                                                <h4>{obj.title}</h4>
                                                            </div>                                                                
                                                        </div>
                                                        <div className='navigation-team d-flex'>
                                                            <div className='prevbtnteam' onClick={PrevBtn}>
                                                                <svg width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <   path d="M0.292893 7.29289C-0.0976314 7.68342 -0.0976315 8.31658 0.292892 8.7071L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34314C8.46159 1.95262 8.46159 1.31946 8.07107 0.928931C7.68054 0.538406 7.04738 0.538406 6.65686 0.92893L0.292893 7.29289ZM26 7L1 7L1 9L26 9L26 7Z" fill="white"/>
                                                                </svg>
                                                            </div>
                                                            <div className='nextbtnteam' onClick={NextBtn}>
                                                                <svg width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M25.7071 8.70711C26.0976 8.31658 26.0976 7.68342 25.7071 7.2929L19.3431 0.928934C18.9526 0.538409 18.3195 0.538409 17.9289 0.928934C17.5384 1.31946 17.5384 1.95262 17.9289 2.34315L23.5858 8L17.9289 13.6569C17.5384 14.0474 17.5384 14.6805 17.9289 15.0711C18.3195 15.4616 18.9526 15.4616 19.3431 15.0711L25.7071 8.70711ZM-8.74228e-08 9L25 9L25 7L8.74228e-08 7L-8.74228e-08 9Z" fill="white"/>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div className='slider-prev'>
                                                            {TeamData ? 
                                                                <>
                                                                    {TeamData.map((obj,index)=>{
                                                                        if(slideIndex===1){
                                                                            if(obj.id===TeamData.length){
                                                                                return(
                                                                                    <>
                                                                                        <div className='prev-slide-content' key={index}>
                                                                                            <img src={obj.img} alt=""/>    
                                                                                            <div className='info'>
                                                                                                <h3>{obj.name}</h3>
                                                                                                <h4>{obj.title}</h4>
                                                                                            </div>                                                                                                    
                                                                                        </div>
                                                                                    </>
                                                                                ) 
                                                                            } 
                                                                        } 
                                                                        else{
                                                                            if(obj.id===slideIndex-1){
                                                                                return(
                                                                                    <>
                                                                                        <div className='prev-slide-content' key={index}>
                                                                                            <img src={obj.img} alt=""/> 
                                                                                            <div className='info'>
                                                                                                <h3>{obj.name}</h3>
                                                                                                <h4>{obj.title}</h4>
                                                                                            </div>                                                                                                         
                                                                                        </div>
                                                                                    </>
                                                                                ) 
                                                                            }  
                                                                        }
                                                                                                                                                    
                                                                    })}
                                                                    
                                                                    
                                                                </>
                                                                :
                                                                <>Nothing Found</>
                                                            }  
                                                        </div>

                                                        
                                                        <div className='about-team'>
                                                            <p className="team-info">{obj.about}</p>   
                                                            
                                                            <div className='slider-list'>                                
                                                                <div className='slider-list-slide'>
                                                                    {TeamData ? 
                                                                        <>
                                                                            {TeamData.map((obj,index)=>{
                                                                                if(obj.id===PreviewSlide1){
                                                                                    return(
                                                                                        <>
                                                                                            <div className='sub-slide first' key={index}>
                                                                                                <img src={obj.img} alt=""/>
                                                                                                <div className='info'>
                                                                                                    <h3>{obj.name}</h3>
                                                                                                    <h4>{obj.title}</h4>
                                                                                                </div> 
                                                                                            </div>
                                                                                        </>
                                                                                    ) 
                                                                                }
                                                                            })}                                                                            
                                                                        </>
                                                                        :
                                                                        <>Nothing Found</>
                                                                    }  
                                                                </div>
                                                                <div className='slider-list-slide'>
                                                                    {TeamData ? 
                                                                        <>
                                                                            {TeamData.map((obj,index)=>{
                                                                                if(obj.id===PreviewSlide2){
                                                                                    return(
                                                                                        <>
                                                                                            <div className='sub-slide' key={index}>
                                                                                                <img src={obj.img} alt=""/>
                                                                                            </div>
                                                                                        </>
                                                                                    ) 
                                                                                }
                                                                            })}                                                                            
                                                                        </>
                                                                        :
                                                                        <>Nothing Found</>
                                                                    }  
                                                                </div>
                                                                <div className='slider-list-slide'>
                                                                    {TeamData ? 
                                                                        <>
                                                                            {TeamData.map((obj,index)=>{
                                                                                if(obj.id===PreviewSlide3){
                                                                                    return(
                                                                                        <>
                                                                                        <div className='sub-slide' key={index}>
                                                                                            <img src={obj.img} alt=""/>
                                                                                            
                                                                                        </div>
                                                                                    </>
                                                                                    ) 
                                                                                }
                                                                            })}
                                                                            
                                                                        </>
                                                                        :
                                                                        <>Nothing Found</>
                                                                    }  
                                                                </div> 
                                                            </div>                                                                                                        
                                                        </div>
                                                    </div>
                                                </>
                                            ) 
                                        }
                                    })}                                    
                                </>
                                :
                                <>Nothing Found</>
                            }
                        </div>                    
                    </div>


                    <div className='col-lg-12 slider hide-on-desktop'>
                        <div className='main-slider'>
                        <OwlCarousel className='owl-theme' {...option} items={4} loop margin={15} autoplay={true} dots={false} autoplaySpeed={1000} autoplayTimeout={3000}>
                            {TeamData ? 
                                <>
                                    {TeamData.map((obj,index)=>{
                                        return(
                                            <>
                                                <div className='teamslider' key={obj.id} >
                                                    <div className='slide-inner' style={{width:'95%'}}>
                                                        <img src={obj.img} alt="" className="imgteam"/>
                                                        <div className="d-flex gap-3" style={{position: 'absolute',bottom: '24%',left: '1%'}}>
                                                            <a href="#">
                                                                <svg width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <rect width="27" height="24.9648" rx="5" fill="#157438"/>
                                                                <path d="M10 6.01001H6L16.5 19.8794H20.5L10 6.01001Z" stroke="white"/>
                                                                <path d="M20.5 5.54773H19L5 20.3417H6.5L20.5 5.54773Z" fill="white"/>
                                                                </svg>
                                                            </a>

                                                            <a href="#">
                                                                <svg width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <rect width="27" height="24.9648" rx="4" fill="#157438"/>
                                                                <path d="M9.33333 5.47157C9.33308 5.94158 9.1309 6.39225 8.77128 6.72444C8.41165 7.05662 7.92404 7.24311 7.41571 7.24288C6.90738 7.24264 6.41997 7.0557 6.0607 6.72318C5.70144 6.39067 5.49975 5.93981 5.5 5.46979C5.50025 4.99978 5.70243 4.54911 6.06206 4.21692C6.42168 3.88474 6.90929 3.69825 7.41763 3.69849C7.92596 3.69872 8.41337 3.88566 8.77263 4.21818C9.1319 4.55069 9.33359 5.00155 9.33333 5.47157ZM9.39083 8.55518H5.5575V19.6491H9.39083V8.55518ZM15.4475 8.55518H11.6333V19.6491H15.4092V13.8275C15.4092 10.5843 19.9804 10.2831 19.9804 13.8275V19.6491H23.7658V12.6224C23.7658 7.15515 17 7.35895 15.4092 10.0438L15.4475 8.55518Z" fill="white"/>
                                                                </svg>
                                                            </a>

                                                        </div> 
                                                        <div className='info'>
                                                            <h3>{obj.name}</h3>
                                                            <h4>{obj.title}</h4>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className='about-team'>
                                                        <p>{obj.about}</p>   
                                                        <a href="/team">Read more</a>                                               
                                                    </div>
                                                </div>
                                            </>
                                        )                                             
                                    })}                                    
                                </>
                                :
                                <>Nothing Found</>
                            }
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewsandInsight;