import React from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
//import Main from './Main'; // Our custom react component
//import Bar from './Bar';
//import Index from './Index';
//import Home from './home';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
 //var urlStr = 'http://192.168.200.187:8080/NewMobilePlatform/';

render(<h2>222</h2>, document.getElementById('app'));
	
