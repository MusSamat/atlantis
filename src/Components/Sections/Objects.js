import React, {useState} from "react";
import "./categorySection.css"
import SelectedSection from "./SelectedSection";

const Objects = (props) => {
    console.log(props)
    const [selectedImg, setSelectedImg] = useState(props.item1?.images[0]);
    return(
        <>
            <div className="categorySection">
                <SelectedSection/>
                <div className="col-lg-3 col-md-3 col-sm-12">
                    <div className="imgContainerLeftSide" style={{
                        height: 250
                    }}>
                        {props?.map((img, index) => (
                            <>
                                <div style={{
                                    marginBottom: 5,
                                    textAlign: "center",
                                    fontSize: 17,
                                    fontWeight: "bold",
                                    width: "100%",
                                    color: "#5B7BA6"
                                }}>Title of section
                                </div>
                                <img
                                    style={{border: selectedImg === img ? "1px solid #033F7F" : ""}}
                                    key={index}
                                    src={img}
                                    alt="dog"
                                    onClick={() => setSelectedImg(img)}
                                />
                            </>
                        ))}</div>
                </div>
            </div>
        </>
    )
}

export default Objects