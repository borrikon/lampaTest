import React from 'react';
import Menu from "./menu";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ProductItemComponents from "./productItemComponents";
import Basket from "./basket";

const Layout = ()=>{

    return(
        <Router>
            <Menu />
            <Switch>
                <Route path='/basket'>
                    <Basket />
                </Route>
                <Route path='/' >
                    <ProductItemComponents />
                </Route>
            </Switch>
        </Router>
    )
}
export default Layout;