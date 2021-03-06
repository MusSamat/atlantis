import React, {useEffect, useState} from "react";
import "./categorySection.css"
import AccessWithBack from "../../service/AccessWithBack";
import {useDispatch, useSelector} from "react-redux";
import {setloading} from "../../store/actions/laod_action";
import {getDesign1} from "../../store/actions/design1_actions";
import {getDesign2} from "../../store/actions/design2_actions";
import {NavLink} from "react-router-dom";
import ObjectInfo from "../ObjectInfo";

const DesignSection = () => {
    const apiImage = new AccessWithBack()._apiBase
    const [objects, setObjects] = useState([])
    const dispatch = useDispatch()
    const object = useSelector(state => state.design1.design1)
    const object2 = useSelector(state => state.design2.design2)
    const [selectedImg, setSelectedImg] = useState();
    const [selectedImg2, setSelectedImg2] = useState();
    const getObjects = () => {
        dispatch(setloading(true))
        new AccessWithBack().getData("/api/main-design").then(res => {
            dispatch(setloading(false))
            setObjects(res)
            res.map((item, i) => {
                if (i === 0) {
                    dispatch(getDesign1(item.id))
                }
            })
            res.filter((item, i) => i === 4 ? item : null).map((item, i) => {
                dispatch(getDesign2(item.id))
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
                        Дизайн интерьера
                    </NavLink>
                </div>

                <div className="categorySection">
                    <div>
                        <NavLink to={{pathname: "/designById/" + object?.id}}>
                            <div className="objectTitle1">
                                {object?.title}
                            </div>
                            <div className="mainImage">
                                {
                                    <img src={selectedImg ? selectedImg : object?.image1}
                                         alt="atlantis kg"/>
                                }
                            </div>
                        </NavLink>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            marginRight: 20
                        }}>

                            <div style={{marginTop: 20, padding: "0 !important"}}>
                                <div className="selectedImages">
                                    <img
                                        style={{border: selectedImg === object?.image2 ? "1px solid #033F7F" : ""}}
                                        src={object?.image2}
                                        alt="atlantis kg"
                                        onClick={() => setSelectedImg(object?.image2)}
                                    />
                                </div>
                            </div>
                            <div style={{marginTop: 20, padding: "0 !important"}}>
                                <div className="selectedImages">
                                    <img
                                        style={{border: selectedImg === object?.image3 ? "1px solid #033F7F" : ""}}
                                        src={object?.image3}
                                        alt="atlantis kg"
                                        onClick={() => setSelectedImg(object?.image3)}
                                    />
                                </div>
                            </div>
                            <div style={{marginTop: 20, padding: "0 !important"}}>
                                <div className="selectedImages">
                                    <img
                                        style={{border: selectedImg === object?.image4 ? "1px solid #033F7F" : ""}}
                                        src={object?.image4}
                                        alt="atlantis kg"
                                        onClick={() => setSelectedImg(object?.image4)}
                                    />
                                </div>
                            </div>
                            <div style={{marginTop: 20, padding: "0 !important"}}>
                                <div className="selectedImages">
                                    <img
                                        style={{border: selectedImg === object?.image5 ? "1px solid #033F7F" : ""}}
                                        src={object?.image5}
                                        alt="atlantis kg"
                                        onClick={() => setSelectedImg(object?.image5)}
                                    />
                                </div>
                            </div>

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
                                    to={{pathname: "/designById/" + object?.id}}><span>Прочитать больше...</span></NavLink>
                                <NavLink to="/design">
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
                                    <NavLink to={{pathname: "/designById/" + item?.id}}>
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
                                                dispatch(getDesign1(item.id));
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
                                <NavLink to={{pathname: "/designById/" + object2?.id}}>
                                    <div className="objectTitle1">
                                        {object2?.title}
                                    </div>
                                    <div className="mainImage">

                                        <img src={selectedImg2 ? selectedImg2 : object2?.image1}
                                             alt="atlantis kg"/>
                                    </div>
                                </NavLink>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginRight: 20
                                }}>

                                    <div style={{marginTop: 20, padding: "0 !important"}}>
                                        <div className="selectedImages">
                                            <img
                                                style={{border: selectedImg2 === object2?.image2 ? "1px solid #033F7F" : ""}}
                                                src={object2?.image2}
                                                alt="atlantis kg"
                                                onClick={() => setSelectedImg2(object2?.image2)}
                                            />
                                        </div>
                                    </div>
                                    <div style={{marginTop: 20, padding: "0 !important"}}>
                                        <div className="selectedImages">
                                            <img
                                                style={{border: selectedImg2 === object2?.image3 ? "1px solid #033F7F" : ""}}
                                                src={object2?.image3}
                                                alt="atlantis kg"
                                                onClick={() => setSelectedImg2(object2?.image3)}
                                            />
                                        </div>
                                    </div>
                                    <div style={{marginTop: 20, padding: "0 !important"}}>
                                        <div className="selectedImages">
                                            <img
                                                style={{border: selectedImg2 === object2?.image4 ? "1px solid #033F7F" : ""}}
                                                src={object2?.image4}
                                                alt="atlantis kg"
                                                onClick={() => setSelectedImg2(object2?.image4)}
                                            />
                                        </div>
                                    </div>
                                    <div style={{marginTop: 20, padding: "0 !important"}}>
                                        <div className="selectedImages">
                                            <img
                                                style={{border: selectedImg2 === object2?.image5 ? "1px solid #033F7F" : ""}}
                                                src={object2?.image5}
                                                alt="atlantis kg"
                                                onClick={() => setSelectedImg2(object2?.image5)}
                                            />
                                        </div>
                                    </div>

                                </div>
                                <div className="objectInfo">
                                    <ObjectInfo
                                        location={object2?.address}
                                        architect={object2?.architect}
                                        area={object2?.square}
                                        year={object2?.year}
                                    />
                                    <div className="moreInfo">
                                        <NavLink
                                            to={{pathname: "/designById/" + object2?.id}}><span>Прочитать больше...</span></NavLink>
                                        <NavLink to="/design">
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
                                            <NavLink to={{pathname: "/designById/" + item?.id}}>
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
                                                        dispatch(getDesign2(item.id));
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

export default DesignSection