import express from 'express';
import cors from 'cors';

const app = express();

// middlewares
app.use(cors());

// routes
app.get('/', (req, res) => {
    res.json({ message: 'Hello World' })
})

export default app;
