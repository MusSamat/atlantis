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
function App() {

    const load = useSelector(state => state.load.load)
  return (
    <BrowserRouter>

        <ToastContainer/>
        <Header/>
        <BackCallModal/>
        <Switch>
            <Route exact={true} path={"/"} component={Main}/>
            <Route exact={true} path={"/contact"} component={Contact}/>
            <Route exact={true} path={"/about"} component={AboutPage}/>
            <Route exact={true} path={"/architecture"} component={Architecture}/>
            <Route exact={true} path={"/building"} component={Building}/>
            <Route exact={true} path={"/design"} component={Design}/>
            <Route exact={true} path={"/designById/:id"} component={DesignById}/>
            <Route exact={true} path={"/architectureById/:id"} component={ArchitectureById}/>
            <Route exact={true} path={"/buildingById/:id"} component={BuildingById}/>
            <Route exact={true} path={"/vr-image"} component={VrImage}/>
        </Switch>
        <Footer/>
        {load ? <FullPageLoader/> : null}
    </BrowserRouter>
  );
}

export default App;
