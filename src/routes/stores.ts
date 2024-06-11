import { Request, Response, NextFunction } from 'express';
import { Brand, IBrand } from '../db/models/brands';
import { Store, IStore } from '../db/models/stores';
import { Product, IProduct } from '../db/models/products';
import { formatStores } from '../lib/formatResponse';

// GET /brands/<brand id>/stores
export async function storesByBrandRoute(req: Request, res: Response, next: NextFunction) {
  try {
    const brand = await Brand.findOne({
      where: {
        id: req.params.brandId,
      },
      attributes: [],
      include: {
        model: Store,
        as: 'stores',
      },
    });

    if (!brand) {
      return res.status(404).json({
        stores: [],
        ok: true,
      });
    }

    return res.status(200).json({
      stores: formatStores(brand.toJSON().stores, req.params.brandId),
      ok: true,
    });
  } catch (err) {
    return next(err);
  }
}

// GET /products/<product id>/stores
export async function storesByProductRoute(req: Request, res: Response, next: NextFunction) {
  try {
    const brands = await Brand.findAll({
      attributes: [
        'id',
      ],
      include: [
        {
          model: Store,
          as: 'stores',
        },
        {
          model: Product,
          as: 'products',
          attributes: [],
          where: {
            id: req.params.productId,
          },
        },
      ],
    });

    if (!brands.length) {
      return res.status(404).json({
        stores: [],
        ok: true,
      });
    }

    const flattenedStores = brands.reduce((allStores: IStore[], brand) => {
      const brandJson = brand.toJSON();
      return allStores.concat(formatStores(brandJson.stores, brandJson.id));
    }, []);

    return res.status(200).json({
      stores: flattenedStores,
      ok: true,
    });
  } catch (err) {
    return next(err);
  }
}
