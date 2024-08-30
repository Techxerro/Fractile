import React from "react";
import ServicesLayout from "../../../Utils/Serviceslayout/serviceslayout";
import { image } from "../../../Assets";

const PointCloudto3DModeling = () =>{
    return(
        <ServicesLayout mainservice="Modeling"  serviceName="Point Cloud to 3D Modeling" maincontent="Scan to BIM services is one of the most effective services being offered to document the accurate as-built conditions by generating point cloud data through laser scanning technologies, and production of up-to-date model and drawings. 
        Fractile’s understanding of project requirements and specifications conveyed through our traditional CAD drafting and PDF to CAD conversion services, in addition to supplemental modeling services within existing models, enable the project stakeholders to complete the projects within schedule." 
        content="Fractile swiftly translates point cloud information into accurate 3D models for comparison and coordination purposes. By leveraging advanced scanning technologies and BIM methodologies, we provide stakeholders with precise representations of existing conditions, facilitating clash detection and coordination efforts." banner={image.poinntcloudto3d} banner2={image.poinntcloudto3d2}/>
    )
}

export default PointCloudto3DModeling;