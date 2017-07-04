import React, { Component } from 'react';
import Express from 'express';
import { renderToString } from 'react-dom/server';

import { Router } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import createMemoryHistory from 'history/lib/createMemoryHistory';
import { Provider } from 'react-redux';
import createRoutes from './src/app/routes';
import reducerCom from './src/app/reducers'
import { RouterContext , match } from 'react-router';
import { createStore } from 'redux'
import path from 'path';
let app = Express();
//app.get('/', (req, res) => {
//  let html = '<h2>Hello World</h2>';
  //let html = renderToString(<Main>Hello World</Main>);
//  res.send( indexPage(html) )
//});

//
app.use('/build', Express.static(path.join(__dirname, 'build'))); 
app.listen(3000, () => {
    console.log('server running http://localhost:3000');
});


let indexPage = (html,initialState)=>{
    return `
    <!doctype html>
        <html lang="utf-8">
            <head>
                <script>
                </script>
            </head>
            <body>
			  <div id="app">
				<div>
				  ${html}
				</div>
			  </div>
			  <script>
				window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
			  </script>
			  <script src="./build/app.js"></script>
            </body>
        </html>
    `
}

app.use((req, res) => {
	const history = createMemoryHistory();
    const routes = createRoutes(history)
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});//设置response编码为utf-8
  match({ routes, location: req.url }, (err, redirectLocation, renderProps) => {
	  console.log('routes'+routes);
	  console.log('URL'+req.url);
    if (err) {
      res.status(500).end(`Internal Server Error ${err}`);
    } else if (redirectLocation) {
      res.redirect(redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      const store = createStore(reducerCom);
      console.log('renderProps'+renderProps);
     
        const html = renderToString(
            <div>
                <Provider store={store}>
                    { <RouterContext {...renderProps} /> }
                </Provider>
            </div>
        );
		
		//const html = '<h2>Hello World</h2>';
        res.end(indexPage(html, store.getState()));
   
    } else {
      res.status(404).end('Not found');
    }
  });
});