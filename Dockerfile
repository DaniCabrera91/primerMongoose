# Utiliza la imagen oficial de Node.js como base
FROM node:18-alpine as builder
# Crea el directorio de trabajo en /root/src
RUN mkdir -p /root/src
# Establece el directorio de trabajo en /root/src
WORKDIR /root/src
# Copia los archivos de configuración
COPY ["package.json", "package-lock.json", "./"]
# Copia los archivos de tu proyecto al directorio de trabajo
COPY . ./
# Instala las dependencias del proyecto
RUN npm install
# Inicia la aplicación cuando se ejecute el contenedor
CMD ["npm", "start"]
