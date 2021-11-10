import React, {useEffect, useState} from "react";
import "./Sliders/ mainBanner/mainBanner.css";
import {NavLink} from "react-router-dom";


const ObjectById = (props) => {

    const object = props.object
    const [selectedImg, setSelectedImg] = useState();
    const [title, setTitle] = useState()
    const [slug, setSlug] = useState()

    const getCategory = () => {
        if (object?.category === 1) {
            setSlug("architectureById")
        } else if (object?.category === 2) {
            setSlug("buildingById")
        } else {
            setSlug("designById")
        }
    }


    useEffect(() => {
        getCategory()
        setTitle(object.title)
    }, [])

    return (
        <div>
            <div className="page" style={{
                marginTop: 24
            }}>
                <div className="row">
                    <div className="mainBanner">
                        <NavLink to={{
                            pathname: slug + "/" + object.id
                        }}>
                            <img src={selectedImg ? selectedImg : object.image1} alt="atlantis kg"
                                 title="Посмотреть"/>
                        </NavLink>
                        <div className="objectTitle">
                            <p>
                                {title}
                            </p>
                        </div>
                    </div>
                    <div className=" col-lg-5 col-md- col-sm-12">
                        <div className="row">
                            <div style={{
                                paddingRight: 20,
                                paddingLeft: 15
                            }}>
                                <div className="imgContainerMain">
                                    <img
                                        style={{border: selectedImg === object.image2 ? "1px solid purple" : ""}}
                                        src={object.image2}
                                        alt="atlantis kg"
                                        onClick={() => setSelectedImg(object.image2)}
                                    /> <img
                                    style={{border: selectedImg === object.image3 ? "1px solid purple" : ""}}
                                    src={object.image3}
                                    alt="atlantis kg"
                                    onClick={() => setSelectedImg(object.image3)}
                                /> <img
                                    style={{border: selectedImg === object.image4 ? "1px solid purple" : ""}}
                                    src={object.image4}
                                    alt="atlantis kg"
                                    onClick={() => setSelectedImg(object.image4)}
                                />
                                </div>
                            </div>
                            <div className="col-6" style={{
                                padding: 0
                            }}>
                                <NavLink to={{
                                    pathname: slug + "/" + object.id
                                }}>
                                    <div className="main_rightImageFirst">
                                        <img src={object.image5} alt="atlantis"/>
                                    </div>
                                </NavLink>
                                <NavLink to={{
                                    pathname: slug + "/" + object.id
                                }}>
                                    <div className="main_rightImageSecond">
                                        <img src={object.image6} alt="atlantis"/>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ObjectById
