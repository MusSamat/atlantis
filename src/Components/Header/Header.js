import React from "react";
import {NavLink} from "react-router-dom";
import "./_header.css"
import HeaderList from "./HeaderList";

const Header = () => {
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
                           <img src="/images/log.png" alt="atlantis kg"/>
                       </div>
                   </NavLink>
                    <div >
                        <ul className="menuList">
                            <NavLink to="/"
                                     exact={true}
                                     activeStyle={{
                                         color: "#679ED8",
                                     }}
                            >
                                <li>Главная</li>
                            </NavLink>
                            <NavLink to="/architecture"
                                     activeStyle={{
                                         color: "#679ED8",
                                     }}
                            >
                                <li>Архитектура</li>
                            </NavLink>
                            <NavLink to="/building"
                                     activeStyle={{
                                         color: "#679ED8",
                                     }}
                            >
                                <li>Строительство</li>
                            </NavLink>
                            <NavLink to="/design"
                                     exact={true}
                                     activeStyle={{
                                         color: "#679ED8",
                                     }}
                            >
                                <li>Дизайн</li>
                            </NavLink>
                            <NavLink to="/about"
                                     exact={true}
                                     activeStyle={{
                                         color: "#679ED8",
                                     }}
                            >
                                <li>О нас</li>
                            </NavLink>
                            <NavLink to="/contact"
                                     exact={true}
                                activeStyle={{
                                    color: "#679ED8",
                                }}
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