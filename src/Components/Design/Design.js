import React, {useEffect, useState} from "react";

import BackCall from "../BackCall/BackCall";
import Gallery from "../Gallery/Gallery";
import CategoryDesc from "../Category/CategoryDesc";
import AccessWithBack from "../../service/AccessWithBack";
import {useDispatch} from "react-redux";
import {setloading} from "../../store/actions/laod_action";
import ObjectById from "../ObjectById";

const Design = () => {

    const apiImage = new AccessWithBack()._apiBase
    const [objects, setObjects] = useState([])
    const dispatch = useDispatch()
    const getObjects = () => {
        dispatch(setloading(true))
        new AccessWithBack().getData("/api/design").then(res => {
            dispatch(setloading(false))
            setObjects(res)
        })
    }
    const [category, setCategory] = useState([])

    const getCategory = () => {
        dispatch(setloading(true))
        new AccessWithBack().getData("/api/category/3").then(res => {
            dispatch(setloading(false))
            setCategory(res)
        })
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        getCategory()
        getObjects()
    }, [])
    return (
        <>
            <div className="page" style={{
                marginTop: 50,
                marginBottom: 50
            }}>
                <div className="ArchitectureTitle">
                    Дизайн интерьера
                </div>
                <div className="row"
                     style={{
                         margin: "50px auto"
                     }}
                >

                    {
                        objects?.map((item, i) => (
                            <ObjectById
                                object={item}
                            />
                            // <div className="col-lg-4 col-md-6 col-sm-12 subColTop" key={i}>
                            //     <NavLink to={{
                            //         pathname: "/architectureById/" + item.id
                            //     }}>
                            //         <div className="subTitle">
                            //             {item.title}
                            //         </div>
                            //         <div className="subImage">
                            //             <div className="imageDiv">
                            //                 <img src={apiImage + item?.images[0]}
                            //                      style={{
                            //                          height: 355
                            //                      }}
                            //                 />
                            //             </div>
                            //             <div className="subImage2">
                            //                 <img src={apiImage + item?.images[1]}/>
                            //             </div>
                            //         </div>
                            //     </NavLink>
                            // </div>
                        ))
                    }
                </div>
            </div>

            <BackCall/>
            <CategoryDesc
                title={category.title}
                description={category.description}
            />
            <Gallery/>

        </>
    )
}

export default Design