import { DataTypes, Model } from 'sequelize';
import sequelize from '..';

interface IStore extends Model {
  id: string
  longitude: number
  website: string
  name: string
  description: string
  visible: number
  description_markdown: string
  image: string
  image_url: string
  latitude: number
}

const Store = sequelize.define<IStore>(
  'stores',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    longitude: DataTypes.FLOAT,
    website: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    visible: DataTypes.INTEGER,
    description_markdown: DataTypes.STRING,
    image: DataTypes.STRING,
    image_url: DataTypes.STRING,
    latitude: DataTypes.FLOAT,
  },
  {
    timestamps: false,
  }
);

export {
  IStore,
  Store,
};
