import React from "react";
import ServicesLayout from "../../../Utils/Serviceslayout/serviceslayout";
import { image } from "../../../Assets";

const TwoDOverlayService = () =>{
    return(
        <ServicesLayout mainservice="Project Enginerring Services"  serviceName="2D Overlay" maincontent="
        2D overlay services play a crucial role in engineering management by providing project teams with information about inconsistencies between different sets of project documents, such as drawings and specifications, across various design disciplines and over time. "
        content="At Fractile, our 2D overlay services involve comparing multiple versions of 2D drawings or documents to identify discrepancies, conflicts, or missing information. By highlighting these inconsistencies, our team helps project teams avoid errors, conflicts, and delays during the construction process, ultimately improving project efficiency and reducing risk."
        banner={image.overlay2d} banner2={image.overlay2d2}
        />
    )
}

export default TwoDOverlayService;