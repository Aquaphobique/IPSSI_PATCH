import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes/index.js';
import sequelize from './config/sequelize.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cors({ origin: process.env.CORS_ORIGIN }));

app.use('/api', routes);

app.get('/health', (req, res) => res.json({ status: 'ok' }));

async function start() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(port, () => console.log(`Backend running on port ${port}`));
  } catch (err) {
    console.error('DB connection failed:', err.message);
  }
}
start();

