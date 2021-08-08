import React from 'react';
import ProductListing from "./pages/ProductListing";
import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";
import CartPages from "./pages/CartPages";

function App() {
    return (
        <>
            <Header/>
            <Switch>
                <Route exact path='/' component={ProductListing}/>
                <Route exact path='/cart' component={CartPages}/>
            </Switch>

        </>
    );
}

export default App;