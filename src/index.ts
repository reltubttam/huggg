import express from 'express';
import errorHandler from './routes/errorHandler';
import { PORT } from './config';
import sequelize from './db';
import brandRoute from './routes/brands';

const app = express();

app.use(express.json());

app.get('/brands/:brandId', brandRoute);

app.use(errorHandler);
const runningApp = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

function gracefulShutdown() {
  runningApp.close();
  sequelize.close();
}
process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);
