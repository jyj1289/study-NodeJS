const express = require('express');
let router = express.Router();

router.get('/', (req, res) => {
    res.send('This is a user-router');
});

module.exports = router