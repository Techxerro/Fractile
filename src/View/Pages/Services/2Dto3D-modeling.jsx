import React from "react";
import ServicesLayout from "../../../Utils/Serviceslayout/serviceslayout";
import { image } from "../../../Assets";

const TwoDtothreeDModelingService = () =>{
    return(
        <ServicesLayout mainservice="Modeling"  serviceName="2D(CAD/PDF) to 3D Modeling" 
        maincontent="Multi-discipline coordination of complex, often unidentified, issues in a 3D environment can save your project potential cost and time overruns. While this has become a commonly recognized benefit to the industry, resource constraints mean the opportunity is often underserved." 
        content="Our specialized 2D drawing conversion to 3D modeling services enables all project stakeholders to collaborate in the most updated and digitized work environment. By transforming flat drawings into interactive 3D models, Fractile enhances work productivity and facilitates efficient communication and decision-making throughout the project lifecycle." 
        banner={image.twodto3d} banner2={image.twodto3d2}/>
    )
}   

export default TwoDtothreeDModelingService;