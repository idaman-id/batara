
import express from 'express';

export default abstract class Middleware
{

  abstract handle(
    req: express.Request, 
    res: express.Response, 
    next: express.NextFunction
  ): void;

}
