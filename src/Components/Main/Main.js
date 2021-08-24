import React from "react";
import AboutToMain from "../About/AboutToMain";
import Partners from "../Partners/Partners";
import BackCall from "../BackCall/BackCall";
import ArchitectureSection from "../Sections/ArchitectureSection";
import BuildingSection from "../Sections/BuildingSection";
import DesignSection from "../Sections/DesignSection";
import MainBanner from "../Sliders/ mainBanner/MainBanner";

const Main = () =>{

    return (
        <>
            <MainBanner/>
            <ArchitectureSection/>
            <BuildingSection/>
            <DesignSection/>
            <AboutToMain/>
            <Partners/>
            <BackCall/>
        </>
    )
}

export default Main