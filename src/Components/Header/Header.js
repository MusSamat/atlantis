import React from "react";
import {NavLink} from "react-router-dom";
import "./_header.css"
import {ArchUrl, BuildUrl, MainUrl, DesignUrl, ContactUrl, AboutUrl} from "../urls/constants";
import Architecture from "../Architecture/Architecture";

const Header = () => {

    const activeLinkStyle = {
        color: "#007bff",
    }
    return (
        <>

            <div className="telNumber">
                <div className="telNumberPosition">
                    <div>+996 709 999 915</div>
                    <div>+996 990 330 019</div>
                    <div>+996 778 330 019</div>
                </div>
            </div>
            <div className="container">

                <div className="headerN">
                    <NavLink to={MainUrl} exact={true}>
                        <div className="logo">
                            <img src="/images/log.png" alt="atlantis kg" width={105} height={115}/>
                        </div>
                    </NavLink>
                    <div style={{
                        margin: "0 auto"
                    }}>
                        <ul className="menuList">
                            <NavLink to={MainUrl}
                                     exact={true}
                                     activeStyle={activeLinkStyle}
                            >
                                <li>Главная</li>
                            </NavLink>
                            <div className="vertical-line">|</div>
                            <NavLink to={ArchUrl}
                                     activeStyle={activeLinkStyle}
                            >
                                <li>Архитектура</li>
                            </NavLink>
                            <div className="vertical-line">|</div>
                            <NavLink to={BuildUrl}
                                     activeStyle={activeLinkStyle}
                            >
                                <li>Строительство</li>
                            </NavLink>
                            <div className="vertical-line">|</div>
                            <NavLink to={DesignUrl}
                                     exact={true}
                                     activeStyle={activeLinkStyle}
                            >
                                <li>Дизайн</li>
                            </NavLink>
                            <div className="vertical-line">|</div>
                            <NavLink to={AboutUrl}
                                     exact={true}
                                     activeStyle={activeLinkStyle}
                            >
                                <li>О нас</li>
                            </NavLink>
                            <div className="vertical-line">|</div>
                            <NavLink to={ContactUrl}
                                     exact={true}
                                     activeStyle={activeLinkStyle}
                            >
                                <li>Контакты</li>
                            </NavLink>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header