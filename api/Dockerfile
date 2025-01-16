FROM node:22-alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm
RUN pnpm install

COPY . .

RUN pnpm prisma generate

EXPOSE 4000

CMD [ "pnpm", "start:dev" ]
