import "babel-polyfill";
import express from 'express';
import { matchRoutes } from 'react-router-config';
import proxy from "express-http-proxy";
import Routes from "./Routes";
import renderer from './helpers/renderer';
import serverStore from './helpers/store';


const app = express();

app.use('/api', proxy('http://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator(opts) {
        opts.headers['x-forwarded-host'] = 'localhost:3003';
        return opts;
    }
}));

app.use(express.static('public'));
app.get('*', (req, res) => {
    const store = serverStore(req);
    const promises = matchRoutes(Routes, req.path).map(({ route }) => {
        return route.laodServerData && route.laodServerData(store);
    });
    
    Promise.all(promises).then(() => {
        res.send(renderer(req, store));
    });
});

app.listen(3003, () => {
    console.log('Listing on Port 3003');
});