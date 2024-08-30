import React from "react";
import ServicesLayout from "../../../Utils/Serviceslayout/serviceslayout";
import { image } from "../../../Assets";

const ThreeDWalkthrough = () =>{
    return(
        <ServicesLayout mainservice="Visualization"  serviceName="3D Walkthrough/ Flythrough" 
        maincontent="Visualization, being the most powerful medium of VDC/BIM, is leveraged through advanced 2D/3D imaging techniques to provide the end user realistic options to assist in project decision making. "
        content="Through dynamic animation, Fractile offers 3D walkthroughs and flythroughs that enable end-users to take virtual tours of facilities during the design or construction stages. These immersive experiences aid in both marketing efforts and constructability decision-making, providing stakeholders with a comprehensive understanding of project layouts and features." banner={image.threedwalkthrough} banner2={image.threedwalkthrough2}/>
    )
}

export default ThreeDWalkthrough;