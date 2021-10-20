import React, {useEffect, useState} from "react"
import * as PANOLENS from "panolens"
import "./_vr_image.css"

const VrImage = (props) => {
    const obj = props.obj
    useEffect(() => {
        const panoImage = document.querySelector('.pano-image');
        const objectImage = obj.vr
        const panorama = new PANOLENS.ImagePanorama(objectImage)
        const viewer = new PANOLENS.Viewer({
            container: panoImage
        })
        viewer.add(panorama)
    }, [])

    return (
        <div className="vrMainDiv">
            <div className="pano-image"></div>
        </div>
    )
}

export default VrImage