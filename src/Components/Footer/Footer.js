import React from "react";
import "./footerSection.css"
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <div className="footerSection">
            <div className="page">
                <div className="row footerDiv" style={{
                    paddingTop: 20
                }}>
                    <div className="col-lg-8 col-md-6 col-sm-12 footerCol" style={{justifyContent: "flex-start"}}>
                        Copyright ©2021 All rights reserved | This website is made by SigmaSoft.kg
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 footerCol">
                        {/*<NavLink to={{pathname: 'https://wa.me/996552180305'}} target="_blank">*/}
                        <NavLink to={{pathname: 'https://wa.me/996552180305'}} target="_blank">
                            <i className='fa fa-whatsapp fa' style={{color: "white"}}></i>
                        </NavLink>
                        <NavLink to={{pathname: 'https://www.instagram.com/agrovetasia_kg/'}} target="_blank">
                            <i className='fa fa-instagram fa' style={{color: "white"}}></i>
                        </NavLink>

                        <NavLink to={{pathname: 'https://www.facebook.com/agrovetaziakg'}} target="_blank">
                            <i className='fa fa-facebook fa' style={{color: "white"}}></i>
                        </NavLink>
                        <NavLink to={{pathname: 'https://www.youtube.com/channel/UCRtOQpu7FCHIYpsZYewl7JA'}}
                              target="_blank">
                            <i className='fa fa-youtube fa' style={{color: "white"}}></i>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer