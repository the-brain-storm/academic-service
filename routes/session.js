const express = require('express');
const router = express.Router();

const callbacks = require('../helper/session')

router.route('/')
    .get(callbacks.getSessionList);

module.exports = router;