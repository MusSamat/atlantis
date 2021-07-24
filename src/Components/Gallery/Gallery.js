import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import "./gallery.css"
import Carousels from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {useDispatch} from "react-redux";
import {setloading} from "../../store/actions/laod_action";
import AccessWithBack from "../../service/AccessWithBack";


const Gallery = () => {

    const apiImage = "http://176.126.167.43:8008"
    const dispatch = useDispatch()
    const [object, setObject] = useState([])

    const getObject = () => {
        dispatch(setloading(true))
        new AccessWithBack().getData("/api/building").then(res => {
            dispatch(setloading(false))
            setObject(res)
        })
    }

    useEffect(() => {
        getObject()

    }, [])

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: {max: 4000, min: 3000},
            items: 4
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 4
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1
        }
    };
    return (
        <div className="page">
            <div className="galleryContain">
                <div className="galleryTitle">
                    Галерея
                </div>
                <Carousels responsive={responsive}
                           autoPlay={true} autoPlaySpeed={2000}
                           infinite={true}
                >
                    {
                        object?.map((item, i) => (

                            // <NavLink to={{
                            //     pathname: "/buildingById/" + item.id
                            // }}>
                                <div className="gallery">
                                    <img src={apiImage + item?.images[0]} alt="atlantis kg"/>
                                </div>
                            // </NavLink>
                        ))
                    }
                </Carousels>
            </div>
        </div>
    )
}
export default Gallery



