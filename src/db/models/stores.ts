import { DataTypes, Model } from 'sequelize';
import sequelize from '..';
import { Brand } from './brands';

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

interface IBrandStore extends Model {
  id: string
  created_at: Date
  updated_at: Date

  brand_id: string
  store_id: string
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
  },
);

const BrandStore = sequelize.define<IBrandStore>(
  'brand-stores',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,

    brand_id: DataTypes.UUID,
    store_id: DataTypes.UUID,
  },
  {
    timestamps: false,
  },
);

Store.belongsToMany(Brand, {
  through: BrandStore,
  foreignKey: 'store_id',
  otherKey: 'brand_id',
});
Brand.belongsToMany(Store, {
  through: BrandStore,
  foreignKey: 'brand_id',
  otherKey: 'store_id',
});

export {
  IStore,
  Store,
};
