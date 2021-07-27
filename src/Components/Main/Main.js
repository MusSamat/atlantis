import React from "react";
import {useSpring, animated as a} from "react-spring";
import MainBanner from "../Sliders/ mainBanner/MainBanner";
import AboutToMain from "../About/AboutToMain";
import Partners from "../Partners/Partners";
import BackCall from "../BackCall/BackCall";
import ArchitectureSection from "../Sections/ArchitectureSection";
import BuildingSection from "../Sections/BuildingSection";
import DesignSection from "../Sections/DesignSection";

const Main = () =>{

    const contentProps =  useSpring({
        from: {
            marginTop: '-550px'
        },
        to: {
            marginTop: '0'
        }
    })
    return (
        <>

            {/*<SlideImages/>*/}
            {/*<Carousel/>*/}
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