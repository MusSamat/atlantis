// import React, {useEffect, useState} from "react";
// import Lightbox from 'react-image-lightbox';
// import 'react-image-lightbox/style.css';
// import {useDispatch, useSelector} from "react-redux";
// import {setIndex, setOpenLightSlider} from "../../store/actions/handle_light_slider_action";
//
// const FullScreenSlider = (props) => {
//
//     const isOpen = useSelector(state => state.light_slider.light_slider)
//     const imageIndex = useSelector(state => state.light_slider.imageIndex)
//     const [imageIndex , setImageIndex] = useState(i)
//     console.log("setIndex: " + i)
//
//     // const i = props.index
//     const dispatch = useDispatch()
//
//     const images = props?.images
//     console.log(images)
//     console.log("imageIndex: " +imageIndex)
//
//     useEffect(() => {
//         setImageIndex(i)
//     },[])
//
//     return (
//         <div>
//             {isOpen && (
//                 <Lightbox
//                     mainSrc={images[imageIndex]}
//                     nextSrc={images[(imageIndex+ 1) % images.length]}
//                     prevSrc={images[(imageIndex + images.length - 1) % images.length]}
//
//                     onCloseRequest={() => dispatch(setOpenLightSlider(false))}
//
//                     onMovePrevRequest={() =>
//                         setImageIndex((imageIndex + images.length - 1) % images.length)
//                     }
//                     onMoveNextRequest={() =>
//                         setImageIndex((imageIndex + 1) % images.length)
//                     }
//                 />
//             )}
//
//         </div>
//     )
// }
//
// export default FullScreenSlider