#backend
FROM node:lts AS backend
WORKDIR /usr/src/app

COPY apps/server/package.json apps/server/package-lock.json ./
RUN npm install
COPY apps/server .
RUN npm run build && npm prune --omit=dev --omit=optional

#frontend
FROM node:lts AS frontend
WORKDIR /usr/src/app

COPY apps/ui/package.json apps/ui/package-lock.json apps/ui/svelte.config.js ./
RUN npm install
COPY apps/ui .
RUN npm run build

# prepare image
COPY --from=backend /usr/src/app/node_modules ./node_modules
COPY --from=backend /usr/src/app/dist ./dist
COPY --from=backend /usr/src/app/bin ./bin
COPY --from=frontend /usr/src/app/build /build/www

CMD ["exec node /usr/src/app/dist/main \"$@\""]