import express from 'express';
import errorHandler from './routes/errorHandler';
import { PORT } from './config';
import sequelize from './db';
import brandRoute from './routes/brands';
import productsByBrandRoute from './routes/products';
import { storesByBrandRoute, storesByProductRoute } from './routes/stores';

const app = express();

app.use(express.json());

app.get('/brands/:brandId', brandRoute);
app.get('/brands/:brandId/products', productsByBrandRoute);
app.get('/brands/:brandId/stores', storesByBrandRoute);
app.get('/products/:productId/stores', storesByProductRoute);

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
