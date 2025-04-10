import React from "react";
import './style.scss';
import HeroSection from "../../../Component/HeroSection/HeroSection";
import AboutSection from "../../../Component/AboutSection/AboutSection";
import Whatwedo from "../../../Component/WhatWeDo/WhatWeDo";
import OurApproach from "../../../Component/OurApproach/OurApproach";
import NewsandInsight from "../../../Component/Team";
import WhyChooseus from "../../../Component/WhyChooseus/WhyChooseus";
import DropdownWhatwedo from "../../Layout/Header/DropdownWhatwedo";
import Dropdowncompany from "../../Layout/Header/Dropdowncompany";

const Home = () => {
    return (
        <>

            <HeroSection />
            {/* <Dropdowncompany/> */}
            {/* <DropdownWhatwedo/> */}
            <AboutSection />
            <Whatwedo />
            <OurApproach />
            <NewsandInsight />
            <WhyChooseus />
        </>
    )
}

export default Home;