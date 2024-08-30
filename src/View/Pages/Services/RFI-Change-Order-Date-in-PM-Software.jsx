import React from "react";
import ServicesLayout from "../../../Utils/Serviceslayout/serviceslayout";
import { image } from "../../../Assets";

const RFIChangeOrderService = () =>{
    return(
        <ServicesLayout mainservice="Project Enginerring Services"  serviceName="RFI Submittal Change " maincontent="
        Document review and data management services are offered to ensure complete and coordinated availability of project documentation without reduction in efficiency of project teams’ delivery." 
        content="At Fractile, we offer RFI (Request for Information), submittal, and change order data management services to help project teams efficiently manage project documentation and communication. Our team ensures that RFIs, submittals, and change orders are accurately logged, tracked, and responded to in a timely manner, using project management software to streamline the process and enhance collaboration among project stakeholders. By centralizing project documentation and data management, we help project teams maintain transparency, accountability, and efficiency throughout the project lifecycle." 
        banner={image.pmsoftware} banner2={image.pmsoftware2}/>
    )
}

export default RFIChangeOrderService;