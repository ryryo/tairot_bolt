FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
COPY . .

RUN npm install
# プロダクションビルドの場合
# RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "dev"] 