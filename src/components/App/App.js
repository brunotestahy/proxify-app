import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';
import './App.css';
import Navigation from '../Navigation/Navigation';
import Start from '../Start/Start';
import Cart from '../Cart/Cart';
import Favourites from '../Favourites/Favourites';
import Orders from '../Orders/Orders';

function App() {
    return (
        <div>
            <Navigation/>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Start/>
                    </Route>
                    <Route path="/cart">
                        <Cart/>
                    </Route>
                    <Route path="/favourites">
                        <Favourites/>
                    </Route>
                    <Route path="/orders">
                        <Orders/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
