# build stage #
FROM node:lts-alpine3.17 as build

WORKDIR /app

# install dependencies and devDependencies
COPY package*.json yarn*.lock tsconfig.json ./
RUN yarn install --frozen-lockfile && yarn cache clean

# build ts
COPY src/ ./src
RUN yarn build

# ----- #

FROM node:lts-alpine3.17 as prod

WORKDIR /app
ENV NODE_ENV=production
EXPOSE 80

# install only dependencies
COPY package*.json yarn*.lock ./
RUN yarn install --frozen-lockfile --production && yarn cache clean

COPY --from=build /app/dist ./dist

CMD ["node", "--es-module-specifier-resolution=node", "./dist/app.js"]