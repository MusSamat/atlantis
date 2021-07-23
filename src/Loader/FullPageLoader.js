import React from "react";
import "./Loader.css"

export const FullPageLoader = () => {
    return(
        <div className="loader-container">
            <div className="div loader">
                <img src="/images/loader.svg" alt="loader"/>
            </div>
        </div>
    )
}