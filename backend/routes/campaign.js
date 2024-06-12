const express = require('express');
const router = express.Router();
const { createCampaign } = require('../controllers/campaign');

router.post('/', createCampaign);

module.exports = router;
