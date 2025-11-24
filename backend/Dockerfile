# Stage 1: build
FROM node:24.8.0-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: run
FROM node:24.8.0-alpine
WORKDIR /app

COPY --from=builder /app ./

RUN npm install --omit=dev

RUN npm install -g @nestjs/cli

ENV NODE_ENV=development
CMD ["nest", "start", "--watch"]