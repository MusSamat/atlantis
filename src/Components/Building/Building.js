import React, {useEffect, useState} from "react";
import CategorySlider from "../Category/CategorySlider/CategorySlider";
import SubCategories from "../Category/SubCategories";
import BackCall from "../BackCall/BackCall";
import Gallery from "../Gallery/Gallery";
import CategoryDesc from "../Category/CategoryDesc";
import AccessWithBack from "../../service/AccessWithBack";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setloading} from "../../store/actions/laod_action";

const Building = () => {
    const apiImage = "http://176.126.167.43:8008"
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
        getCategory()
        getObjects()
    }, [])
    return(
        <>
            <CategorySlider
               category={category}
            />

            <div className="page" style={{
                marginTop: 50,
                marginBottom: 50
            }}>
                <div className="row">

                    {
                        objects?.map((item, i) => (
                            <div className="col-lg-4 col-md-6 col-sm-12 subColTop" key={i}>
                                <NavLink to={{
                                    pathname: "/buildingById/" + item.id
                                }}>
                                    <div className="subTitle">
                                        {item.title}
                                    </div>
                                    <div className="subImage">
                                    <div className="imageDiv">
                                        <img src={apiImage + item?.images[0]}
                                             style={{
                                                 height: 355
                                             }}
                                        />
                                    </div>
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