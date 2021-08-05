import React from "react";
import "./footerSection.css"
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <div className="footerSection">
            <div className="container">
                <div className="row" style={{
                    paddingTop: 30
                }}>
                    <div className="col-lg-4 col-md-4 col-sm-12 footerCol">
                       <NavLink to="/about">
                           О Нас
                       </NavLink>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 footerCol">
                        Объекты
                        <NavLink to="/architecture">
                            Архитектура
                        </NavLink>
                        <NavLink to="/building">
                            Строительство
                        </NavLink>
                        <NavLink to="/design">
                            Дизайн
                        </NavLink>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 footerCol">
                        Контакты
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer