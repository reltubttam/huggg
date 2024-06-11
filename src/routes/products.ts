import { Request, Response, NextFunction } from 'express';
import { Brand } from '../db/models/brands';
import { Product, IProduct } from '../db/models/products';
import { formatProducts } from '../lib/formatResponse';

// GET /brands/<brand id>/products
export default async function productsByBrandRoute(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const brand = await Brand.findOne({
      where: {
        id: req.params.brandId,
      },
      attributes: [],
      include: {
        model: Product,
        as: 'products',
      },
    });

    if (!brand) {
      return res.status(404).json({
        products: [],
        ok: true,
      });
    }

    return res.status(200).json({
      products: formatProducts(brand.toJSON().products, req.params.brandId),
      ok: true,
    });
  } catch (err) {
    return next(err);
  }
}
