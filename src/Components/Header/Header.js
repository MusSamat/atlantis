import React from "react";
import {NavLink} from "react-router-dom";
import "./_header.css"

const Header = () => {

    const activeLinkStyle = {
        color: "#679ED8",
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
                   <NavLink to="/" exact={true}>
                       <div className="logo">
                           <img src="/images/log.png" alt="atlantis kg" width={105} height={115}/>
                       </div>
                   </NavLink>
                    <div style={{
                        margin: "0 auto"
                    }}>
                        <ul className="menuList">
                            <NavLink to="/"
                                     exact={true}
                                     activeStyle={activeLinkStyle}
                            >
                                <li>Главная</li>
                            </NavLink>
                            <div className="vertical-line">|</div>
                            <NavLink to="/architecture"
                                     activeStyle={activeLinkStyle}
                            >
                                <li>Архитектура</li>
                            </NavLink>
                            <div className="vertical-line">|</div>
                            <NavLink to="/building"
                                     activeStyle={activeLinkStyle}
                            >
                                <li>Строительство</li>
                            </NavLink>
                            <div className="vertical-line">|</div>
                            <NavLink to="/design"
                                     exact={true}
                                     activeStyle={activeLinkStyle}
                            >
                                <li>Дизайн</li>
                            </NavLink>
                            <div className="vertical-line">|</div>
                            <NavLink to="/about"
                                     exact={true}
                                     activeStyle={activeLinkStyle}
                            >
                                <li>О нас</li>
                            </NavLink>
                            <div className="vertical-line">|</div>
                            <NavLink to="/contact"
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