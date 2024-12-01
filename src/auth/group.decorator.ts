import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const CurrentGroup = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);
