import React, {useEffect, useState} from "react";
import "./categorySection.css"
import AccessWithBack from "../../service/AccessWithBack";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setloading} from "../../store/actions/laod_action";
import {getArchitecture1} from "../../store/actions/architecture1_actions";
import {getArchitecture2} from "../../store/actions/architecture2_actions";
import ObjectInfo from "../ObjectInfo";


const ArchitectureSection = () => {

    const [objects, setObjects] = useState([])
    const dispatch = useDispatch()
    const object = useSelector(state => state.archi1.archi1)
    const object2 = useSelector(state => state.archi2.archi2)
    const [selectedImg, setSelectedImg] = useState();
    const [selectedImg2, setSelectedImg2] = useState();
    const getObjects = () => {
        dispatch(setloading(true))
        new AccessWithBack().getData("/api/main-architecture").then(res => {
            dispatch(setloading(false))
            setObjects(res)
            res.filter((item, i) => i < 1 ? item : null).map((item, i) => {
                dispatch(getArchitecture1(item.id))
            })
            res.filter((item, i) => i === 4 ? item : null).map((item, i) => {
                dispatch(getArchitecture2(item.id))
            })

        })
    }


    useEffect(() => {
        getObjects()
    }, [])

    return (
        <>
            <div className="page">
                <div className='sectionTitle'>
                    <NavLink to={{
                        pathname: "/architecture"
                    }}
                    >
                        Архитектура
                    </NavLink>
                </div>

                <div className="categorySection">
                    <div>
                        <NavLink to={{pathname: "/architectureById/" + object?.id}}>
                            <div className="objectTitle1">
                                {object?.title}
                            </div>
                            <div className="mainImage">

                                {
                                    object?.images?.filter((img, i) => i === 0 ? img : null).map((image, i) => (
                                        <img src={selectedImg ? selectedImg : image}
                                             alt="atlantis kg"
                                             key={i}/>
                                    ))
                                }
                            </div>
                        </NavLink>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            marginRight: 20
                        }}>
                            {object?.images?.filter((img, i) => i < 4).map((img, index) => (
                                <div
                                    style={{
                                        marginTop: 20,
                                        padding: "0 !important"
                                    }}
                                    key={index}>

                                    <div className="selectedImages">
                                        <img
                                            style={{border: selectedImg === img ? "1px solid #033F7F" : ""}}
                                            src={img}
                                            alt="atlantis kg"
                                            onClick={() => setSelectedImg(img)}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="objectInfo">
                            <ObjectInfo
                                location={object?.address}
                                architect={object?.architect}
                                area={object?.square}
                                year={object?.year}
                            />
                            <div className="moreInfo">
                                <NavLink
                                    to={{pathname: "/architectureById/" + object?.id}}><span>Прочитать больше...</span></NavLink>
                                <NavLink to="/architecture">
                                    <button className="more" style={{marginRight: 20}}> Больше объектов</button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div style={{
                            height: 250
                        }}>
                            {objects?.filter((item, i) => item.id !== object?.id && i <= 3 ? item : null).map((item, index) => (
                                <>
                                    <NavLink to={{pathname: "/architectureById/" + item?.id}}>
                                        <div className="imageTitle"
                                             key={index}
                                             title={item.title}
                                             style={{
                                                 textAlign: "center"
                                             }}
                                        >{item.title.substring(0, 40)}...
                                        </div>
                                    </NavLink>
                                    <div className="imgContainerLeftSide">
                                        <img
                                            src={item?.images[0]}
                                            alt="atlantis kg"
                                            onClick={() => {
                                                dispatch(getArchitecture1(item.id));
                                                setSelectedImg(null)
                                            }}
                                        />
                                    </div>
                                </>
                            ))}</div>
                    </div>
                </div>

                <div style={{marginTop: 110}}></div>

                {
                    objects?.length > 4 ?
                        <div className="categorySection">
                            <div>
                                <NavLink to={{pathname: "/architectureById/" + object2?.id}}>
                                    <div className="objectTitle1">
                                        {object2?.title}
                                    </div>
                                    <div className="mainImage">

                                        {
                                            object2?.images?.filter((img, i) => i === 0 ? img : null).map((image, i) => (
                                                <img src={selectedImg2 ? selectedImg2 : image}
                                                     alt="atlantis kg"
                                                     key={i}/>
                                            ))
                                        }
                                    </div>
                                </NavLink>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginRight: 20
                                }}>
                                    {object2?.images?.filter((img, i) => i < 4).map((img, index) => (
                                        <div
                                            style={{
                                                marginTop: 20,
                                                padding: "0 !important"
                                            }}
                                            key={index}>

                                            <div className="selectedImages">
                                                <img
                                                    style={{border: selectedImg2 === img ? "1px solid #033F7F" : ""}}
                                                    src={img}
                                                    alt="atlantis kg"
                                                    onClick={() => setSelectedImg2(img)}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="objectInfo">
                                    <ObjectInfo
                                        location={object2?.address}
                                        architect={object2?.architect}
                                        area={object2?.square}
                                        year={object2?.year}
                                    />
                                    <div className="moreInfo">
                                        <NavLink to={{pathname: "/architectureById/" + object2?.id}}><span>Прочитать больше...</span></NavLink>
                                        <NavLink to="/architecture">
                                            <button className="more" style={{marginRight: 20}}> Больше объектов</button>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div style={{
                                    height: 250
                                }}>
                                    {objects?.filter((item, i) => item.id !== object2?.id && i > 3 ? item : null).map((item, index) => (
                                        <>
                                            <NavLink to={{pathname: "/architectureById/" + item?.id}}>
                                                <div className="imageTitle"
                                                     key={index}
                                                     title={item.title}
                                                     style={{
                                                         textAlign: "center"
                                                     }}
                                                >{item.title.substring(0, 40)}...
                                                </div>
                                            </NavLink>
                                            <div className="imgContainerLeftSide">
                                                <img
                                                    src={item?.images[0]}
                                                    alt="atlantis kg"
                                                    onClick={() => {
                                                        dispatch(getArchitecture2(item.id));
                                                        setSelectedImg2(null)
                                                    }}
                                                />
                                            </div>
                                        </>
                                    ))}
                                </div>
                            </div>
                        </div> :
                        null
                }
            </div>
        </>
    )
}

export default ArchitectureSection