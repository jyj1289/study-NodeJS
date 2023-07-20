const express = require('express');
let router = express.Router();

router.get('/', (req, res) => {
    res.send('Express Server');
});

module.exports = router;