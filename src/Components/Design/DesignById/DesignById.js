import React, {useEffect, useState} from "react";
import "./../../vr_image/_vr_image.css"
import "../design.css"
import BackCall from "../../BackCall/BackCall";
import AccessWithBack from "../../../service/AccessWithBack";
import {useDispatch, useSelector} from "react-redux";
import {setloading} from "../../../store/actions/laod_action";
import {NavLink} from "react-router-dom";
import {setVrObject} from "../../../store/actions/vrObject";


const DesignById = (props) => {

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
                                        src={img}
                                        alt="atlantis kg"
                                    />
                                    {
                                        index === 0 ?
                                            <div className="objectTitle">
                                                <p>
                                                    {item.name}
                                                </p>
                                            </div> :
                                            null
                                    }
                                </div>

                            ))}

                            {
                                item?.vr ?
                                        <div className="col-4 designByIdDiv" >
                                            <NavLink to="/vr-image" key={i}>
                                            <div className="vrMainDiv" onClick={() => {
                                                // setModalItem(item)
                                                // dispatch(setOpenModal(true));
                                                dispatch(setVrObject(item))
                                            }}>
                                                {
                                                    item.images?.filter((items, i) => i === 0 ? items : null).map(items => (
                                                            <img src={items} alt="atlantis kg"
                                                                 className="vrMainImage"
                                                                 style={{margin: "0 auto"}}
                                                            />
                                                        )
                                                    )

                                                }
                                                <div className="vr_div">
                                                    <p>VR</p>
                                                </div>
                                            </div>       </NavLink>
                                        </div>


                                    : null
                            }
                        </>

                    ))
                }
            </div>
            <BackCall/>
        </div>
    )
}

export default DesignById