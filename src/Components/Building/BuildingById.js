import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import BackCall from "../BackCall/BackCall";
import {setloading} from "../../store/actions/laod_action";
import AccessWithBack from "../../service/AccessWithBack";
import "./building.css"
import Gallery from "../Gallery/Gallery";


const BuildingById = (props) => {
    const apiImage = new AccessWithBack()._apiBase
    const id = parseInt(props.match.params.id)
    const [object, setObject] = useState([])
    const dispatch = useDispatch()
    const getArchitectureById = () => {
        dispatch(setloading(true))
        new AccessWithBack().getData("/api/building/" + id).then(res => {
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
                    <div className="col-12"
                         style={{
                             marginBottom: 130
                         }}>
                        {
                            object?.images?.filter((img, i) => i === 0 ? img : null).map((img, i) => (
                                <img src={apiImage + img} alt="atlantis kg" key={i}
                                     style={{margin: "0 auto"}}
                                />
                            ))
                        }
                    </div>

                    <div className="buildingDivs">
                        <p>
                            {object.short_description}
                        </p>
                    </div>

                    {
                        object?.images?.filter((img, i) => i < 3 ? img : null).map((img, i) => (
                            <div className=" buildingDivs ">
                                <img src={apiImage + img} alt="atlantis kg" key={i}
                                     style={{margin: "0 auto"}}
                                />
                            </div>

                        ))
                    }


                </div>
                <div>
                    <div className="advantageTitle">{object.advantage}</div>
                    <div className="row" style={{
                        marginTop: 60
                    }}>
                        {
                            object?.icons?.map((item, i) => (
                                <div className="col-lg-4 col-md-2 col-sm-12" style={{
                                    padding: 15
                                }}>
                                    <div className="iconsImage">
                                        <img src={apiImage + item.images} alt="atlantis kg" key={i}
                                             style={{margin: "0 auto"}}
                                        />
                                    </div>
                                    <div className="iconTitle">
                                        {item.name}
                                    </div>

                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>


            <div style={{
                marginTop: 120
            }}>
                <Gallery/>
                <BackCall/>
            </div>


        </>
    )
}

export default BuildingById