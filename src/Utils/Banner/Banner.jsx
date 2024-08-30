import React from "react";
import './Banner.scss';

const Banner = (props) =>{
    return(
        <>
        <section className="banner" style={{background:`linear-gradient(#00000045,#00000045),url(${props.bg})`}}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="title t1">
                            <hr />
                            <h2>{props.title}</h2>
                        </div>
                    </div>
                </div>
            </div>    
        </section>
        </>
    )
}

export default Banner;