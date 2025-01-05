FROM node:lts
WORKDIR /usr/src/app

COPY package.json package-lock.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps ./apps
RUN npm i -g pnpm && \
 pnpm install && \
 pnpm build && \
 pnpm run --filter=server drizzle migrate && \
 cp -r apps/ui/build apps/server/dist && \
 cp -r apps/server/dist . && \
 rm -r apps/ && \
 rm -r node_modules

CMD ["exec node /usr/src/app/dist/src/main \"$@\""]