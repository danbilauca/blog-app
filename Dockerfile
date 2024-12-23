FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
CMD ["npm", "start"]


FROM node:20-alpine
WORKDIR /app
COPY --from=build /app/build /build
RUN npm install -g serve