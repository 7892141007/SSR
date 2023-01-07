import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import Routes from '../Routes';

export default function renderer(req, store){
  const content = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.path} context={{}}>
            <Routes />
        </StaticRouter>
      </Provider>
    );

    return `
     <html>
       <head></head>
       <body>
        <div id='root'>${content}</div>
        <script src="clientBundle.js"></script>
       </body>
     </html>
    `;
}