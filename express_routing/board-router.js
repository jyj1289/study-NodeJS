const express = require('express');
let router = express.Router();

router.get('/', (req, res) => {
    res.send('This is board-router!!!');
});

module.exports = router;