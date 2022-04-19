import React from 'react';
import {Route, Switch} from "react-router-dom";
import {urls} from "../Components/urls/constants";

function Menu() {
    return (
        <div>
            <Switch>
                {
                    urls.map((item, i) => (
                        <Route exact={true} path={item.slug} component={item.component} key={i}/>
                    ) )
                }
            </Switch>
        </div>
    );
}

export default Menu;