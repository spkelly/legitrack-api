let express = require('express');
let router = express.Router();
let searchService = require('../services/searchServices');

router.get('/',searchService.getSearch);

module.exports = router;