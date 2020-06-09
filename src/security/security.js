const path = require('path');
const crypto = require('crypto')
const fs = require('fs');
module.exports = {
    generateSecurityCredential() {
        const bufferToEncrypt = Buffer.from(process.env.initiator_password);
        const data = fs.readFileSync(path.resolve(path.join('src',process.env.cert_file_path)));
        const privateKey = String(data);
        const encrypted = crypto.publicEncrypt({
            key: privateKey,
            padding: crypto.constants.RSA_PKCS1_PADDING
          }, bufferToEncrypt);
        const securityCredential = encrypted.toString('base64');
        console.log(securityCredential);
        return securityCredential
    }
};