if (process.env.NODE_ENV !== "production") {
      require('dotenv').config();
}

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const logger = require('./config/logger');

// CONNECTING TO DATABASE SERVER
const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/academicService';

mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false
})
.then(() => {
      logger.log('info', 'DB CONNECTION OPENED')
})
.catch(err => {
      logger.log(`Error while openig DB connection:: ${err}`);
      
});

// SERVER LISTENING ON 3000
const port = process.env.PORT || 3000

app.listen(port, () => {
      logger.log('info', `App is listening on port ${port}`);
})

const sessionRoutes = require('./routes/session')
// MIDDLEWARES
app.use(express.json());

// ROUTES IMPORTS

// GENERALIZED ROUTE
app.use('/session', sessionRoutes);

// UNDEFINED ROUTE 
app.use((req, res) => {
      logger.log('info', 'ERROR: Request to an undefined route address')
      res.status(404).json({"message": "UNDEFINED ROUTE"});
})
