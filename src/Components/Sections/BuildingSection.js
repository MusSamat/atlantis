import React, {useEffect, useState} from "react";
import "./categorySection.css"
import AccessWithBack from "../../service/AccessWithBack";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setloading} from "../../store/actions/laod_action";
import {getBuilding1} from "../../store/actions/building1_actions";
import {getBuilding2} from "../../store/actions/building2_actions";
import ObjectInfo from "../ObjectInfo";



const BuildingSection = () => {
    const apiImage = new AccessWithBack()._apiBase
    const [objects, setObjects] = useState([])
    const dispatch = useDispatch()
    const object = useSelector(state => state.build1.build1)
    const object2 = useSelector(state => state.build2.build2)
    const [selectedImg, setSelectedImg] = useState();
    const [selectedImg2, setSelectedImg2] = useState();
    const getObjects = () => {
        dispatch(setloading(true))
        new AccessWithBack().getData("/api/main-building").then(res => {
            dispatch(setloading(false))
            setObjects(res)
            res.map((item, i) => {
                if(i === 0){
                    dispatch(getBuilding1(item.id))
                }
            })
            res.filter((item, i) => i === 4 ? item : null).map((item, i) => {
                dispatch(getBuilding2(item.id))
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
                        Строительство
                    </NavLink>
                </div>

                <div className="categorySection">
                    <div>
                        <div className="objectTitle1" >
                            {object?.title}
                        </div>
                        <div className="mainImage">

                            {
                                object?.images?.filter((img, i) => i === 0 ? img : null).map((image, i) => (
                                    <img src={selectedImg ? apiImage + selectedImg : apiImage + image}
                                         alt="atlantis kg"
                                         key={i}/>
                                ))
                            }
                        </div>
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
                                            src={apiImage + img}
                                            alt="atlantis kg"
                                            onClick={() => setSelectedImg(img)}
                                        />
                                    </div>
                                </div>
                            ))}
                            {/*{object?.images?.filter((img, i) => i < 1 && selectedImg !== img ? img : null).map((img, index) => (*/}
                            {/*    <div*/}
                            {/*        style={{*/}
                            {/*            marginTop: 20,*/}
                            {/*            padding: "0 !important"*/}
                            {/*        }}*/}
                            {/*        key={index}>*/}

                            {/*        <div className="selectedImages">*/}
                            {/*            <img*/}
                            {/*                style={{border: selectedImg === img ? "1px solid #033F7F" : ""}}*/}
                            {/*                src={apiImage + img}*/}
                            {/*                alt="atlantis kg"*/}
                            {/*                onClick={() => setSelectedImg(img)}*/}
                            {/*            />*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*))}*/}
                        </div>
                        <div className="objectInfo">
                            <ObjectInfo
                                location={object?.address}
                                architect={object?.architect}
                                area={object?.square}
                                year={object?.year}
                            />
                            <div className="moreInfo">
                                <NavLink to={{pathname: "/architectureById/" + object?.id}}><span>Прочитать больше...</span></NavLink>
                                <NavLink to="/architecture"><button className="more" style={{marginRight: 20}}> Больше объектов</button></NavLink>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div style={{
                            height: 250
                        }}>
                            {objects?.filter((item, i) => item.id !== object?.id && i <= 3 ? item : null).map((item, index) => (
                                <>
                                    <div className="imageTitle"
                                         key={index}
                                         title={item.title}
                                         style={{
                                             textAlign: "center"
                                         }}
                                    >{item.title.substring(0, 40)}...
                                    </div>
                                    <div className="imgContainerLeftSide">
                                        <img
                                            src={apiImage + item?.images[0]}
                                            alt="atlantis kg"
                                            onClick={() => {dispatch(getBuilding1(item.id)); setSelectedImg(null)}}
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
                                <div className="objectTitle1" >
                                    {object2?.title}
                                </div>
                                <div className="mainImage">

                                    {
                                        object2?.images?.filter((img, i) => i === 0 ? img : null).map((image, i) => (
                                            <img src={selectedImg2 ? apiImage + selectedImg2 : apiImage + image}
                                                 alt="atlantis kg"
                                                 key={i}/>
                                        ))
                                    }
                                </div>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginRight: 20
                                }}>
                                    {object2?.images?.filter((img, i) => i < 4 ).map((img, index) => (
                                        <div
                                            style={{
                                                marginTop: 20,
                                                padding: "0 !important"
                                            }}
                                            key={index}>

                                            <div className="selectedImages">
                                                <img
                                                    style={{border: selectedImg2 === img ? "1px solid #033F7F" : ""}}
                                                    src={apiImage + img}
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
                                        <NavLink to={{pathname: "/buildingById/" + object2?.id}}><span>Прочитать больше...</span></NavLink>
                                        <NavLink to="/building"><button className="more" style={{marginRight: 20}}> Больше объектов</button></NavLink>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div style={{
                                    height: 250
                                }}>
                                    {objects?.filter((item, i) => item.id !== object2?.id && i > 3 ? item : null).map((item, index) => (
                                        <>
                                            <div className="imageTitle"
                                                 key={index}
                                                 title={item.title}
                                                 style={{
                                                     textAlign: "center"
                                                 }}
                                            >{item.title.substring(0, 40)}...
                                            </div>
                                            <div className="imgContainerLeftSide">
                                                <img
                                                    src={apiImage + item?.images[0]}
                                                    alt="atlantis kg"
                                                    onClick={() => dispatch(getBuilding2(item.id))}
                                                />
                                            </div>
                                        </>
                                    ))}
                                </div>
                            </div>
                        </div>:
                        null
                }


                {/*section2*/}


                {/*{*/}
                {/*    objects?.length > 4 ? <div className="categorySection">*/}
                {/*            <div className="col-lg-3 col-md-2 col-sm-3 sectionDescription">*/}
                {/*                <div>*/}
                {/*                    <NavLink to={{*/}
                {/*                        pathname: "/architectureById/" + object?.id*/}
                {/*                    }}>*/}
                {/*                        <div className="desTitle">*/}
                {/*                            {object2?.title}*/}
                {/*                        </div>*/}
                {/*                    </NavLink>*/}
                {/*                    <p className="desText">*/}
                {/*                        {object2?.short_description}*/}
                {/*                    </p>*/}
                {/*                </div>*/}
                {/*                <NavLink to={{*/}
                {/*                    pathname: "/architecture"*/}
                {/*                }}*/}
                {/*                         exact={true}*/}
                {/*                >*/}
                {/*                    <button className="more"> Больше объектов</button>*/}
                {/*                </NavLink>*/}
                {/*            </div>*/}
                {/*            <div className="col-lg-6">*/}
                {/*                <div className="row">*/}
                {/*                    <div className="mainImage">*/}

                {/*                        {*/}
                {/*                            object2?.images?.filter((img, i) => i === 0 ? img : null).map((image, i) => (*/}
                {/*                                <img src={selectedImg2 ? apiImage + selectedImg2 : apiImage + image}*/}
                {/*                                     alt="atlantis kg"*/}
                {/*                                     key={i}/>*/}
                {/*                            ))*/}
                {/*                        }*/}
                {/*                    </div>*/}
                {/*                    <div style={{*/}
                {/*                        display: "flex",*/}
                {/*                        flexDirection: "row",*/}
                {/*                        justifyContent: "space-around",*/}
                {/*                        gap: 30*/}
                {/*                    }}>*/}
                {/*                        {object2?.images?.filter((img, i) => i < 3 ? img : null).map((img, index) => (*/}
                {/*                            <div*/}
                {/*                                style={{*/}
                {/*                                    marginTop: 47,*/}
                {/*                                    padding: "0 !important"*/}
                {/*                                }}*/}
                {/*                                key={index}>*/}

                {/*                                <div className="selectedImages">*/}
                {/*                                    <img*/}
                {/*                                        style={{border: selectedImg2 === img ? "1px solid #033F7F" : ""}}*/}
                {/*                                        src={apiImage + img}*/}
                {/*                                        alt="atlantis kg"*/}
                {/*                                        onClick={() => setSelectedImg2(img)}*/}
                {/*                                    />*/}
                {/*                                </div>*/}
                {/*                            </div>*/}
                {/*                        ))}*/}
                {/*                    </div>*/}

                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div className=" offset-1 col-lg-2 col-md-3 col-sm-12">*/}
                {/*                <div style={{*/}
                {/*                    height: 250*/}
                {/*                }}>*/}
                {/*                    {objects?.filter((item, i) => item.id !== object2?.id && i > 3 ? item : null).map((item, index) => (*/}
                {/*                        <>*/}
                {/*                            <div className="imageTitle"*/}
                {/*                                 key={index}*/}
                {/*                                 title={item.title}*/}
                {/*                            >{item.title.substring(0, 15)}...*/}
                {/*                            </div>*/}
                {/*                            <div className="imgContainerLeftSide">*/}
                {/*                                <img*/}
                {/*                                    src={apiImage + item?.images[0]}*/}
                {/*                                    alt="atlantis kg"*/}
                {/*                                    onClick={() => dispatch(getArchitecture2(item.id))}*/}
                {/*                                />*/}
                {/*                            </div>*/}
                {/*                        </>*/}
                {/*                    ))}</div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        : null*/}

                {/*}*/}
            </div>
        </>
    )
}

export default BuildingSection