FROM node:lts
WORKDIR /usr/src/app

COPY package.json package-lock.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps ./apps
RUN npm i -g pnpm && \
 pnpm install && \
 pnpm build && \
 cp -r apps/ui/build apps/server/dist && \
 cp -r apps/server/dist . && \
 rm -r apps/ && \
 rm -r node_modules

CMD ["exec node /usr/src/dist/src/main \"$@\""]