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
    const { products } = await Brand.findOne({
      where: {
        id: req.params.brandId,
      },
      attributes: [],
      include: {
        model: Product,
        as: 'products',
      },
    }) as any as { products: IProduct[] };

    res.status(200).json({
      products: formatProducts(products, req.params.brandId),
      ok: true,
    });
  } catch (err) {
    next(err);
  }
}
