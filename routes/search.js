const express = require('express');
const router = express.Router();
const searchService = require('../services/searchServices');

router.get('/',searchService.getSearch);

module.exports = router;