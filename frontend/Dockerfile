# Stage 1: build
FROM node:24.8.0-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install
RUN npm install --save-dev --save-exact typescript

COPY . .
RUN npm run build

# Stage 2: run (development)
FROM node:24.8.0-alpine
WORKDIR /app

COPY --from=builder /app ./

ENV NODE_ENV=development
CMD ["npm", "run", "dev"]