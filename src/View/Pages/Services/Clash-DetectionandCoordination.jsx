import React from "react";
import ServicesLayout from "../../../Utils/Serviceslayout/serviceslayout";
import { image } from "../../../Assets";

const ClashDetection = () =>{
    return(
        <ServicesLayout mainservice="BIM Management"  serviceName="Clash Detection and Coordination"
        maincontent="Multi-discipline coordination of complex, often unidentified, issues in a 3D environment can save your project potential cost and time overruns. While this has become a commonly recognized benefit to the industry, resource constraints mean the opportunity is often underserved."
        content="Fractile offers expert clash detection and coordination services, employing advanced multi-disciplinary techniques and collaborative strategies to identify and prevent costly design and construction rework issues. Our comprehensive approach ensures that potential clashes are addressed proactively, minimizing project delays and cost overruns." banner={image.ClashDetection} banner2={image.ClashDetection2}/>
    )
}

export default ClashDetection;