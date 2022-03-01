const express = require('express');
const router = express.Router();
const siteController = require('./siteController')

router.get('/', siteController.getHomepage)
router.get('/404', siteController.get404Page)
router.get('/charts', siteController.getChartPage)
router.get('/help', siteController.getHelpPage)
router.get('/documentation', siteController.getDocumentationPage)
module.exports = router;

