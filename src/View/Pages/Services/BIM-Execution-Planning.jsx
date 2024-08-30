import React from "react";
import ServicesLayout from "../../../Utils/Serviceslayout/serviceslayout";
import { image } from "../../../Assets";

const BIMExecuionPlanning = () =>{
    return(
        <ServicesLayout mainservice="BIM Management"  serviceName="BIM Execution Planning" 
        maincontent="The Fractile team brings years of BIM Management experience and provides BIM consulting services, including strategies, planning, and execution at both the enterprise and project levels."
        content="Fractile assists teams in setting up customized best-in-class BIM strategies, methodologies, and processes at both organizational and project levels. By leveraging our expertise in BIM execution planning, we help teams retain a competitive edge in the industry, optimizing workflows and maximizing the benefits of BIM technology throughout the project lifecycle." banner={image.BIMexecution} banner2={image.BIMexecution2}/>
    )
}

export default BIMExecuionPlanning;