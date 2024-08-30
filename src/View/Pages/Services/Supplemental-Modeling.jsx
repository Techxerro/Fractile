import React from "react";
import ServicesLayout from "../../../Utils/Serviceslayout/serviceslayout";
import { image } from "../../../Assets";

const SupplementalModeling = () =>{
    return(
        <ServicesLayout mainservice="Modeling"  serviceName="Supplemental Modeling" 
        maincontent="Multi-discipline coordination of complex, often unidentified, issues in a 3D environment can save your project potential cost and time overruns. While this has become a commonly recognized benefit to the industry, resource constraints mean the opportunity is often underserved." 
        content="Fractile's supplemental modeling services assist designers and builders in preparing fully detailed and coordinated models for their projects. By adding elements to existing models, we ensure that project designs are comprehensive and accurately represent all necessary components, minimizing errors and enhancing project efficiency." banner={image.supplimental} banner2={image.supplimental2}/>
    )
}

export default SupplementalModeling;