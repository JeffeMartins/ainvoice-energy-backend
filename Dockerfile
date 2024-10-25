# Use a imagem oficial do Node.js como base
FROM node:20

# Defina o diretório de trabalho no container
WORKDIR /usr/src/app

# Copie o package.json e o package-lock.json para o container
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie o restante dos arquivos para o diretório de trabalho
COPY . .

# Gere o Prisma Client
RUN npx prisma generate

# Exponha a porta em que sua aplicação vai rodar
EXPOSE 3000

# Comando para rodar a aplicação (migrações já estão no docker-compose)
CMD ["npm", "run", "dev"]
