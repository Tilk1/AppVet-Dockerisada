FROM node:20-alpine3.17

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos el archivo package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instalamos las dependencias
RUN npm install

# Copiamos el resto de los archivos de la aplicación
COPY . .

# Puerto en el que la aplicación escucha
EXPOSE 3000

RUN npm install -g nodemon

# Comando para ejecutar la aplicación
CMD ["nodemon", "app.js"]