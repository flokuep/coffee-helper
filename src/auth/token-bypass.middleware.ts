import { Request, Response, NextFunction } from 'express';

export function tokenBypass(req: Request, res: Response, next: NextFunction) {
  // if ENV.token
  // --> wenn in cache kein JWT fuer ENV.token: auth.service.validateGroup aufrufen und JWT ablegen
  // JWT in header schreiben
  req.headers.authorization =
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IkNhZsOpIE9zdGVydGFnIiwidG9rZW4iOiJzdHJpbmciLCJjcmVhdGVkQXQiOiIyMDI0LTExLTI3VDEwOjAyOjI5LjkzOFoiLCJ1cGRhdGVkQXQiOiIyMDI0LTExLTI3VDEwOjAyOjI5LjkzOFoiLCJpYXQiOjE3MzI4MjA5MTksImV4cCI6MTczMjgyMDk3OX0.PJ8djOB7PgxQqgShR0Zuc4uDRUBedDqkcMO_BNDGfSo';
  next();
}
