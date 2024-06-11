import { DataTypes, Model } from 'sequelize';
import sequelize from '..';
import { Brand } from './brands';

interface IProduct extends Model {
  id: string
  created_at: Date
  updated_at: Date
  description: string
  campaign: string
  label: string
  internal_name: string
  integration: string
  price: number
  over_18_offer: number
  redemption_instructions: string
  image: string
  subtitle: string
  weight: number
  recipient_description: string
  tag_group_id: string
  tag_id: string
  open_graph_image: string
  active: number
  on_app: number
  on_imessage: number
  handling_fee: number
  sale_price: number
  huggg_tag: string
  vat_voucher_type: string
  vat: number
  brand_name: string
  brand_weight: number
  image_url: string
  claim_image: string
  claim_image_url: string
  imessage_image: string
  imessage_image_url: string
  open_graph_image_url: string

  pivot: string
}

interface IBrandProduct extends Model {
  id: string
  created_at: Date
  updated_at: Date

  brand_id: string
  product_id: string
  consolidated: boolean
}

const Product = sequelize.define<IProduct>(
  'products',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    description: DataTypes.STRING,
    campaign: DataTypes.STRING,
    label: DataTypes.STRING,
    internal_name: DataTypes.STRING,
    integration: DataTypes.STRING,
    price: DataTypes.FLOAT,
    over_18_offer: DataTypes.FLOAT,
    redemption_instructions: DataTypes.STRING,
    image: DataTypes.STRING,
    subtitle: DataTypes.STRING,
    weight: DataTypes.INTEGER,
    recipient_description: DataTypes.STRING,
    tag_group_id: DataTypes.STRING,
    tag_id: DataTypes.STRING,
    open_graph_image: DataTypes.STRING,
    active: DataTypes.INTEGER,
    on_app: DataTypes.INTEGER,
    on_imessage: DataTypes.INTEGER,
    handling_fee: DataTypes.INTEGER,
    sale_price: DataTypes.INTEGER,
    huggg_tag: DataTypes.STRING,
    vat_voucher_type: DataTypes.STRING,
    vat: DataTypes.INTEGER,
    brand_name: DataTypes.STRING,
    brand_weight: DataTypes.INTEGER,
    image_url: DataTypes.STRING,
    claim_image: DataTypes.STRING,
    claim_image_url: DataTypes.STRING,
    imessage_image: DataTypes.STRING,
    imessage_image_url: DataTypes.STRING,
    open_graph_image_url: DataTypes.STRING,

    pivot: DataTypes.STRING,
  },
  {
    timestamps: false,
  },
);

const BrandProduct = sequelize.define<IBrandProduct>(
  'brand-products',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,

    brand_id: DataTypes.UUID,
    product_id: DataTypes.UUID,
    consolidated: DataTypes.BOOLEAN,
  },
  {
    timestamps: false,
  },
);

Product.belongsToMany(Brand, {
  through: BrandProduct,
  foreignKey: 'product_id',
  otherKey: 'brand_id',
});
Brand.belongsToMany(Product, {
  through: BrandProduct,
  foreignKey: 'brand_id',
  otherKey: 'product_id',
});

export {
  IProduct,
  Product,
};
