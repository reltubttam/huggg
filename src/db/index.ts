import { Sequelize } from 'sequelize';
import { POSTGRES_URL } from '../config';

const sequelize = new Sequelize(POSTGRES_URL, {
  dialect: 'postgres',
});

sequelize.authenticate()
  .then(() => console.log('postgres connected'))
  .catch((err) => console.error('postgres failed to connected', err));

export default sequelize;
