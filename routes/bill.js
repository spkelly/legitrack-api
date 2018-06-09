const express = require('express');
const router = express.Router();
const billService = require('../services/billServices');

router.get('/:id', billService.getBill);
router.get('/test', billService.getFakeBill);

module.exports = router;
