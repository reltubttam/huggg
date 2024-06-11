import { Request, Response, NextFunction } from 'express';

// GET /brands/<brand id>/stores
export async function storesByBrand(req: Request, res: Response, next: NextFunction) {
  try {

  } catch (err) {
    next(err);
  }
}

// GET /products/<product id>/stores
export async function storesByProduct(req: Request, res: Response, next: NextFunction) {
  try {

  } catch (err) {
    next(err);
  }
}
