import React, {useRef, useState} from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css"
import "swiper/components/pagination/pagination.min.css"
import "../_category.css"

// import Swiper core and required modules
import SwiperCore, {
    Autoplay,
    EffectCoverflow, Pagination
} from 'swiper/core';
import CategorysBanner from "../CategorysBanner";

// install Swiper modules
SwiperCore.use([Autoplay,EffectCoverflow, Pagination]);

const CategorySlider = (props) => {
    const title = props.category.title
    const image1 = props.category.image
    const image2 = props.category.image2
    const image3 = props.category.image3
    return (
        <>
            <div className="container" style={{
                marginTop: 100,
                height: "auto"
            }}>
                <div className="row" style={{
                    paddingBottom: 250
                }}>
                    <div className="col-lg-3 categoryTitle">
                        {title}
                    </div>
                    <div className="col-lg-9 ">
                        <CategorysBanner
                            image1={image1}
                            image2={image2}
                            image3={image3}
                        />
                    </div>
                </div>
            </div>

        </>
    )
}

export default CategorySlider