import React, {useEffect, useState} from "react";
import "./architecture.css"
import AccessWithBack from "../../service/AccessWithBack";
import BackCall from "../BackCall/BackCall";
import {useDispatch} from "react-redux";
import {setloading} from "../../store/actions/laod_action";

const ArchitectureById = (props) => {
    const apiImage = new AccessWithBack()._apiBase
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

    useEffect(() => {
        getArchitectureById()
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className="page">
                <div className="ArchitectureTitle">
                    {object.title}
                </div>

                <div className="description">
                    {object.description}</div>
                <div className="row">
                    <div className="col-12">
                        {
                            object?.images?.filter((img, i) => i === 0 ? img : null).map((img, i) => (
                                <img src={apiImage + img} alt="atlantis kg" key={i}
                                     style={{margin: "0 auto"}}
                                />
                            ))
                        }
                    </div>

                    {
                        object?.images?.map((img, i) => (
                            <div className="col-lg-3 col-md-6 archImages">
                                <img src={apiImage + img} alt="atlantis kg" key={i}
                                     style={{margin: "0 auto"}}
                                />
                            </div>

                        ))
                    }


                    <div>

                    </div>
                </div>
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