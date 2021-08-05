import React from "react";
import MainBanner from "../Sliders/ mainBanner/MainBanner";
import AboutToMain from "../About/AboutToMain";
import Partners from "../Partners/Partners";
import BackCall from "../BackCall/BackCall";
import ArchitectureSection from "../Sections/ArchitectureSection";
import BuildingSection from "../Sections/BuildingSection";
import DesignSection from "../Sections/DesignSection";

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