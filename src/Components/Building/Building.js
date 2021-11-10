import React, {useEffect, useState} from "react";
import BackCall from "../BackCall/BackCall";
import Gallery from "../Gallery/Gallery";
import CategoryDesc from "../Category/CategoryDesc";
import AccessWithBack from "../../service/AccessWithBack";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setloading} from "../../store/actions/laod_action";
import ObjectById from "../ObjectById";
import ObjectInfo from "../ObjectInfo";

const Building = () => {
    const [objects, setObjects] = useState([])
    const dispatch = useDispatch()
    const getObjects = () => {
        dispatch(setloading(true))
        new AccessWithBack().getData("/api/building").then(res => {
            dispatch(setloading(false))
            setObjects(res)
        })
    }
    const [category, setCategory] = useState([])

    const getCategory = () => {
        dispatch(setloading(true))
        new AccessWithBack().getData("/api/category/2").then(res => {
            setloading(false)
            setCategory(res)
        })
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        getCategory()
        getObjects()
    }, [])
    return(
        <>
            <div className="page" style={{
                marginTop: 50,
                marginBottom: 50
            }}>
                <div className="ArchitectureTitle">
                    Строительство
                </div>
                <div className="row"
                     style={{
                         margin: "50px auto"
                     }}
                >

                    {
                        objects?.map((item, i) => (
                            <div key={i}>
                                <ObjectById
                                    object={item}
                                />
                                <ObjectInfo
                                    location={item.address}
                                    architect={item.architect}
                                    area={item.square}
                                    year={item.year}
                                />
                                <div className="moreInfo"
                                     style={{
                                         marginTop: 41
                                     }}>
                                    <NavLink to={{pathname: "/architectureById/" + item?.id}}><span>Прочитать больше...</span></NavLink>
                                </div>
                            </div>
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

export default Building