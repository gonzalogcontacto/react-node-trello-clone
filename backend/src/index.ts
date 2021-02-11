import express from 'express';
import { listRoutes } from './routes/list.routes';
import cors from 'cors';

// Initialitation
const app = express();

// Server Settings
app.set('port', 5000);
app.use(cors());
// Middlewares
app.use(express.json()); // Can read JSON from body request params

// Loading routes
app.use('/api', listRoutes);

// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server is running on port ${app.get('port')}`);
});