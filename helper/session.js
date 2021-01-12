const logger = require('../config/logger');
const Session = require('../models/session');
const callbacks = {};

callbacks.getSessionList = (req,res) =>{
    Session.find(req.query)
    .then(s=> {
        logger.log('info' , `Fetched session's list`);
        res.json(s);
    })
    .catch(err => {
        logger.log('info' , `Error while fetching sessionss list: ${err}`);
        res.status(404).json({message:err.message})
    })
}

module.exports = callbacks;