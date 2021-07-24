import React, {useEffect, useState} from "react";
import "../design.css"
import BackCall from "../../BackCall/BackCall";
import AccessWithBack from "../../../service/AccessWithBack";
import Carousels from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {useDispatch} from "react-redux";
import {setloading} from "../../../store/actions/laod_action";

const DesignById = (props) =>{
    const apiImage = "http://176.126.167.43:8008"
    const id = parseInt(props.match.params.id)
    const [object, setObject] = useState([])
    const dispatch = useDispatch()
    const getDesignById = () => {
        dispatch(setloading(true))
        new AccessWithBack().getData("/api/design/" +id).then(res => {
            dispatch(setloading(false))
            setObject(res)
        })
    }

    useEffect(() => {
        getDesignById()
        window.scrollTo(0,0)
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

     return(
        <>
            <div style={{
                fontFamily: "Montserrat",
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: 64,
                color: "#253b59",
                textAlign: "center",
                marginTop: 50,

            }}>
                {object.title}
            </div>
            {
                object?.images?.map((item, i) => (
                    <div className="page" style={{
                        marginBottom: 30
                    }}>
                        <div className="designTitle">
                            {item.name}
                        </div>

                        <Carousels responsive={responsive}
                                   autoPlay={true} autoPlaySpeed={3000}
                        >
                            {item?.images.map((img, index) => (
                                <div className="designByIdDiv"
                                     key={index}
                                >
                                    <img
                                        src={apiImage + img}
                                        alt="atlantis kg"
                                    />
                                </div>

                            ))}
                        </Carousels>
                    </div>
                ))
            }
            <BackCall/>
        </>
    )
}

export default DesignById