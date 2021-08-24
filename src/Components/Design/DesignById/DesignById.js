import React, {useEffect, useState} from "react";
import "../design.css"
import BackCall from "../../BackCall/BackCall";
import AccessWithBack from "../../../service/AccessWithBack";
import Carousels from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {useDispatch} from "react-redux";
import {setloading} from "../../../store/actions/laod_action";

const DesignById = (props) => {
    const apiImage = new AccessWithBack()._apiBase
    const id = parseInt(props.match.params.id)
    const [object, setObject] = useState([])
    const dispatch = useDispatch()
    const getDesignById = () => {
        dispatch(setloading(true))
        new AccessWithBack().getData("/api/design/" + id).then(res => {
            dispatch(setloading(false))
            setObject(res)
        })
    }

    useEffect(() => {
        getDesignById()
        window.scrollTo(0, 0)
    }, [])

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: {max: 4000, min: 3000},
            items: 3
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 3
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
                    object?.images?.map((item, i) => (
                        <>
                            {item?.images.map((img, index) => (
                                <div className="col-4 designByIdDiv"
                                     key={index}
                                >

                                    <img
                                        src={apiImage + img}
                                        alt="atlantis kg"
                                    />
                                    {
                                        index === 0 ?
                                            <div className="objectTitle">
                                                <p>
                                                    {item.name}
                                                </p>
                                            </div>:
                                            null
                                    }
                                </div>

                            ))}
                        </>

                    ))
                }
            </div>
            <BackCall/>
        </div>
    )
}

export default DesignById