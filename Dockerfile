# Указываем базовый образ
FROM node:14

# Устанавливаем рабочую директорию
WORKDIR /usr/src/app

# Копируем package.json и устанавливаем зависимости
COPY package*.json ./
RUN npm install

# Копируем весь код приложения
COPY . .

# Указываем команду для запуска приложения
CMD ["node", "app.js"]

# Открываем порт
EXPOSE 3000
