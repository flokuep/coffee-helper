# build application
FROM node:lts AS build
WORKDIR /usr/src/app

# copy sources of ui and server
COPY package.json package-lock.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps ./apps
RUN npm i -g pnpm && \
 pnpm install && \
 pnpm build

 # create production image
FROM node:lts AS production
WORKDIR /usr/src/app

# copy artifacts of ui and serer
COPY --from=build /usr/src/app/apps/server/dist ./
COPY --from=build /usr/src/app/apps/ui/build ./dist/

# copy and install helper for drizzle
WORKDIR /usr/src/app/db-migrations
COPY apps/server/drizzle/ ./drizzle/
COPY docker/ .
RUN npm install && chmod +x start.sh

CMD ["sh", "start.sh"]