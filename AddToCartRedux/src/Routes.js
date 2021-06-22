import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Checkout from './components/Checkout'
import Home from './components/Home'

function Routes() {
    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/checkout" exact>
                        <Checkout />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default Routes
