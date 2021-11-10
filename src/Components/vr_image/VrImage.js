import React, {useEffect, useState} from "react"
import * as PANOLENS from "panolens-three"
import "./_vr_image.css"
import {useDispatch, useSelector} from "react-redux";
import {setloading} from "../../store/actions/laod_action";

const VrImage = (props) => {
    // const obj = props.obj
    const dispatch = useDispatch()
    dispatch(setloading(false))
    const obj = useSelector(state => state.vrObject.vrObject)
    console.log(obj)
    useEffect(() => {
        const panoImage = document.querySelector('.pano-image');
        const objectImage = obj?.vr
        const panorama = new PANOLENS.ImagePanorama(objectImage)
        const viewer = new PANOLENS.Viewer({
            container: panoImage,
        })
        viewer.add(panorama);
    }, [])

    return (
        <div className="page" >
            <div>

            </div>
            <div className="vrMainDiv" style={{width: 992, height: 638, margin: "0 auto", marginTop: 40}}>
                <div className="pano-image" style={{width: "100%", height: "100%"}}></div>
            </div>
        </div>
    )
}

export default VrImage