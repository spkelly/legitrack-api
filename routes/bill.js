const express = require('express');
const router = express.Router();
const billService = require('../services/billServices');

router.get('/:id', billService.getBill);

module.exports = router;
