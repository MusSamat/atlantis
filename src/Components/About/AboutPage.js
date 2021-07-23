import React, {useEffect, useState} from "react";
import BackCall from "../BackCall/BackCall";
import "./_about.css"
import AccessWithBack from "../../service/AccessWithBack";
import {useDispatch} from "react-redux";
import {setloading} from "../../store/actions/laod_action";

const AboutPage = () => {
    const [description, setDescription] = useState([])
    const dispatch = useDispatch()
    const getAboutDescription = () => {
        dispatch(setloading(true))
        new AccessWithBack().getData("/api/about").then(res => {
            dispatch(setloading(false))
            setDescription(res)
        })
    }

    useEffect(() => {
        getAboutDescription()
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <div className="container"
                 style={{
                     marginTop: 50,
                     marginBottom: 50,
                     padding: "15px 0"
                 }}
            >
                <div className="row">
                    <div className="col-lg-8 col-md-12 col-sm-12 aboutText">
                        {description[0]?.description}
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 aboutImg">
                        <img src="/images/atlantis.jpg" alt="atlantis kg"/>
                    </div>
                </div>
            </div>
        <BackCall/>
        </>
    )
}

export default AboutPage