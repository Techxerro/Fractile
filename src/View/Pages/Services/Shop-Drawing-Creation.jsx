import React from "react";
import ServicesLayout from "../../../Utils/Serviceslayout/serviceslayout";
import { image } from "../../../Assets";

const ShopDrawingCreation = () =>{
    return(
        <ServicesLayout mainservice="Project Enginerring Services" serviceName="Shop Drawing Creation" 
        maincontent="Our expert shop drawing creation services from the existing 2D drawings/3D models enable the project stakeholder to focus on project delivery, while the latest and accurate drawings are produced by our team."
        content="Shop drawing creation involves the production of detailed drawings, diagrams, and schedules that are used by contractors, subcontractors, and suppliers to fabricate and install components of a construction project. At Fractile, our expert shop drawing creation services streamline the process of translating existing 2D drawings or 3D models into accurate and up-to-date shop drawings. By leveraging the latest technologies and industry best practices, our team ensures that project stakeholders can focus on project delivery, confident that they have the most current and accurate drawings available." 
        banner={image.shpdrawing} banner2={image.shpdrawing2}/>
    )
}

export default ShopDrawingCreation;