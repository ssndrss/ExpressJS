const express = require('express');
const routerQcm = express.Router();
const {displayQcms, displayFormQcm, createNewForm, displayQcmJson, displayQcmDetailed} = require('../controllers/qcms');

routerQcm.get('/qcms', displayQcms);
routerQcm.get('/json', displayQcmJson);
routerQcm.get('/newqcm', displayFormQcm);
routerQcm.post('/newqcm', createNewForm);
routerQcm.get('/:qcmid', displayQcmDetailed);

module.exports = routerQcm;