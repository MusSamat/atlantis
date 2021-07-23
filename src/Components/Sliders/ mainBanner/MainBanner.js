import React, {useEffect, useState} from "react";
import "./mainBanner.css";
import {useDispatch} from "react-redux";
import {setloading} from "../../../store/actions/laod_action";
import AccessWithBack from "../../../service/AccessWithBack";

export default function MainBanner() {
    const apiImage = "http://176.126.167.43:8008"
    const dispatch = useDispatch()
    const [object, setObject] = useState([])
    const [selectedImg, setSelectedImg] = useState();
    const [images, setImages] = useState([])

    const getObject = () => {
        dispatch(setloading(true))
        new AccessWithBack().getData("/api/main").then(res => {
            dispatch(setloading(false))
            setObject(res)
            setImages(res.images)
        })
    }

    useEffect(() => {
        getObject()

    }, [])

    return (
        <div>
            <div className="container" style={{
                marginTop: 100
            }}>
                <div className="row">
                    <div className="mainBanner "
                    style={{
                        width: "735px !important"
                    }}>
                        {
                           images?.filter((img, i) => i < 1 ? img : null).map((image, i) => (
                                <img src={selectedImg ? apiImage + selectedImg : apiImage + image} alt="atlantis kg"
                                     key={i}/>
                            ))
                        }
                    </div>
                    <div className=" col-lg-3 col-md-12 col-sm-12">
                        <div className="imgContainer">
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
                </div>
            </div>
        </div>
    );
}
