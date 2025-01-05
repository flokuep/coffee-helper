FROM node:lts
WORKDIR /usr/src/app

COPY package.json package-lock.json pmpm-lock.yaml pnpm-workspace.yaml ./
COPY apps .
RUN npm i -g pnpm && pnpm install && pnpm build 
COPY apps/ui/build apps/server/dist

CMD ["exec node /usr/src/app/dist/src/main \"$@\""]