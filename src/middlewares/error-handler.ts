import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../errors/custom-error';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {

    const errorMessage = err.serializeErrors();
    return res.status(err.statusCode).send({ errors: errorMessage });
  }

  res.status(400).send({
    errors: [{ message: 'Something went wrong' }]
  });
};
