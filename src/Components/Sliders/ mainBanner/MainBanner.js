import React, {useEffect, useState} from "react";
import "./mainBanner.css";
import {useDispatch} from "react-redux";
import {setloading} from "../../../store/actions/laod_action";
import AccessWithBack from "../../../service/AccessWithBack";
import {NavLink} from "react-router-dom";


export default function MainBanner() {
    const apiImage = new AccessWithBack()._apiBase
    const dispatch = useDispatch()
    const [object, setObject] = useState([])
    const [selectedImg, setSelectedImg] = useState();
    const [images, setImages] = useState([])
    const [slug, setSlug] = useState()
    const [title, setTitle] = useState()

    const getObject = () => {
        dispatch(setloading(true))
        new AccessWithBack().getData("/api/main").then(res => {
            dispatch(setloading(false))
            setObject(res)
            if(res.category === 1){
                setSlug("architectureById")
            }else if(res.category === 2 ){
                setSlug("buildingById")
            }else{
                setSlug("designById")
            }
            setImages(res.images)
            setTitle(res.title)
        })
    }



    useEffect(() => {
        getObject()

    }, [])

    return (
        <div>
            <div className="page" style={{
                marginTop: 100
            }}>
                <div className="row" >
                    <div className="mainBanner">
                        {
                            images?.filter((img, i) => i < 1 ? img : null).map((image, i) => (
                                <NavLink to={{
                                    pathname: slug + "/" + object.id
                                }}>
                                    <img src={selectedImg ? apiImage + selectedImg : apiImage + image} alt="atlantis kg"
                                         title="Посмотреть"
                                         key={i}/>
                                </NavLink>
                            ))
                        }
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
                                    {images?.filter((img, i) => i < 3 ? img : null).map((img, index) => (
                                        <img
                                            style={{ border: selectedImg === img ? "1px solid purple" : "" }}
                                            key={index}
                                            src={apiImage + img}
                                            alt="atlantis kg"
                                            onClick={() => setSelectedImg(img)}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="col-6" style={{
                                padding: 0
                            }}>
                                <div className="main_rightImageFirst">
                                    {
                                        images?.filter((img, i) => i === 1 ? img : null).map((img, i) => (
                                            <img src={apiImage + img} alt="atlantis"/>
                                        ))
                                    }
                                </div>
                                <div className="main_rightImageSecond">
                                    {
                                        images?.filter((img, i) => i === 2 ? img : null).map((img, i) => (
                                            <img src={apiImage + img} alt="atlantis"/>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}