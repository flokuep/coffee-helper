import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { readFileSync } from 'fs';
import * as path from 'path';

@Injectable()
export class FrontendMiddleware implements NestMiddleware {
  allowedExt = [
    '.js',
    '.ico',
    '.css',
    '.png',
    '.jpg',
    '.woff2',
    '.woff',
    '.ttf',
    '.svg',
    '.json',
  ];

  resolvePath(file: string) {
    return path.resolve(`../../../ui/build/${file}`);
  }

  use(req: Request, res: Response, next: NextFunction) {
    if (req.baseUrl.startsWith('/api')) {
      next();
    } else if (
      this.allowedExt.filter((ext) => req.baseUrl.indexOf(ext) > 0).length > 0
    ) {
      res.sendFile(this.resolvePath(req.baseUrl));
    } else {
      const html = readFileSync(this.resolvePath('index.html')).toString();
      res.type('text/html').header('Cache-Control', 'no-store').send(html);
    }
  }
}
