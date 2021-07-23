import React, {useState, useEffect} from "react";
import "./categorySection.css"
import Images from "../Sliders/ mainBanner/Images";
import AccessWithBack from "../../service/AccessWithBack";
import {useDispatch, useSelector} from "react-redux";
import {setloading} from "../../store/actions/laod_action";

const SelectedSection = (props) => {
    const apiImage = "http://127.0.0.1:8000"
    const object = useSelector(state => state.archi1.archi1)
    const [selectedImg, setSelectedImg] = useState();
    return (
        <>
        </>
    )
}

export default SelectedSection