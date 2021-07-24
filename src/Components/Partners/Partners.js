import React, {useEffect, useState} from "react";
import './partners.css'
import Images from "../Sliders/ mainBanner/Images";
import Carousels from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AccessWithBack from "../../service/AccessWithBack";
import {useDispatch} from "react-redux";
import {setloading} from "../../store/actions/laod_action";


const Partners = () => {

    const [partners, setPartners] = useState([])
    const dispatch = useDispatch()

    const getPartners = () => {
        dispatch(setloading(true))
        new AccessWithBack().getData("/api/partner").then(res => {
            dispatch(setloading(false))
            setPartners(res)
        })
    }

    useEffect(() => {
        getPartners()
    }, [])

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return(
        <div className="page">
            <div className="partner">
                <div className="partnerTitle">
                    Наши Партнеры
                </div>

                {/*<div>*/}
                {/*    <img src="images/partner.jpg" alt="atlantis kg"/>*/}
                {/*</div>*/}
                <Carousels responsive={responsive}
                           autoPlay={true} autoPlaySpeed={2000}
                           infinite={true}
                >
                    {partners?.map((img, index) => (
                        <div className="partnerImage" key={index}>
                            <img
                                src={img.image}
                                alt="atlantis kg"
                            />
                        </div>
                    ))}

                </Carousels>
            </div>
        </div>
    )
}
export default Partners