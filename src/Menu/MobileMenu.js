import React, {useState} from 'react';
import { slide as MobMenu } from 'react-burger-menu'
import {urlsWithTitle} from "../Components/urls/constants";
import {useDispatch} from "react-redux";
import "./_menuCss.css"

function MobileMenu(props) {
    const dispatch = useDispatch()

    const [isOpen, setOpen] = useState(false)
    const [ip, setIP] = useState('')


    const handleIsOpen = () => {
        setOpen(!isOpen)
    }

    const closeSideBar = () => {
        setOpen(false)
    }

    return (
        <MobMenu
            {...props} right
            isOpen={isOpen}
            onOpen={handleIsOpen}
            onClose={handleIsOpen}
        >
            {
                urlsWithTitle.map((item, i) => (
                    <a id={item.slug} className="menu-item" href={item.slug}>{item.title}</a>
                ))
            }

            {/*<a id="home" className="menu-item" href="/">Home</a>*/}
            {/*<a id="about" className="menu-item" href="/about">About</a>*/}
            {/*<a id="contact" className="menu-item" href="/contact">Contact</a>*/}
        </MobMenu>
    );
}

export default MobileMenu;