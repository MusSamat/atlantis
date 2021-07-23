import React from "react";
import "./_category.css"

const CategorysBanner = (props) => {
    const image1 = props.image1
    const image2 = props.image2
    const image3 = props.image3
    return (
            <div className="banner">
                <div className="image1">
                    <img src={image1} alt="atlantis kg"/>
                </div>
                <div className="image2">
                    <img src={image2} alt="atlantis kg"/>
                </div>
                <div className="image3">
                    <img src={image3} alt="atlantis kg"/>
                </div>
            </div>
    )
}

export default CategorysBanner