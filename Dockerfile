FROM node:22-alpine

WORKDIR /app

# Copia package.json y yarn.lock
COPY package.json yarn.lock ./

# Instala las dependencias
RUN yarn install

# Copia el resto de la aplicación
COPY . .

# Exponer el puerto que Vite usará
EXPOSE 5173

# Comando para iniciar la aplicación en modo desarrollo
CMD ["yarn", "dev"]


