import React, {useEffect, useState} from "react";
import "./architecture.css"
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import AccessWithBack from "../../service/AccessWithBack";
import BackCall from "../BackCall/BackCall";
import {useDispatch} from "react-redux";
import {setloading} from "../../store/actions/laod_action";
import ObjectInfo from "../ObjectInfo";
import {toast} from "react-toastify";
import { setVrObject} from "../../store/actions/vrObject";
import {NavLink} from "react-router-dom";

const ArchitectureById = (props) => {

    const id = parseInt(props.match.params.id)
    const [object, setObject] = useState([])
    const dispatch = useDispatch()
    const getArchitectureById = () => {
        dispatch(setloading(true))
        new AccessWithBack().getData("/api/architecture/" + id).then(res => {
            dispatch(setloading(false))
            setObject(res)
        })
    }

    function copy() {
        const el = document.createElement('input');
        el.value = window.location.href;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        toast.success("Ссылка скопировано")
    }

    const sliderImages = object?.images
    const [isOpen, setOpen] = useState(false)
    const [imageIndex, setImageIndex] = useState(0)

    useEffect(() => {
        getArchitectureById()
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className="page">
                <div className="ArchitectureTitle">
                    {object?.title}
                </div>

                <div className="description">
                    {object?.description}</div>
                <div className="copyDiv">
                    <ObjectInfo
                        location={object?.address}
                        architect={object?.architect}
                        area={object?.square}
                        year={object?.year}
                    />
                    <div className="copyButton">
                        <button className="more" onClick={copy} style={{width: "4rem"}} title="Копировать ссылку"><i
                            className='fa fa-copy fa' style={{color: "white"}}></i></button>
                    </div>
                </div>
                <div className="row" style={{
                    marginTop: 24
                }}>
                    <div className="col-12">
                        {
                            object?.images?.filter((img, i) => i === 0 ? img : null).map((img, i) => (
                                <img src={img} alt="atlantis kg" key={i}
                                     style={{margin: "0 auto"}}
                                />
                            ))
                        }
                    </div>

                    {
                        object?.images?.map((img, i) => (
                            <div className="col-4 archImages" key={i}>
                                <img src={img} alt="atlantis kg"
                                     style={{margin: "0 auto"}}
                                     onClick={() => {setImageIndex(i); setOpen(true)}}
                                />
                            </div>

                        ))
                    }
                    {
                        object?.vr ?
                            <>
                                <div className="col-4 archImages">
                                    <NavLink to="/vr-image">
                                        <div className="vrMainDiv" onClick={() => {
                                            dispatch(setVrObject(object))
                                        }}>
                                            <img src={object.image1} alt="atlantis kg"
                                                 className="vrMainImage"
                                                 style={{margin: "0 auto"}}
                                            />
                                            <div className="vr_div">
                                                <p>VR</p>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                            </>
                            : null
                    }

                    <div>

                    </div>
                </div>
            </div>

            <div>
                {isOpen && (
                    <Lightbox
                        mainSrc={sliderImages[imageIndex]}
                        nextSrc={sliderImages[(imageIndex+ 1) % sliderImages.length]}
                        prevSrc={sliderImages[(imageIndex + sliderImages.length - 1) % sliderImages.length]}
                        onCloseRequest={() => setOpen(false)}
                        onMovePrevRequest={() =>
                            setImageIndex((imageIndex + sliderImages.length - 1) % sliderImages.length)
                        }
                        onMoveNextRequest={() =>
                            setImageIndex((imageIndex + 1) % sliderImages.length)
                        }
                    />
                )}
            </div>

            <div style={{
                marginTop: 215
            }}>
                <BackCall/>
            </div>
        </>
    )
}

export default ArchitectureById