const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
router.post('/', (req, res) => {
    fs.appendFile(path.join('./endpoints/', 'timeout.txt'), JSON.stringify(req.body).concat('\n'), (err) => {
        if (err)
            console.error(err);
        console.log('Data written to file...');
        res.status(201).json(true);
    })
});
module.exports = router;