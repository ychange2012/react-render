import React from 'react';
import {render} from 'react-dom';
import { Router } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import RoutesCom from './routes';
import reducerCom from './reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
const history = createBrowserHistory();
// `__INITIAL_STATE__` 来自服务器端渲染，下一部分细说
const initialState = window.__INITIAL_STATE__;
const store = createStore(reducerCom,initialState);
const Root = (props) => {
  return (
    <div>
      <Provider store={store}>
        <Router history={createBrowserHistory()}>
           {RoutesCom(history)}
        </Router>
      </Provider>
    </div>
  );
}

render(
	<Root />
  	, 
  	document.getElementById('app')
  	);
	
