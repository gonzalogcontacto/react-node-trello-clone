import express from 'express';
import { listRoutes } from './routes/list.routes';
import cors from 'cors';
require('dotenv').config();

// Initialitation
const app = express();

// Server Settings
app.set('port', 5000);
app.use(cors());

// Database Setup
let mongoose = require('mongoose');
const mongoDB = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@trelloclonedb.4cgng.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Middlewares
app.use(express.json()); // Can read JSON from body request params

// Loading routes
app.use('/api', listRoutes);

// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server is running on port ${app.get('port')}`);
});