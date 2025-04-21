const express = require('express');
const router = express.Router();
const tracertController = require('../controller/tracert')
router.post('/tracert',tracertController.getTracertLocation);
module.exports = router;