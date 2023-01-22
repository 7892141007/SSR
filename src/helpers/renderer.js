import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from "react-router-config";
import serialize from 'serialize-javascript';
import Routes from '../Routes';

export default function renderer(req, store){
  const content = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.path} context={{}}>
        {/* <Routes /> */}
        <div>{renderRoutes(Routes)}</div>
        </StaticRouter>
      </Provider>
    );

    return `
     <html>
       <head></head>
       <body>
        <div id='root'>${content}</div>
        <script>
          window.INITIAL_STATE = ${serialize(store.getState())}
        </script>
        <script src="clientBundle.js"></script>
       </body>
     </html>
    `;
}