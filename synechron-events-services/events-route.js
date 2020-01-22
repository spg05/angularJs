
https://sso.capgemini.com/opensso/XUI/?realm=/Capgemini&forward=true&spEntityID=f4b13b73-7725-4154-99ea-cb9d6a4855e0&goto=/SSORedirect/metaAlias/Capgemini/idpassignmentPro?ReqID%3DI0_rhtUY7L1yncaqDlAR2GNTTrtTOSeDB2LOIgAiirdoR_tanS1Snltpf8Li-F%26index%3Dnull%26acsURL%3D%26spEntityID%3Df4b13b73-7725-4154-99ea-cb9d6a4855e0%26binding%3D&AMAuthCookie=#login/


const express = require('express');
const eventRoutes = express.Router();
var eventObj = require('./web-api/event-api');


eventRoutes.get('/', (req, res) => {
    var promise = eventObj.getAllEvents();
    promise.then((data) => {
        res.json(data);
    }, (reason) => {
        console.log(reason);
        res.send("Something went wrong! Please try after some time!");
    });
});
eventRoutes.get('/:id', (req, res) => {
    let id = req.params.id;
    let promise = eventObj.getSingleEvent(id);
    promise.then((data) => {
        res.json(data);
    }, (reason) => {
        console.log(reason);
        res.send("Something went wrong! Please try after some time!");
    });
});
eventRoutes.post("/", (req, res) => {
    let event = req.body;
    let promise = eventObj.insertEvent(event);
    promise.then((data) => {
        res.json(data);
    },
        (reason) => {
            res.send(reason);
        })
});

module.exports = eventRoutes;
