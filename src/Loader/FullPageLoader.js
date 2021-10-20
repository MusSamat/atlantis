import React from "react";
import "./Loader.css"
import AnimationWithJson from "./Animation/AnimationWIthJson";

export const FullPageLoader = () => {
    return (
        <div className="loader-container">
            <div className="div loader">
                <AnimationWithJson/>
            </div>
        </div>
    )
}