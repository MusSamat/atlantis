import React, {useEffect, useState} from "react"
import * as PANOLENS from "panolens-three"
import "./_vr_image.css"
import {useDispatch, useSelector} from "react-redux";
import {setloading} from "../../store/actions/laod_action";
import AccessWithBack from "../../service/AccessWithBack";



const VrImage = (props) => {
    // const obj = props.obj
    const dispatch = useDispatch()
    dispatch(setloading(false))
    const obj = useSelector(state => state.vrObject.vrObject)
    // const [im,setIm] = useState([])

    // const getImage = () => {
    //     new AccessWithBack().getDataImage().then(res => {
    //         res.map((item) => {
    //             if(item.id === 5) {
    //                 setIm(item)
    //             }
    //         })
    //     })
    // }

    console.log(obj)
    const image = "/images/panoImage.jpg"
    useEffect(() => {
        const panoImage = document.querySelector('.pano-image');
        const objectImage = obj?.vr
        // const objectImage = im?.image
        const panorama = new PANOLENS.ImagePanorama(objectImage)
        const viewer = new PANOLENS.Viewer({
            container: panoImage,
            output: console
        })
        viewer.add(panorama);
    }, [obj])

    return (
        <div className="page" >
            <div>

            </div>
            <div className="vrMainDiv" style={{width: 992, height: 638, margin: "0 auto", marginTop: 70}}>
                <div className="pano-image" style={{width: "100%", height: "100%"}}></div>
                {/*<div style={{width: "100%", height: "100%"}}><img src={im?.image} alt="asjfsjd;fl"/></div>*/}
            </div>
        </div>
    )
}

export default VrImage