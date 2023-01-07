import "babel-polyfill";
import express from 'express';
import renderer from './helpers/renderer';
import serverStore from './helpers/store';


const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
    const store = serverStore();

    res.send(renderer(req, store));
});

app.listen(3003, () => {
    console.log('Listing on Port 3003');
});