const axios = require('axios');
const security = require('../security/index');
class Mpesa {
    constructor(InitiatorName, SecurityCredential, CommandID, Amount,
        PartyA, PartyB, Remarks, QueueTimeOutURL, ResultURL) {
            console.log(QueueTimeOutURL);
        this.InitiatorName = InitiatorName;
        this.SecurityCredential = SecurityCredential;
        this.CommandID = CommandID;
        this.Amount = Amount;
        this.PartyA = PartyA;
        this.PartyB = PartyB;
        this.Remarks  = Remarks;
        this.QueueTimeOutURL = QueueTimeOutURL;
        this.ResultURL = ResultURL;
        this.getToken();
        this.token = null;
    }
    getToken() {
        security.oauth.getOauthToken().then(res => {this.token = res.data.access_token; console.log(`-->${this.token}`)});
    }
    async transact() {
        let token;
        await security.oauth.getOauthToken().then(res => {this.token = res.data.access_token; console.log(`here-> ${res.data.access_token}`)});
        console.log('<------->');
        console.log(this.token);
        console.log('----------')
        return axios({
            url: process.env.c2b_url,
            method: 'post', 
            headers: {
                Authorization: `Bearer ${this.token}`,
                'Content-Type': 'application/json'
            },
            data: {
                InitiatorName: this.InitiatorName,
                SecurityCredential: this.SecurityCredential,
                CommandID: this.CommandID,
                Amount: this.Amount,
                PartyA : this.PartyA,
                PartyB: this.PartyB,
                Remarks: this.Remarks,
                QueueTimeOutURL: this.QueueTimeOutURL,
                ResultURL: this.ResultURL
            }
        });
    }
}

module.exports = {Mpesa};