const express = require('express');
const routerQcm = require('./routers/qcm_route');

const app = express();

app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs');

const port = 3000;
app.use('/qcms', routerQcm);

app.listen(port, () => {
    console.log(`Ecoute sur http://localhost:${port}`);
});