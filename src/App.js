import React from "react";
import {useSelector} from "react-redux";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {ToastContainer,} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import Main from "./Components/Main/Main";
import AboutPage from "./Components/About/AboutPage";
import BackCallModal from "./Components/BackCall/BackCallModal";
import Architecture from "./Components/Architecture/Architecture";
import Building from "./Components/Building/Building";
import Design from "./Components/Design/Design";
import DesignById from "./Components/Design/DesignById/DesignById";
import ArchitectureById from "./Components/Architecture/ArchitectureById";
import BuildingById from "./Components/Building/BuildingById";
import {FullPageLoader} from "./Loader/FullPageLoader";
import VrImage from "./Components/vr_image/VrImage";
import {
    AboutUrl,
    ArchByIDUrl,
    ArchUrl,
    BuildByIDUrl,
    BuildUrl,
    ContactUrl,
    DesignByIDUrl, DesignUrl,
    MainUrl, urls, VrImageUrl
} from "./Components/urls/constants";
import Menu from "./Menu/Menu";
import MobileMenu from "./Menu/MobileMenu";

function App() {
    const load = useSelector(state => state.load.load)
    return (
        <BrowserRouter>
            {/*<MobileMenu/>*/}
            <ToastContainer/>
            <Header/>
            <BackCallModal/>
            <Menu/>
            <Footer/>
            {load ? <FullPageLoader/> : null}
        </BrowserRouter>
    );
}

export default App;
