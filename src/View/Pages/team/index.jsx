import React from "react";
import './style.scss';
import TeamData from "../../../Component/Team/TeamData";

const Team = () =>{
    
    return(
        <>
        {/* <Banner title="Earn Mailbox Money" bg={image.investorpagebg}/> */}
        <section className="whatwedo d2" >      
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-12 d-flex align-items-center">
                        <h2>Meet our <br/>team members</h2>
                        <img src={require('../../../Assets/Vector (1).png')} style={{opacity:'0.3'}}data-aos="fade-right" data-aos-delay="200" alt="" id="whitevector" />
                        <img src={require('../../../Assets/Vector (4).png')} style={{width:'150px',right:'5%'}}data-aos="fade" data-aos-delay="200" alt="" id="strokevector" />
                    </div>
                    <div className="col-lg-7 col-12">
                        <p>At Fractile, our success is driven by the exceptional individuals who make up our diverse and talented team. Get to know the faces behind our innovative solutions and collaborative approach. Meet the experts dedicated to exceeding your expectations and delivering outstanding results.</p>
                    </div>
                </div>
            </div>      
        </section>
        
        <section className="team-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-12 ">
                        <div className="title" data-aos="fade-up" style={{textAlign:'left', paddingBottom: '0px'}}>                            
                            <h2>Our Team</h2>                         
                            <div className="bottomline">
                                <div className="blink"></div>
                            </div>
                        </div>
                    </div>
                </div>
                {TeamData.map((obj)=>{                  
                    console.log(obj.id%2===0)
                    return(
                        <>  
                        {
                            obj.id % 2 === 0   ?
                            <div className="row team-member">                                
                                <div className="col-lg-8 col-12 c-order-2 d-flex align-items-center">  
                                    <div>
                                        <div className="d-flex" style={{gap:'80px'}}>
                                            <div>
                                                <h5>{obj.name}</h5>
                                                <h6>{obj.title}</h6>
                                            </div>
                                            <div className="d-flex" style={{gap:'20px'}}>
                                                <svg width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect width="27" height="24.9648" rx="5" fill="#157438"/>
                                                    <path d="M10 6.01001H6L16.5 19.8794H20.5L10 6.01001Z" stroke="white"/>
                                                    <path d="M20.5 5.54773H19L5 20.3417H6.5L20.5 5.54773Z" fill="white"/>
                                                </svg>
                                                <svg width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect width="27" height="24.9648" rx="4" fill="#157438"/>
                                                    <path d="M9.33333 5.47157C9.33308 5.94158 9.1309 6.39225 8.77128 6.72444C8.41165 7.05662 7.92404 7.24311 7.41571 7.24288C6.90738 7.24264 6.41997 7.0557 6.0607 6.72318C5.70144 6.39067 5.49975 5.93981 5.5 5.46979C5.50025 4.99978 5.70243 4.54911 6.06206 4.21692C6.42168 3.88474 6.90929 3.69825 7.41763 3.69849C7.92596 3.69872 8.41337 3.88566 8.77263 4.21818C9.1319 4.55069 9.33359 5.00155 9.33333 5.47157ZM9.39083 8.55518H5.5575V19.6491H9.39083V8.55518ZM15.4475 8.55518H11.6333V19.6491H15.4092V13.8275C15.4092 10.5843 19.9804 10.2831 19.9804 13.8275V19.6491H23.7658V12.6224C23.7658 7.15515 17 7.35895 15.4092 10.0438L15.4475 8.55518Z" fill="white"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <p>{obj.about}</p>
                                    </div>    
                                </div>
                                <div className='col-lg-4 c-order-1 col-12' >
                                    <div className="teamwrapper">
                                        <img src={obj.img} alt="" />
                                    </div>
                                </div>
                            </div>
                            :
                            <div className="row team-member">
                                <div className='col-lg-4 col-12' >
                                    <div className="teamwrapper">
                                        <img src={obj.img} alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-8 col-12 d-flex align-items-center">  
                                    <div>                          
                                        <div className="d-flex" style={{gap:'80px'}}>
                                            <div>
                                                <h5>{obj.name}</h5>
                                                <h6>{obj.title}</h6>
                                            </div>
                                            <div className="d-flex" style={{gap:'20px'}}>
                                                <svg width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect width="27" height="24.9648" rx="5" fill="#157438"/>
                                                    <path d="M10 6.01001H6L16.5 19.8794H20.5L10 6.01001Z" stroke="white"/>
                                                    <path d="M20.5 5.54773H19L5 20.3417H6.5L20.5 5.54773Z" fill="white"/>
                                                </svg>
                                                <svg width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect width="27" height="24.9648" rx="4" fill="#157438"/>
                                                    <path d="M9.33333 5.47157C9.33308 5.94158 9.1309 6.39225 8.77128 6.72444C8.41165 7.05662 7.92404 7.24311 7.41571 7.24288C6.90738 7.24264 6.41997 7.0557 6.0607 6.72318C5.70144 6.39067 5.49975 5.93981 5.5 5.46979C5.50025 4.99978 5.70243 4.54911 6.06206 4.21692C6.42168 3.88474 6.90929 3.69825 7.41763 3.69849C7.92596 3.69872 8.41337 3.88566 8.77263 4.21818C9.1319 4.55069 9.33359 5.00155 9.33333 5.47157ZM9.39083 8.55518H5.5575V19.6491H9.39083V8.55518ZM15.4475 8.55518H11.6333V19.6491H15.4092V13.8275C15.4092 10.5843 19.9804 10.2831 19.9804 13.8275V19.6491H23.7658V12.6224C23.7658 7.15515 17 7.35895 15.4092 10.0438L15.4475 8.55518Z" fill="white"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <p>{obj.about}</p>
                                    </div>    
                                </div>                             
                            </div>                                
                        }                                           
                        </>
                    )                        
                })}                    
            </div>
        </section>
        </>
    )
}

export default Team;