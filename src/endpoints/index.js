const timeouturl = require('./timeout.url');
const resulturl = require('./result.url');
const express = require('express');
const router = express.Router();
const app = express();
router.use('/b2c/timeout',timeouturl);
router.use('/b2c/result', resulturl);

app.use('/api/v1/', router);

var server = app.listen(process.env.PORT || 3000, () => {
    console.log(`server listening on port ${server.address().port}`);
});
