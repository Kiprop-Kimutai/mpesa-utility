require('dotenv').config();
const path = require('path');
const crypto = require('crypto');
require('./src/endpoints/index');
const { oauth, securitycredential } = require('./src/security/index');
const MPESA = require('./src/transactions/mpesa').Mpesa;
oauth.getOauthToken().then(res => {console.log(res.data)});

securitycredential.generateSecurityCredential();

let mpesa = new MPESA('Newlogic', securitycredential.generateSecurityCredential(), 'SalaryPayment', '5000', '345876', '254719673996', 'Salary Paid!', 'http://178.62.4.215:3000/api/v1/b2c/timeout',
'http://178.62.4.215:3000/api/v1/b2c/result');

mpesa.transact().then(data => console.log({data}), err => console.error(err));


