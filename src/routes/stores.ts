import { Request, Response, NextFunction } from 'express';
import { Brand } from '../db/models/brands';
import { Store, IStore } from '../db/models/stores';
import { Product, IProduct } from '../db/models/products';
import { formatStores } from '../lib/formatResponse';

// GET /brands/<brand id>/stores
export async function storesByBrandRoute(req: Request, res: Response, next: NextFunction) {
  try {
    const { stores } = await Brand.findOne({
      where: {
        id: req.params.brandId,
      },
      attributes: [],
      include: {
        model: Store,
        as: 'stores',
      },
    }) as any as { stores: IStore[] };

    res.status(200).json({
      stores: formatStores(stores, req.params.brandId),
      ok: true,
    });
  } catch (err) {
    next(err);
  }
}

// GET /products/<product id>/stores
export async function storesByProductRoute(req: Request, res: Response, next: NextFunction) {
  try {
    const { stores } = await Product.findOne({
      where: {
        id: req.params.productId,
      },
      attributes: [],
      include: {
        model: Store,
        as: 'stores',
      },
    }) as any as { stores: IStore[] };

    res.status(200).json({
      stores: formatStores(stores, req.params.brandId),
      ok: true,
    });
  } catch (err) {
    next(err);
  }
}
