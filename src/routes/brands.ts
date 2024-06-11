import { Request, Response, NextFunction } from 'express';
import { Brand } from '../db/models/brands';

// GET /brands/<brandId>
export default async function brandRoute(req: Request, res: Response, next: NextFunction) {
  try {
    const brand = await Brand.findOne({
      where: { id: req.params.brandId },
    });

    res.status(200).json({
      brand,
      ok: true,
    });
  } catch (err) {
    next(err);
  }
}
