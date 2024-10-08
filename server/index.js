import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit: '50mb'}));

// navigation route

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);

app.get('/',async (req,res)=>{
    res.send('Hello from Dall - E');
});

const startServer = async ()=>{

    try {
        connectDB(process.env.MongoDB_URL);
        app.listen(8080, ()=>console.log('Server is up and running in http://localhost:8080/'))
    } catch (e) {
        console.log(error);
    }

    
}

startServer();