const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors=require('cors');
const port = 3000;

const itemsRouter = require('./routes/items');

app.use((req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`);
    next();
});

app.use(cors());
app.use(bodyParser.json());
app.use('/items', itemsRouter);


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
