import { DataTypes, Model } from 'sequelize';
import sequelize from '..';

interface IBrand extends Model {
  id:string
  created_at: Date
  updated_at: Date
  deleted_at: Date
  name: string
  internal_name: string
  logo: string
  colour: string
  success: string
  share: string
  weight: number
  expiry: number,
  website: string
  integration_id: number
  user_id: string
  email: string
  vat: number
  faq: string
  description: string
  redeem: string
  location_text: string
  map_pin_url: string
  consolidated: number
  default_location_description_markdown: string
  logo_url: string
}

const Brand = sequelize.define<IBrand>(
  'brands',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    deleted_at: DataTypes.DATE,

    name: DataTypes.STRING,
    internal_name: DataTypes.STRING,
    logo: DataTypes.STRING,
    colour: DataTypes.STRING,
    success: DataTypes.STRING,
    share: DataTypes.STRING,
    weight: DataTypes.INTEGER,
    expiry: DataTypes.INTEGER,
    website: DataTypes.STRING,
    integration_id: DataTypes.INTEGER,
    user_id: DataTypes.STRING,
    email: DataTypes.STRING,
    vat: DataTypes.INTEGER,
    faq: DataTypes.STRING,
    description: DataTypes.STRING,
    redeem: DataTypes.STRING,
    location_text: DataTypes.STRING,
    map_pin_url: DataTypes.STRING,
    consolidated: DataTypes.INTEGER,
    default_location_description_markdown: DataTypes.STRING,
    logo_url: DataTypes.STRING,
  },
  {
    timestamps: false,
  },
);

export {
  IBrand,
  Brand,
};
