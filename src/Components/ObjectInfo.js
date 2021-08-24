import React from "react";
import "./Sections/categorySection.css"

const ObjectInfo = (props) => {

    return(
        <div className="svgImages">
            <div className="svgRow"><div style={{width: 20, paddingLeft: 3, paddingTop: 7}}><img src="/svg/objectInfo/location.svg" alt="atlantis kg"/> </div>Адрес:<span>{props.location}</span></div>
            <div className="svgRow"><div style={{width: 20, paddingLeft: 4,paddingTop: 7}}><img src="/svg/objectInfo/architector.svg" alt="atlantis kg"/></div>Архитекторы:<span>{props.architect}</span></div>
            <div className="svgRow"><div style={{width: 20,paddingTop: 6}}><img src="/svg/objectInfo/area.svg" alt="atlantis kg"/></div>Площадь:<span>{props.area}</span> </div>
            <div className="svgRow"><div style={{width: 20,paddingTop: 6}}><img src="/svg/objectInfo/year.svg" alt="atlantis kg"/> </div>Год:<span>{props.year}</span> </div>
        </div>
    )
}

export default ObjectInfo