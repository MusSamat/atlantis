import React from "react";
import {NavLink} from "react-router-dom";
import "./_header.css"

const HeaderList = () => {
    return (
        <div className="container">
            <div className='headerN'>
                <ul className="menuList">
                    <NavLink to="/architecture"
                             activeStyle={{color: '#4bc714'}}
                    >
                        <li>Архитектура</li>
                    </NavLink>
                    <NavLink to="/building">
                        <li >Строительство</li>
                    </NavLink>
                    <NavLink to="/architecture">
                        <li >Дизайн</li>
                    </NavLink>
                    <NavLink to="/architecture">
                        <li >О нас</li>
                    </NavLink>
                    <NavLink to="/architecture">
                        <li>Контакты</li>
                    </NavLink>
                </ul>
            </div>
        </div>
    )
}

export default HeaderList