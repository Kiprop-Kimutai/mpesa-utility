const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
router.post('/', (req, res) => {
    console.log(req.body);
    fs.appendFile(path.join('./endpoints/', 'result.txt'), JSON.stringify(req.body).concat('\n'), (err) => {
        if (err)
            console.error(err);
        console.log('Data written to file...');
        res.status(201).json(true);
    })
});
module.exports = router;