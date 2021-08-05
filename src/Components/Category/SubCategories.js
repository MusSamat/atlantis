import React, {useEffect, useState} from "react";
import "./_category.css"
import {NavLink} from "react-router-dom";
import AccessWithBack from "../../service/AccessWithBack";
import {useDispatch} from "react-redux";
import {setloading} from "../../store/actions/laod_action";

const SubCategories = (props) => {
    const apiImage = new AccessWithBack()._apiBase
    const [architecObjects, setArchitecObjects] = useState([])
    const dispatch = useDispatch()
    const getArchitectureObjects = () => {
        dispatch(setloading(true))
        new AccessWithBack().getData("/api/architecture").then(res => {
            dispatch(setloading(false))
            setArchitecObjects(res)
        })
    }

    useEffect(() => {
        getArchitectureObjects()
    }, [])
    return (
        <>
            <div className="page" style={{
                marginTop: 50,
                marginBottom: 50
            }}>
                <div className="row">

                    {
                        architecObjects?.map((item, i) => (
                            <div className="col-lg-4 col-md-6 col-sm-12 subColTop" key={i}>
                                <NavLink to={"/designById"}>
                                    <div className="subTitle">
                                        {item.title}
                                    </div>
                                    <div className="subImage">
                                        <img src={apiImage + item?.images[0]}
                                             style={{
                                                 height: 355
                                             }}
                                        />
                                        <div className="subImage2">
                                            <img src={apiImage + item?.images[1]}/>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        ))
                    }
                </div>
            </div>

        </>
    )
}

export default SubCategories