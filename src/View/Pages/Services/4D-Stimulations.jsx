import React from "react";
import ServicesLayout from "../../../Utils/Serviceslayout/serviceslayout";
import { image } from "../../../Assets";

const FourDStimulation = () =>{
    return(
        <ServicesLayout mainservice="Visualization"  serviceName="4D Simulation" 
        maincontent="Visual construction sequencing services through 4D Simulation helps in analysis of site logistics and project sequencing and mitigates potential constructability issues." 
        content="Fractile simplifies project planning with powerful visualization of phasing and construction sequencing through 4D simulations. By simulating construction programs in a 3-dimensional environment, our simulations facilitate better coordination and streamlined construction processes, ultimately optimizing project timelines and resource utilization. " banner={image.fourdstilulation} banner2={image.fourdstilulation2}/>
    )
}

export default FourDStimulation;