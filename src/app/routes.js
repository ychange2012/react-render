import React, {Component} from 'react';
import Home from './home';
import Index from './index';
import App  from './root.js';
import {Router,Route,IndexRoute} from 'react-router';



function routes(history) {
    return (
        <Router history={history} >
            <Route path="/" component={App}>
                <IndexRoute component={Index} />
                <Route path="home" component={Home} />
                <Route path='/index' component={Index} />
            </Route>
        </Router>
    )
}

export default routes;