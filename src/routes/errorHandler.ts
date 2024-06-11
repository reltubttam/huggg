import { Request, Response, NextFunction } from 'express';

export default function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  console.error('ERROR', err.message);

  res.status(500).json({
    message: err.message,
    ok: false,
  });
}
