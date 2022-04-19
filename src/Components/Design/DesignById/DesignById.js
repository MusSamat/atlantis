import React, {useEffect, useState} from "react";
import "./../../vr_image/_vr_image.css"
import "../design.css"
import BackCall from "../../BackCall/BackCall";
import AccessWithBack from "../../../service/AccessWithBack";
import {useDispatch, useSelector} from "react-redux";
import {setloading} from "../../../store/actions/laod_action";
import {setVrObject} from "../../../store/actions/vrObject";
import Lightbox from "react-image-lightbox";
import {NavLink} from "react-router-dom";





const DesignById = (props) => {

    const id = parseInt(props.match.params.id)
    const [object, setObject] = useState([])
    const [objImages, setObjectImages] = useState([])
    const dispatch = useDispatch()
    const getDesignById = () => {
        dispatch(setloading(true))
        new AccessWithBack().getData("/api/design/" + id).then(res => {
            dispatch(setloading(false))
            setObject(res)
            const a = []
            if (res.images) {
                res.images.map((item, i) => {
                    if (item.images) {
                        item.images.map(image => {
                            a.push({
                                name: item.name,
                                image: image,
                                vr: item.vr
                            })
                        })
                    }
                })
            }
            setObjectImages(a)
        })
    }



    // LightBox image carousel
    const [isOpen, setOpen] = useState(false)
    const [imageIndex, setImageIndex] = useState(0)

    useEffect(() => {
        getDesignById()
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="page">
            <div style={{
                fontFamily: "Montserrat",
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: 64,
                color: "#253b59",
                textAlign: "center",
                marginTop: 50,
                marginBottom: 100
            }}>
                {object.title}
            </div>
            <div className="row">

                {
                    objImages?.map((item, i) => (
                        <>
                            <div className="col-4 designByIdDiv" key={i}>
                                <img
                                    src={item.image}
                                    alt="atlantis kg"
                                    onClick={() => {
                                        // setSliderImages(item.images);
                                        setImageIndex(i);
                                        // setImageTitle(item.name);
                                        setOpen(true);
                                    }}
                                />
                                <div className="objectTitle" style={{opacity: 0.8}}>
                                    <p>
                                        {item.name}
                                    </p>
                                </div>
                            </div>
                            {
                                objImages[i+1]?.name !== item.name ?
                                    item.vr ?
                                        <div className="col-4 designByIdDiv" >
                                            <NavLink to="/vr-image" >
                                                <div className="vrMainDiv" onClick={() => {
                                                    dispatch(setVrObject(item))
                                                }}>
                                                    <img src={item.image} alt="atlantis kg"
                                                         className="vrMainImage"
                                                         style={{margin: "0 auto"}}
                                                    />
                                                    <div className="vr_div">
                                                        <p>VR</p>

                                                    </div>
                                                </div>
                                                {/*<div className="objectTitle" style={{opacity: 0.6}}>*/}
                                                {/*    <p>*/}
                                                {/*        {item.name}*/}
                                                {/*    </p>*/}
                                                {/*</div>*/}
                                            </NavLink>
                                        </div>
                                        : null
                                    :
                                    null
                            }
                        </>
                    ))
                }
            </div>
            <BackCall/>

            <div>
                {isOpen && (
                    <Lightbox
                        mainSrc={objImages[imageIndex].image}
                        nextSrc={objImages[(imageIndex + 1) % objImages.length].image}
                        prevSrc={objImages[(imageIndex + objImages.length - 1) % objImages.length].image}
                        onCloseRequest={() => setOpen(false)}
                        onMovePrevRequest={() =>
                            setImageIndex((imageIndex + objImages.length - 1) % objImages.length)
                        }
                        onMoveNextRequest={() =>
                            setImageIndex((imageIndex + 1) % objImages.length)
                        }
                        imageTitle={objImages[imageIndex].name}
                        imagePadding={50}
                    />
                )}
            </div>
        </div>
    )
}

export default DesignById