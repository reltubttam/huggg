import { Request, Response, NextFunction } from 'express';

// GET /brands/<brand id>/products
export default async function productsByBrand(req: Request, res: Response, next: NextFunction) {
  try {

  } catch (err) {
    next(err);
  }
}
