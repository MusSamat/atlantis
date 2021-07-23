import React from "react";
import "./_category.css"

const CategoryDesc = (props) => {
    const descTitle = props.title
    const description = props.description
    return (
        <>
            <div className="page">
                <div className="descTitle">
                    {descTitle}
                </div>
                <div className="description">
                    {description}
                </div>
            </div>
        </>
    )
}
export default CategoryDesc